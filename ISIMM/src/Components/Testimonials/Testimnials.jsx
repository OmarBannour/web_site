import React, { useRef } from 'react'
import'./Testiomials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimnials = () => {
  

  const slider =useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`; // Use backticks for template literals
  }
  
  const sildeBackward=()=>{
    if (tx  <0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

    
    
  }

  return (
    <div className='testimonial'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={sildeBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity ,USA</span>

                  </div>
                </div>
                <p>Choosing EDUest University likely reflects a thoughtful decision driven by several key factors.
               EDUest may offer a specialized program that aligns with your career goals,
               such as in web development or tech-related fields, which is an important priority for you.
              </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Jey Willson</h3>
                    <span>Edusity ,USA</span>

                  </div>
                </div>
                <p>Choosing EDUest University seems like a smart move,
                   especially if you're looking for a program that blends academic learning with practical experience.
                    The university likely offers a curriculum tailored to your interests,
                     which sets you on the right path for your career. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Sam Watterson</h3>
                    <span>Edusity ,USA</span>

                  </div>
                </div>
                <p>Opting for EDUest University likely reflects your desire for a well-rounded education
                   that offers both academic theory and practical experience.
                    The university’s programs are probably
                    tailored to meet industry demands, giving you an edge in fields like technology or web development.
                    </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Danilya luoisa</h3>
                    <span>Edusity ,USA</span>

                  </div>
                </div>
                <p>Choosing EDUest University suggests you're looking for a program that not only provides solid academic knowledge but also emphasizes real-world experience.
                   The university likely stood out to you because of its focus on equipping students with practical skills that are directly applicable in the job market,
                    especially in fields like technology or web development.
                    </p>
              </div>
            </li>
          </ul>
        </div>

      
    </div>
  )
}

export default Testimnials
