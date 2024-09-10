import React from 'react'
import './About.css'
import about_img from'../../assets/about.png'
import play_icon from'../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Creat leadrs of Tomorrow</h2>
      <p>A good university provides a well-rounded education 
        with a focus on academic excellence and critical thinking.
         It offers a variety of programs that cater to 
         different interests and career goals,
          with a curriculum designed 
         to encourage creativity and problem-solving.
          Faculty members are knowledgeable and dedicated, 
          offering guidance to help students reach their potential. </p>
      <p>Research and innovation are central to a good university.
         It provides modern facilities and resources that support advanced research,
          encouraging both students and faculty to engage in projects that push the boundaries of knowledge.
           Partnerships with industry and other institutions offer opportunities for
            practical experience and collaboration. </p>
            <p> Beyond academics,
                 a good university fosters a vibrant campus life.
                  It offers numerous extracurricular activities and clubs that allow students to explore their interests and develop leadership skills.
                   The university is committed to inclusivity and diversity,
                    creating a supportive environment where all students can thrive and grow.</p>
      </div>
      
    </div>
  )
}

export default About
