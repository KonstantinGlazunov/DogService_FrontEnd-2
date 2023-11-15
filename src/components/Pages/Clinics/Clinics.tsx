/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/default */
import React, { useState } from 'react';
import ClinicsList from '../../../features/clinics/ClinicsList';
import s from './Clinics.module.css';
import dogImage from '../Sitters/images/dog.png';
import Select from 'react-select';
import FindClinicForm from '../../../features/clinics/FindClinicForm';

const Clinics: React.FC = (): JSX.Element => {
	// const options = [
	// 	{ value: 'chocolate', label: 'Chocolate' },
	// 	{ value: 'strawberry', label: 'Strawberry' },
	// 	{ value: 'berlin', label: 'Berlin' },
	// ];

	// const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
	// const [filteredSitters, setFilteredSitters] = useState<{ name: string; size: string }[]>([]);

	// const clinics = {
	// 	name: 'Alabai',
	// 	description: 'Wir kümmern uns um Ihre geliebten Tiere',
	// 	city: 'Berlin',
	// 	telephoneNumber: '+49521358742'
	// }
  return (
    <div className={s.container}>
      <section id={s.mainSection}>
        <div className={s.title}>
          <h1 className={s.h1title}>Stellen Sie sicher, dass Ihr Hund nict krank ist</h1>
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
									Wir gehen spazieren, während du <br /> arbeitest
								</p>
							</div>
						</div>
						<div className={s.descr2}>
							<p className={s.pdescr2}>Warst du schon bei uns?</p>
							<p>Einen ehemaligen Hundesitter buchen</p>
						</div>
					</div>
					<div>
						{<FindClinicForm/>}
					</div>
					{/* <div className={s.selectDate}>
						<div className={s.selectplz}>
							<p>PLZ oder Ort</p>
							<Select options={options} />
						</div>
					</div>

          <div className={s.selOption}>
          </div>
          <div className={s.applySelect}>
            <button className={s.btn} type="button">
              Wählen Sie einen Klinik
            </button>
          </div> */}
					{/* <div className={s.dogg}>
						Wir kümmern uns um Ihren Hund, wir haben die besten Kliniken
					</div> */}
        </div>
      </section>
			<section id={s.clinicsSection}>
           {/* <h2>Kennels</h2> */}
              {<ClinicsList/>}
          </section>
			<section id={s.description}>
				<div className={s.descr}>
					<p>Tierhalter stehen oft vor der Wahl: Tierklinik oder Praxis für Kleintiere? Sollten sie ihr Haustier in eine Tierklinik oder in eine Kleintierpraxis bringen? Beide Einrichtungen bieten medizinische Versorgung für Tiere an, aber es gibt einige wichtige Unterschiede zwischen ihnen. In diesem Artikel erklären wir den Unterschied zwischen einer Tierklinik und einer Kleintierpraxis und helfen Ihnen, die richtige Wahl für Ihr Haustier zu treffen.</p>
				</div>
			</section>
			<section id={s.signale}>
				<div className={s.titleSignale}>
					<h1>Signale bei Hunden</h1>
				</div>
				<div className={s.descrSignale}>
					<div className={s.oneSign}>
						<div className={s.sign}>Krämpfe</div>
					<div className={s.sign}>Juckt</div>
					
					</div>
					<div className={s.oneSign}>
						<div className={s.sign}>Einen Fremdkörper verschluckt</div>
					<div className={s.sign}>Gewicht verloren</div>
					</div>

					<div className={s.oneSign}>
					<div className={s.sign}>Hohe Temperatur</div>
					<div className={s.sign}>Übermäßiges</div>
					</div>

					<div className={s.oneSign}>
						
					<div className={s.sign}>Schwellung</div>
					<div className={s.sign}>Sich erbrechen</div>
					</div>
				</div>
			</section>
      <section id={s.clinicsSection}>
        <h2>Kliniken</h2>
        {/* <ClinicsList clinics={clinics} /> */}
      </section>
    </div>
	);
};
export default Clinics;
