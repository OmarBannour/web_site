import React from 'react'
import'./Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a messge <img src={msg_icon} alt="" /></h3>
            <p>You can reach us at EDUest University through various channels.
                 Our campus is located in a prime area, easily accessible by public transportation.
                  You can also contact us via phone at insert phone number
                   or email us at insert email address for any inquiries.</p>
                   <ul>
                    <li>contact@etudetst.com <img src={mail_icon} alt="" /> </li>
                    <li>+1 2156 87845124 <img src={phone_icon} alt="" /></li>
                    <li>Massachuestts Ave  <img src={location_icon} alt="" /> <br />United State </li>
                   </ul>
        </div>

      
    </div>
  )
}

export default Contact
