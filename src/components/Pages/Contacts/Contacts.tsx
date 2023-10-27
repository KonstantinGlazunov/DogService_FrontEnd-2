import React from 'react'
import styles from './Contacts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Contact = (): JSX.Element => {
    return(
        <div className={styles.container}>
        <section className={styles.ft}>
<h2>Contacts us</h2>
<div className={styles.row}>
    <form action="#">
        <div className={styles.inputContainer}>
            <input type="text" required />
            <label htmlFor="">Name</label>
        </div>
        <div className={styles.inputContainer}>
            <input type="email" required />
            <label htmlFor="">Email</label>
        </div>
        <div className={styles.inputContainer}>
            <input type="number" required />
            <label htmlFor="">Number</label>
        </div>
        <div className={styles.inputContainer}>
            <textarea required name="" id="" cols={30}rows={10}></textarea>
            <label htmlFor="">Message</label>
        </div>
        <input type="submit" value="Send message" className={styles.btn}/>
    </form>
    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621713.9693875!2d12.766738699949475!3d52.505019409509735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvQuNC9!5e0!3m2!1sru!2sde!4v1698239461511!5m2!1sru!2sde"style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
</section>
</div>
);
}

export default Contact