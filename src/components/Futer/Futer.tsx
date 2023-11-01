import React from 'react'
import styles from './Futer.module.css';
import mapIcon from './img/map.svg' 
import phone  from './img/phone.svg'
import instagram from './img/instagram.svg'
import facebook from './img/facebook.svg'
import envelope from './img/envelope.svg'
import youtube from './img/youtube.svg'



const Futer = (): JSX.Element => {
    return(
        <footer className={styles.siteFooter}>
            <div className={styles.container}>
                <div className={styles.footerLeft}>
                    <a className={styles.ftLogo} href="/"><h1>Petscare</h1></a>
                    <div className={styles.ftInfo}>
                        <div className={styles.ftInfoItem}>
                            
                        <span className={styles.ftInfoIcon} >
                        <img src={mapIcon} alt="" className={styles.ic} />
                        </span>
                        <span>Germany, Berlin</span>
                        </div>

                        <div className={styles.ftInfoItem}>
                        <span className={styles.ftInfoIcon} >
                        <img src={phone} alt="" className={styles.ic} />
                        </span>
                        <span>+49 175 9587225</span>
                        </div>

                        <div className={styles.ftInfoItem}>
                        <span className={styles.ftInfoIcon} >
                        <img src={envelope} alt="" className={styles.ic} />
                        </span>
                        <span>Petscare@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.ftSocial}>
                    <a href="https://www.facebook.com/profile.php?id=61553103295303" target="_blank"><img src={facebook} alt="" className={styles.ic} /></a>
                    <a href="https://www.instagram.com/hunde24service/" target="_blank"><img src={instagram} alt="" className={styles.ic} /></a>
                <a href="https://www.youtube.com/channel/UCaozidmPEF99KGAJlB8opAg" target="_blank"><img src={youtube} alt="" className={styles.ic}/></a>
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
        </footer>
    )
}
export default Futer