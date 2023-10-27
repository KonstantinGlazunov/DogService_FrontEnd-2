import React from 'react'
import styles from './Futer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Futer = (): JSX.Element => {
    return(
        <footer className={styles.siteFooter}>
            <div className={styles.container}>
                <div className={styles.footerLeft}>
                    <a className={styles.ftLogo} href="/"><h1>Petscare</h1></a>
                    <div className={styles.ftInfo}>
                        <div className={styles.ftInfoItem}>
                        <span className={styles.ftInfoIcon} >
                            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.ic} />
                        </span>
                        <span>Germany, Berlin</span>
                        </div>

                        <div className={styles.ftInfoItem}>
                        <span className={styles.ftInfoIcon} >
                        <FontAwesomeIcon icon={faPhone} className={styles.ic} />
                        </span>
                        <span>+49 175 9587225</span>
                        </div>

                        <div className={styles.ftInfoItem}>
                        <span className={styles.ftInfoIcon} >
                        <FontAwesomeIcon icon={faEnvelope} className={styles.ic} />
                        </span>
                        <span>Petscare@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.ftSocial}>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTelegram} className={styles.icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} className={styles.icon} /></a>
                    </div>
                </div>
                <div className={styles.ftRight}>
                    <div className={styles.ftMenu}>
                        <div className={styles.ftTitle}>Unsere Diensleistungen</div>
                        <a href="#">Verkauf von Hunde</a>
                        <a href="#">Hotel für Hunde</a>
                        <a href="#">Hundeverpaarrung</a>
                        <a href="#">Hundesitter</a>
                        
                        </div>
                        <div className={styles.ftMenu}>
                        <div className={styles.ftTitle}>Website-Regeln</div>
                        <a href="#">Datenschutzbestimmungen</a>
                        <a href="#">Hotel für Hunde</a>
                        <a href="#">Hundeverpaarrung</a>
                        <a href="#">Nutzungsvertrag</a>
                        <a href="#">Zahlung</a>
                        
                        </div>
                        <div className={styles.ftMenu}>
                        <div className={styles.ftTitle}>Hilfe und Unterstützung</div>
                        <a href="#">Datenschutzbestimmungen</a>
                        <a href="#">Registriren</a>
                        <a href="#">Eine fragen stelen</a>
                    </div>
                    
                </div>
            </div>
                                    <div className={styles.ftCopyRight}>
                        <p>
                        2023 &copy; Petscare alle Rechte vorbehalten 
                        </p>
                    </div>


        {/* <section className={styles.ftEnd}>
            <h4>Get in Touch</h4>

            <div className={styles.infoItems}>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <p>Berlin <br /> Germany</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                    <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <p>+49 175 9587225</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <p>Petscare@gmail.com</p>
                </div>
            </div>
            <div className={styles.socialBox}>
                <h4>Follow us</h4>
                <div className={styles.box}>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTelegram} className={styles.icon} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} className={styles.icon} /></a>
                </div>
            </div>
        </section>
        <footer className={styles.footerSect}>
            <p>
                &copy; Students of cohort 25 did
            </p>
        </footer> */}


        </footer>
    )
}
export default Futer