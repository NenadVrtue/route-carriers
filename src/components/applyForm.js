import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ApplyForm = () => {
    return (
        <section id="apply" className="py-20    bg-main-blue">
           
            <div className="max-w-2xl mx-auto flex flex-col items-center">
             <h2 className="font-display text-4xl  lg:text-5xl text-white">application form</h2>

            <div className="bg-main-red w-24 h-2 my-7"></div>

            <p className="text-center font-body max-w-prose text-white leading-6">Fill in the form bellow and become part of our Team!</p>

            <h3 className="text-white font-body text-xl w-full pl-2 mt-8">Personal Info</h3>

            <Formik 
                initialValues={{
                name: '',
                email: '',
                address: '',
                phone: '',
                age23:'',
                exp:'' ,
                start:'' ,
                accidents:'',
                violations: '',
                consent: '',
                }}
                onSubmit={(values, actions) => {
                fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "apply", ...values })
                })
                .then(() => {
                alert('Thank you for applying!');
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
                errors.name = '* Name Required'
                }
                if(!values.phone) {
                errors.phone = '* Phone Required'
                }
                if(!values.email || !emailRegex.test(values.email)) {
                errors.email = '* Valid Email Required'
                } 
                if(!values.address) {
                errors.address = '* Adress Required'
                }
                if(!values.age23) {
                errors.age23 = '* Your age'
                }
                if(!values.exp) {
                errors.exp = '* Your experience'
                }
                if(!values.start) {
                errors.start = '* When can you start'
                }

                if(!values.accidents) {
                errors.accidents = '* How many accidents?'
                }
                return errors;
                }}>
                <Form className="font-body px-2 w-full my-8 flex flex-col " name="apply" data-netlify={true}>
                    <div className="flex flex-col mb-4">
                        <label className="text-base w-full text-body text-white mb-4" htmlFor='name'>Full Name <span className="text-main-red"> *</span></label>
                        <Field className=" border-2 border-main-blue px-2 py-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='name' />
                        <ErrorMessage component="div" className="text-main-red  mt-2" name="name"  />
                    </div>
                    
                    <div  className="flex flex-col mb-4">
                    <label className="text-base w-full text-body text-white mb-4" htmlFor='email'>Email<span className="text-main-red"> *</span></label>
                    <Field className=" border-2 border-main-blue py-2 px-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='email' />
                    <ErrorMessage component="div" className="text-main-red  mt-2" name="email" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-base w-full text-body text-white mb-4" htmlFor='address'>Address <span className="text-main-red"> *</span></label>
                        <Field className=" border-2 border-main-blue px-2 py-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='address' />
                        <ErrorMessage component="div" className="text-main-red  mt-2" name="address" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-base w-full text-body text-white mb-4" htmlFor='phone'>Phone <span className="text-main-red"> *</span></label>
                        <Field className=" border-2 border-main-blue px-2 py-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='phone' />
                        <ErrorMessage component="div" className="text-main-red  mt-2" name="phone" />
                    </div>
                    
                    <div className="border-b-2 border-dashed border-main-red my-14"></div>


                    <div className=" w-full text-body text-white mb-6 text-xl" id="age-group">Are you at least 23 years of age? <span className="text-main-red"> *</span></div>
                        <div role="group" aria-labelledby="age-group">
                         <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red mr-2" type="radio" name="age23" value="Yes" />
                            Yes, I Am
                            </label>
                            <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="age23" value="No" />
                            No, I Am Not
                            </label> 
                            
                    </div>

                    <div className="border-b-2 border-dashed border-main-red my-14"></div>

                    <div className=" w-full text-body text-white mb-6 text-xl " id="exp-group">I have experience in<span className="text-main-red"> *</span></div>
                        <div role="group" aria-labelledby="exp-group">
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red mr-2" type="checkbox" name="exp" value="Dry Van" />
                            Dry Van
                        </label>

                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="checkbox" name="exp" value="Flatbed" />
                            Flatbed
                        </label>
            
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="checkbox" name="exp" value="Reefer" />
                            Reefer
                        </label> 

                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="checkbox" name="exp" value="HAZMAT" />
                            HAZMAT
                        </label> 
                    </div>

                    <div className="border-b-2 border-dashed border-main-red my-14"></div>

                    <div className=" w-full text-body text-white mb-6 text-xl " id="start-group">When can you start?<span className="text-main-red"> *</span></div>
                        <div role="group" aria-labelledby="start-group">
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red mr-2" type="radio" name="start" value="Right away" />
                            Right away
                        </label>

                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="start" value="in 2 weeks" />
                            Within 2 weeks
                        </label>
            
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="start" value="month" />
                            Within a month
                        </label> 

                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="start" value="2 months +" />
                            2 months +
                        </label> 
                    </div>

                    <div className="border-b-2 border-dashed border-main-red my-14"></div>


                    <div className=" w-full text-body text-white mb-6 text-xl " id="accidents-group">Number of accidents in the last 3 years<span className="text-main-red"> *</span></div>
                        <div role="group" aria-labelledby="accidents-group">
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red mr-2" type="radio" name="accidents" value="None" />
                            None
                        </label>

                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="accidents" value="One" />
                            One
                        </label>
            
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="accidents" value="Two" />
                            Two
                        </label> 
                    </div>

                    <div className="border-b-2 border-dashed border-main-red my-14"></div>

                     <div className=" w-full text-body text-white mb-6 text-xl " id="violations-group">Number of violations in the last 3 years<span className="text-main-red"> *</span></div>
                        <div role="group" aria-labelledby="violations-group">
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red mr-2" type="radio" name="violations" value="None" />
                            None
                        </label>

                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="violations" value="One" />
                            One
                        </label>
            
                        <label className="text-white font-body ">
                            <Field className="rounded-none text-main-red ml-6 mr-2" type="radio" name="violations" value="Two" />
                            Two
                        </label> 
                    </div>

                    <div className="border-b-2 border-dashed border-main-red my-14"></div>

                    <div className=" w-full text-body text-white mb-6 text-xl " id="consent">Consent<span className="text-main-red"> *</span></div>
                    <div>
                    <label className="text-white font-body ">
                    <Field className="rounded-none text-main-red  mr-4" type="checkbox" name="consent" />
                        I agree with the privacy policy
                     </label>
                     <p className="font-body text-normal text-white mt-4">I hereby consent to the collection, processing, and use of my personal data as required for the execution
                        of the pre-qualification process.</p>
                     </div>

                    <div className="border-b-2 border-dashed border-main-red my-14"></div>

                    <button className="w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover mx-auto mt-4 " type='submit'>Send</button>



                </Form>


                </Formik>


          
        </div>
            
        </section>
    )
}

export default ApplyForm