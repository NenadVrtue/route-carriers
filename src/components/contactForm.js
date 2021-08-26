import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const ContactForm = () => {
    return (
        <section className="py-20 flex flex-col items-center max-w-2xl mx-auto">

            <h2 className="font-display text-4xl  lg:text-5xl text-main-blue">Contact Form</h2>

            <div className="bg-main-red w-24 h-2 my-7"></div>

            <p className="text-center font-body max-w-prose text-main-blue leading-6">If you have more questions, we’re happy to help. Simply submit your message bellow, and we’ll get back to you within 24 hours.</p>

            <Formik 
                initialValues={{
                name: '',
                phone: '',
                email: '',
                message: '',
                }}
                onSubmit={(values, actions) => {
                fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact-demo", ...values })
                })
                .then(() => {
                alert('Success');
                actions.resetForm()
                })
                .catch(() => {
                alert('Error');
                })
                .finally(() => actions.setSubmitting(false))
                }} 

                validate={values =>{
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                const errors = {};
                if(!values.name) {
                errors.name = 'Name Required'
                }
                if(!values.phone) {
                errors.phone = 'Phone Required'
                }
                if(!values.email || !emailRegex.test(values.email)) {
                errors.email = 'Valid Email Required'
                } 
                if(!values.message) {
                errors.message = 'Message Required'
                }
                return errors;
                }}>
                <Form className="font-body px-2 w-full my-8 flex flex-col" name="contact-demo" data-netlify={true}>
                    <div className="flex flex-col mb-4">
                        <label className="text-base w-full text-body text-main-blue mb-4" htmlFor='name'>Full Name:</label>
                        <Field className=" border-2 border-main-blue px-2 py-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='name' />
                        <ErrorMessage name="name" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-base w-full text-body text-main-blue mb-4" htmlFor='phone'>Phone:</label>
                        <Field className=" border-2 border-main-blue px-2 py-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='phone' />
                        <ErrorMessage name="phone" />
                    </div>
                    
                    <div  className="flex flex-col mb-4">
                    <label className="text-base w-full text-body text-main-blue mb-4" htmlFor='email'>Email:</label>
                    <Field className=" border-2 border-main-blue py-2 px-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='phone' name='email' />
                    <ErrorMessage name="email" />
                    </div>

                    <div className="flex flex-col mb-4">
                    <label className="text-base w-full text-body text-main-blue mb-4" htmlFor='message'>Message:</label>
                    <Field className=" border-2 border-main-blue py-2 px-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='message' component='textarea' />
                    <ErrorMessage name="message" />
                    </div>

                    <button className="w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover  mt-4 " type='submit'>Send</button>

                </Form>


                </Formik>

           
        </section>
    )
}
export default ContactForm