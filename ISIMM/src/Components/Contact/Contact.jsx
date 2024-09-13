import React from 'react'
import'./Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a8254d76-9262-47c5-87bd-8e0f2e2d2350");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a messge <img src={msg_icon} alt="" /></h3>
            <p>You can reach us at EDUest University through various channels.
                 Our campus is located in a prime area, easily accessible by public transportation.
                  You can also contact us via phone at insert phone number
                   or email us at insert email address for any inquiries.</p>
                   <ul>
                    <li><img src={mail_icon} alt="" /> contact@etudetst.com </li>
                    <li><img src={phone_icon} alt="" />+1 2156 87845124 </li>
                    <li> <img src={location_icon} alt="" />Massachuestts Ave <br />United State </li>
                   </ul>
        </div>
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <label> Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required></input>
            <label> Your Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required ></input>
            <label> Write your message here</label>
            <textarea name='message' rows="6" placeholder='Enter ur message'required> </textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>
          </form>
          <span>{result} </span>
        </div>
    </div>
  )
}

export default Contact
