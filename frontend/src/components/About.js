import React from 'react'

export default function About({about}) {
  return (
    <section className='about' id="about">
        <div className='about-img'>
          <div className='img' style={{backgroundImage: 'url('+about+')' }}>
            <div className='img-shadow'></div>
          </div>
        </div>
        <div className='about-desc'>
          <p className='about-text'>Magnificient <b>handmade</b> products to order, especially for you</p>
    
          {/* <button className="about-btn">
            <span className="text">Order now</span>
            <span className="shadow"></span>
          </button> */}

          <button className="shadow-btn">
                <span className="btn-inner">
                  <span className="text">Order now</span>
                </span>
                <span className="shadow"></span>
          </button>
        </div>
      </section>
  )
}
