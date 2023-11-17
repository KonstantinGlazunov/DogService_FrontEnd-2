/* eslint-disable react/react-in-jsx-scope */

import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import DogsittersList from './DogsittersList';
import { loadDogsittersByCityAndSize } from './dogsittersSlice';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import s from './css/SittersPage.module.css';
import dogImage from './images/dog.png';
import betrou from './images/betreuung.png';
import doginpark from './images/inpark.png';
import aboutUs from './images/aboutUs.png';

export default function SittersPage(): JSX.Element {
	const [toggleStart, setToggleStart] = useState(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [selectedSizes, setSelectedSizes] = useState<string>('');
	//const [size, setSize] = useState<string>('');

	const dispatch = useAppDispatch();

	function processInput(inputValue: string) {
		if (/^\d+$/.test(inputValue)) {
			//is a number?
			return { zip: inputValue, city: '' };
		} else {
			return { zip: '', city: inputValue };
		}
	}

	const toggleSize = (size: string) => {
		setSelectedSizes(size);
	};
	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		//push-button function
		const processedInput = processInput(inputValue);
		const { zip: processedZip, city: processedCity } = processedInput;
		dispatch(
			loadDogsittersByCityAndSize({ city: processedCity, size: selectedSizes, zip: processedZip })
		);
		e.preventDefault(); //so it doesn't go to the next page.
		setToggleStart(true);
	}

	return (
		<div className={s.container}>
			<section id={s.mainSection}>
				<div className={s.title}>
					<h1 className={s.h1Title}>Gönnen Sie Ihrem Hund Spaziergänge</h1>
					<p className={s.title}>
						Sorgen Sie dafür, dass Ihr Hund genug Bewung bekommt und buchen Sie <br />
						unseren professionellen Dog Walking Service
					</p>
				</div>
				{/* form begin */}
				<form className={s.searchSitters} onSubmit={handleSubmit}>
					<div className={s.descrSearch}>
						<div className={s.descr1}>
							{' '}
							{/* upper left block */}
							<p className={s.pHunde}>Hundespaziergänge</p>
							<div className={s.imgDescr}>
								<img src={dogImage} alt="dog" />
								<p>
									Wir gehen spazieren, während du <br /> arbeitest
								</p>
							</div>
						</div>
						<div className={s.descr2}>
							{' '}
							{/* upper right block */}
							<p className={s.pdescr2}>Warst du schon bei uns?</p>
							<p>Einen ehemaligen Hundesitter buchen</p>
						</div>
					</div>
					<div className={s.selectDate}>
						{' '}
						{/*PLZ oder ORT */}
						<div className={s.selectplz}>
							<input
								type="text"
								className={`form-control`}
								placeholder="PLZ oder Ort"
								name="plz-or-city"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
						</div>
					</div>
					{/* SIZE */}
					<div className={s.selOption}>
						<div className={s.sizeDog}>
							<p>Die Größe meines Hundes</p>
							<div className={s.selectSize}>
								<div
									className={
										selectedSizes.includes('A_MINI') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('A_MINI')}
								>
									Mini <p>bis 5 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('B_SMALL') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('B_SMALL')}
								>
									Klein <p>5-10 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('C_MIDDLE') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('C_MIDDLE')}
								>
									Mittel <p>10-20 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('D_BIG') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('D_BIG')}
								>
									Groß <p>20-40 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('E_GREAT') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('E_GREAT')}
								>
									Riesig <p>40+ kg</p>
								</div>
							</div>
						</div>
					</div>
					<div className={s.applySelect}>
						<button type="submit" className="btn btn-primary">
							Wählen Sie einen Hundesitter
						</button>
					</div>
				</form>
				{/*end form*/}
			</section>
			{/* SITTER LIST */}
			{toggleStart && <DogsittersList />}
			{/* Other content dogSitters page */}
			<section id={s.descrSection}>
				<p>
					Petscare - Der beste Begleiter für Ihren Hund in Giessen, HE. Bei Petscare wissen wir, wie
					wichtig es ist, dass Ihr vierbeiniger Freund genügend Bewegung und Aufmerksamkeit erhält.
					Als führender Anbieter für Hundespaziergänge in Giessen, HE bieten wir professionelle und
					zuverlässige Dienstleistungen an. Unsere erfahrenen Hundeliebhaber sorgen dafür, dass Ihr
					Hund regelmäßige Spaziergänge in der Umgebung genießt, um Energie abzubauen und glücklich
					zu bleiben. Vertrauen Sie uns, um Ihrem Hund die Aufmerksamkeit und Pflege zu geben, die
					er verdient. Kontaktieren Sie Petscare noch heute und geben Sie Ihrem Hund die beste
					Betreuung.
				</p>
			</section>
			<section id={s.propositionsSection}>
				<div className={s.propositions}>
					<div className={s.propos}>
						<img src={doginpark} alt="Gruppen-Spaziergänge im Park" />
						<h1>
							Gruppen-Spaziergänge <br /> im Park
						</h1>
						<p>
							Sozialisation und Bewegung für Ihren Hund in einer entspannten Gruppenatmosphäre.
							(100-120 Zeichen)
						</p>
					</div>
					<div className={s.propos}>
						<img src={betrou} alt="Einzelbetreuung bei Ihnen zuhause" />
						<h1>
							Einzelbetreuung bei <br />
							Ihnen zuhause
						</h1>
						<p>
							Individuelle Betreuung und maßgeschneiderte Aktivitäten für Ihren Hund in vertrauter
							Umgebung. (100-120 Zeichen)
						</p>
					</div>
				</div>
			</section>
			<section id={s.aboutUs}>
				<div className={s.about}>
					<div className={s.pict}>
						<img src={aboutUs} alt="About us" />
					</div>
					<div className={s.aboutDescr}>
						<h1>Über uns Petscare</h1>
						<p>
							Unser Team von erfahrenen Hundeliebhabern ist bestrebt, die bestmögliche Betreuung für
							Ihre pelzigen Freunde zu gewährleisten. Wir sind vollständig lizenziert und versichert
							und bieten Ihnen die Gewissheit, dass Ihre Hunde in guten Händen sind, während Sie
							beschäftigt sind oder nicht zu Hause sind.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
