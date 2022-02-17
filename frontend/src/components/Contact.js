import React from 'react'

export default function Contact() {
  return (
    <section className='contact' id="contact">
        <h2 className='section-title'>Contact</h2>
        <form className='contact-form'>
            <div className='input-block'>
                <input className="input-field" type="text" placeholder='Name'></input>
                {/* <div className='input-shadow'></div> */}
            </div>
            <div className='input-block'>
                <input className="input-field" type="email" placeholder='Email'></input>
                {/* <div className='input-shadow'></div> */}
            </div>
            <button className="shadow-btn">
                    <span className="btn-inner">
                    <span className="text">Contact us</span>
                    </span>
                    <span className="shadow"></span>
            </button>
        </form>
    </section>
  )
}
