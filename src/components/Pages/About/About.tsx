import React from "react"
import s from './About.module.css'


const About = (): JSX.Element => {
    return(
        <div className={s.pageClassName}>
        
        <div className={s.container}>
            <h1>About us</h1>
            <div className={s.descr}>
            <p>We specialize in providing comfortable pet care, including pet walking and boarding. Our service is designed to assist those who find themselves in challenging situations due to illness, busy work schedules, travel plans, or the desire to spend quality time with their family and other important matters. Unable to walk your dog on your own? You can submit a request on our website or give us a call to arrange pet boarding, schedule a pet walk, or utilize our pet sitting services. Our commitment to safety, use of secure equipment, empathy, experience, and human connection are what make pet owners across all areas entrust us with the care of their dogs.</p>
            </div>
            <a href="#">Find</a>
        </div>
    </div>
    )
}
export default About