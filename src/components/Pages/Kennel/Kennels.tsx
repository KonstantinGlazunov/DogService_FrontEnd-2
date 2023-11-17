/* eslint-disable prettier/prettier */
/* eslint-disable import/default */
import React, { useState } from 'react';
import s from './Kennels.module.css';
import dogImage from '../Sitters/images/dog.png';
import dog2 from './img/isolated.jpg';
import dog8 from './img/2150686742.jpg';
import dog5 from './img/dog5.jpeg';
import dog9 from './img/dog9.jpg';
import dog10 from './img/closeup.jpg';

import FindKennelForm from '../../../features/kennels/FindKennelForm';
import KennelsList from '../../../features/kennels/KennelsList';
import KennelCreate from '../../../features/kennels/KennelCreate';


const Kennels: React.FC = (): JSX.Element => {
	//  const options = [
	// 	{ value: 'chocolate', label: 'Chocolate' },
	// 	{ value: 'dresden', label: 'Dresden' },
	// 	{ value: 'berlin', label: 'Berlin' },
	// ];

	return (
		<div className={s.container}>
			<section id={s.mainSection}>
				<div className={s.title}>
					<h1 className={s.h1title}>Stellen Sie sicher, dass Ihr Hund nicht krank ist</h1>
					<p className={s.ptitle}>
						Finden Sie auf unseren Webcite Ihre Klinik für Ihr gelibtes Haustier <br />
						unseren professionellen Dog Walking Service
					</p>
				</div>
				<div className={s.searchSitters}>
					<div className={s.descrSearch}>
						<div className={s.descr1}>
							<p className={s.pHunde}>Die Gesundheit Ihrer Hunde</p>
							<div className={s.imgDescr}>
								<img src={dogImage} alt="dog" />
								<p>
									Wir helfen Ihnen <br /> Ihr Haustier zu finden
								</p>
							</div>
						</div>
						<div className={s.descr2}>
							<p className={s.pdescr2}>Warst du schon bei uns?</p>
							<p>Einen ehemaligen Hundesitter buchen</p>
						</div>
					</div>
					<div>
						{<FindKennelForm/>}
					</div>


				{/* 	<div className={s.selectDate}>
						<div className={s.selectplz}>
							<p>PLZ oder Ort</p>
							<Select options={options} />
						</div>
					</div>

					<div className={s.selOption}></div>
					<div className={s.applySelect}>
						<button className={s.btn} type="button">
							Wählen Sie einen Klinik
						</button>
					</div>
					 */}

				</div>
		
			 </section>

			 <section id={s.clinicsSection}>
           {/* <h2>Kennels</h2> */}
              {<KennelsList/>}
          </section>

				
	



			<section id={s.kennelsSection} className={s.kennelsSection}>
				<div className={s.kenDescr}>
					<h1>Züchter für Hunde</h1>
					<p>
						Sie haben bereits klar verstanden, dass Sie einen Hund haben möchten und sich für eine
						Rasse entschieden haben? Dann müssen Sie entscheiden, wo Sie Ihren zukünftigen Begleiter
						kaufen möchten. Wenn Sie keine verifizierten Bekannten haben, bei denen Sie einen
						gesunden Welpen kaufen können, ist es am besten, sich an einen Hundezüchter zu wenden.
						In Ihrer Stadt gibt es wahrscheinlich mindestens einen solchen Züchter. Wenn Sie dort
						ein Tier kaufen, können Sie sicher sein, dass Sie nicht getäuscht werden, vorausgesetzt,
						es handelt sich um vertrauenswürdige Züchter.
					</p>
				</div>
				<div className={s.kenDescr}>
					<h2>Was ist eine Hundezucht?</h2>
					<p>
						Erstens sollte darauf geachtet werden, dass Züchter nicht mit Tierheimen verwechselt
						werden sollten. Dies sind zwei völlig verschiedene Konzepte. In Zuchtbetrieben leben
						keine streunenden Hunde, dies sind spezielle Orte, an denen Fachleute Hunde einer
						bestimmten Rasse oder mehrerer Rassen züchten. In zuverlässigen Hundezuchten werden
						spezielle Bedingungen geschaffen, damit die Tiere normal aufwachsen und sich entwickeln
						können. Sie werden von Fachleuten überwacht, die sich seit Jahren mit der Zucht
						beschäftigen. Zuchtbetriebe können mit speziellen Dressurplätzen, Futterküchen und
						Fitnessstudios ausgestattet sein. Ein solcher Betrieb muss auch über alle erforderlichen
						Dokumente sowohl für seine Tätigkeit als auch für die Tiere verfügen.
					</p>
				</div>
				<div className={s.kenDescr}>
					<p>
						Auf unserer Website finden Sie eine breite Liste von verifizierten Hundezüchtern, die in
						der Ukraine tätig sind. Wir haben Informationen über Orte gesammelt und veröffentlicht,
						denen Sie vertrauen können. Dort arbeiten Profis in ihrem Geschäft, Sie können sicher
						sein, dass Sie einen starken und gesunden Welpen genau der Rasse erhalten, die Sie
						gewählt haben.
					</p>
				</div>
			</section>
			<section id={s.Rassen}>
				<div className={s.rasTitle}>
					<h2>In unseren Zwingern finden Sie die unterschidlichsten Hunderassen. <br /> Schau nur, wie
					süß sie sind!</h2>
				</div>
				<div className={s.imgRassen}>
					<div className={s.dogOne}>
						<img src={dog2} alt="Hunden" />
						<img src={dog10} alt="Hunden" />
					</div>
					<div className={s.dogOne}>
						<img src={dog8} alt="Hunden" />
						<img src={dog5} alt="Hunden" />
					</div>
					{/* <div className={s.dogOne}>
						<img src={dog9} alt="Hunden" />
						<img src={dog9} alt="Hunden" />

					</div> */}
				</div>
			</section>
		</div>
	);
};
export default Kennels;
