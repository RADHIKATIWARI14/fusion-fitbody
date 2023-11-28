import React from 'react'
import '../../styles/testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'

export default function Testimonials() {
  return (
    <>
      <section>
        <div
          className='container sliders'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          <h2 className='section_title'>Testimonials</h2>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-01'>
                  <img src={avatar01} alt='' />
                </div>

                <h4>Jessica Fernandos</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Fuga, vero necessitatibus? Labore accusamus quas esse hic magni voluptas, enim aspernatur
                   optio ea voluptate officiis est voluptatem numquam illo ullam quisquam..
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-02'>
                  <img src={avatar02} alt='' />
                </div>

                <h4>Mike Ross</h4>
                <p>
                  Fitbody fitness is not just like any other fitness facility
                  but like a family!.Highly recommended for all the fitness
                  lovers irrespective of what level you are in. I am definitely
                  coming back!!!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-03'>
                  <img src={avatar01} alt='' />
                </div>

                <h4>Lious Specter</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   A, maxime consequuntur repellat architecto adipisci tempora corrupti nemo unde numquam, 
                  officiis illo, eos commodi cumque eligendi modi amet quam beatae impedit?
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
