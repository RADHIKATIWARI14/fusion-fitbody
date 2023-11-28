import React from 'react'
import '../../styles/start.css'
import trainingImg from '../../assets/img/trainer.png'

const Start = () => {
  return (
    <section id='classes'>
      <div className='container'>
        <div className='start_wrapper'>
          <div className='start_img'>
            <img
              src={trainingImg}
              alt=''
              data-aos='fade-left'
              data-aos-duration='1500'
            />
          </div>

          <div
            className='start_content'
            data-aos='fade-right'
            data-aos-duration='1500'
          >
            <h2 className='section_title'>
              Ready to make a <span className='highlights'>change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aut obcaecati quae harum magni? Unde, corrupti. Accusantium non eaque maxime placeat, 
              vel labore temporibus neque porro aut blanditiis quidem quam facere.
            </p>
            <button className='register_btn'>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Start
