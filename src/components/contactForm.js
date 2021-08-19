import React from 'react'

const ContactForm = () => {
    return (
        <section className="py-20 flex flex-col items-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl  lg:text-5xl text-main-blue">Contact Form</h2>

            <div className="bg-main-red w-24 h-2 my-7"></div>

            <p className="text-center font-body max-w-prose text-main-blue leading-6">If you have more questions, we’re happy to help. Simply submit your message bellow, and we’ll get back to you within 24 hours.</p>

           <form className=" px-2 w-full my-8" name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" required/>
            <div className="flex flex-col mb-4">
                <label className="text-base w-full text-body text-main-blue mb-4">Full Name</label>
                <input className=" border-2 border-main-blue" type="text" name="Full Name" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-base w-full text-body text-main-blue mb-4">Phone</label>
                <input className=" border-2 border-main-blue" type="text" name="Phone Number" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-base w-full text-body text-main-blue mb-4">Email</label>
                <input className=" border-2 border-main-blue" type="email" name="email" />
            </div>
            <div className="flex flex-col mb-6">
                <label className="text-base w-full text-body text-main-blue mb-4">Message</label>
                <textarea className="border-2 border-main-blue " name="message" />
            </div>
            <button className="w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   " type="submit">
                Submit
            </button>
        </form>

            
        </section>
    )
}

export default ContactForm