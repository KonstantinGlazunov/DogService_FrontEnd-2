/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import s from './Sitters.module.css';
import dogImage from './images/dog.png';
import Select from 'react-select';
import betrou from './images/dogErz.jpg';
import doginpark from './images/dalmatian.jpg';
import aboutUs from './images/manAbousUs.jpg';

function Sitters() {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];

	const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
	const [filteredSitters, setFilteredSitters] = useState<{ name: string; size: string }[]>([]);

	const sitters = [
		{
			name: 'Oksana',
			size: 'mittel',
		},
	];

	const toggleSize = (size: string) => {
		if (selectedSizes.includes(size)) {
			setSelectedSizes(selectedSizes.filter((s) => s !== size));
		} else {
			setSelectedSizes([...selectedSizes, size]);
		}
	};

	const applyFilters = () => {
		const filtered = sitters.filter((sitter) => {
			if (selectedSizes.length > 0 && !selectedSizes.includes(sitter.size)) {
				return false;
			}

			return true;
		});

		setFilteredSitters(filtered);
	};

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
				<div className={s.searchSitters}>
					<div className={s.descrSearch}>
						<div className={s.descr1}>
							<p className={s.pHunde}>Hundespaziergänge</p>
							<div className={s.imgDescr}>
								<img src={dogImage} alt="dog" />
								<p>
									Wir gehen spazieren, während du <br /> arbeitest
								</p>
							</div>
						</div>
						<div className={s.descr2}>
							<p className={s.pdescr2}>Warst du schon bei uns?</p>
							<p>Einen ehemaligen Hundesitter buchen</p>
						</div>
					</div>
					<div className={s.selectDate}>
						<div className={s.selectplz}>
							<p>PLZ oder Ort</p>
							<Select options={options} />
						</div>
					</div>
					<div className={s.selOption}>
						<div className={s.sizeDog}>
							<p>Die Größe meines Hundes</p>
							<div className={s.selectSize}>
								<div
									className={
										selectedSizes.includes('mini') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('mini')}
								>
									Mini <p>bis 5 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('small') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('small')}
								>
									Klein <p>5-10 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('medium') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('medium')}
								>
									Mittel <p>10-20 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('large') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('large')}
								>
									Groß <p>20-40 kg</p>
								</div>
								<div
									className={
										selectedSizes.includes('ragged') ? `${s.sizeDogs} ${s.selected}` : s.sizeDogs
									}
									onClick={() => toggleSize('ragged')}
								>
									Riesig <p>40+ kg</p>
								</div>
							</div>
						</div>
					</div>
					<div className={s.applySelect}>
						<button className={s.btn} type="button" onClick={applyFilters}>
							Wählen Sie einen Hundesitter
						</button>
					</div>
				</div>
			</section>
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

export default Sitters;
