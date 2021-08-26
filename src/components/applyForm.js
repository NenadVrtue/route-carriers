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
                }}
                onSubmit={(values, actions) => {
                fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "apply", ...values })
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
                return errors;
                }}>
                <Form className="font-body px-2 w-full my-8 flex flex-col" name="apply" data-netlify={true}>
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


                    <div className=" w-full text-body text-white mb-6 text-xl" id="age-group">Are you at least 23 years of age?</div>
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

                    <div className=" w-full text-body text-white mb-6 text-xl " id="exp-group">I have experience in*</div>
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


                    <button className="w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover  mt-4 " type='submit'>Send</button>

                </Form>


                </Formik>


           <form className="font-body px-2 w-full my-8" name="Contact Form" method="POST" data-netlify="true">
            <h2 className="font-body text-xl text-white mb-6">Personal Info</h2>
            <input type="hidden" name="form-name" value="Contact Form" required/>
            <div className="flex flex-col mb-4">
                <label className="text-base w-full text-body text-white mb-4">Full Name</label>
                <input className=" border-2 border-main-blue" type="text" name="Full Name" />
            </div>
            
            <div className="flex flex-col mb-4">
                <label className="text-base w-full text-body text-white mb-4">Email</label>
                <input className=" border-2 border-main-blue" type="email" name="email" />
            </div>
            
             <div className="flex flex-col mb-4">
                <label className="text-base w-full text-body text-white mb-4">Address</label>
                <input className=" border-2 border-main-blue" type="text" name="Full Name" />
            </div>
            
            <div className="flex flex-col mb-4">
                <label className="text-base w-full text-body text-white mb-4">Phone</label>
                <input className=" border-2 border-main-blue" type="text" name="Phone Number" />
            </div>

            <div className="border-b-2 border-dashed border-main-red my-14"></div>

            <div className="flex flex-col mb-4 ">
                <label className=" w-full text-body text-white mb-6 text-xl">Are you at least 23 years of age?</label>
                <div className="flex items-center">
                    <input className="rounded-none text-main-red" type='radio' name="Yes" id="Yes" />
                    <label className="text-white font-body ml-2" htmlFor="Yes">Yes, I Am</label>
                    <input className="rounded-none text-main-red ml-8" type='radio' name="Yes" id="No" />
                     <label className="text-white font-body ml-2" htmlFor="Yes">No, I Am Not</label>
                </div>
            </div>

            <div className="border-b-2 border-dashed border-main-red my-14"></div>
            
            {/* Exp */}
            <div className="flex flex-col mb-4 ">
                <label className=" w-full text-body text-white mb-6 text-xl">I have experience in</label>
                <div className="flex items-center">
                    <input className=" text-main-red" type='checkbox' name="Exp" id="Dry Van" />
                    <label className="text-white font-body ml-2" htmlFor="Dry Van">Dry Van</label>  

                    <input className=" text-main-red ml-8" type='checkbox' name="Exp" id="Flatbed" />
                     <label className="text-white font-body ml-2" htmlFor="Flatbed">Flatbed</label> 

                    <input className=" text-main-red ml-8" type='checkbox' name="Exp" id="Reefer"/>
                     <label className="text-white font-body ml-2" htmlFor="Reefer">Reefer</label>                   

                    <input className=" text-main-red ml-8" type='checkbox' name="Exp" id="HAZMAT" />
                     <label className="text-white font-body ml-2" htmlFor="HAZMAT">HAZMAT</label>
                </div>
            </div>

            <div className="border-b-2 border-dashed border-main-red my-14"></div>

            {/* Start */}
            <div className="flex flex-col mb-4 ">
                <label className=" w-full text-body text-white mb-6 text-xl">When can you start?</label>
                <div className="flex items-center">
                    <input className="rounded-none text-main-red " type='radio' name="start" id="now" />
                    <label className="rounded-none text-white font-body ml-2" htmlFor="now">Right away</label>  

                    <input className="rounded-none text-main-red ml-8" type='radio' name="start" id="2 weeks" value="2 weeks"/>
                     <label className="text-white font-body ml-2" htmlFor="2 weeks">Within 2 weeks</label> 

                    <input className=" rounded-none text-main-red ml-8" type='radio' name="start" id="month"/>
                     <label className="text-white font-body ml-2" htmlFor="month">Within a Month</label>                   

                    <input className="rounded-none text-main-red ml-8" type='radio' name="start" id="more than 2" />
                    <label className="text-white font-body ml-2" htmlFor="more than 2">2+ months</label>   
                </div>
            </div>

            <div className="border-b-2 border-dashed border-main-red my-14"></div>

            {/* Accidents */}
            <div className="flex flex-col mb-4 ">
                <label className=" w-full text-body text-white mb-6 text-xl">Number of accidents in the last 3 years</label>
                <div className="flex items-center">
                    
                    <input className="rounded-none text-main-red" type='radio' name="Accidents" id="None" />
                    <label className="text-white font-body ml-2" htmlFor="None">None</label>
                    
                    <input className="rounded-none text-main-red ml-8" type='radio' name="Accidents" id="One" />
                     <label className="text-white font-body ml-2" htmlFor="One">One</label>
                    
                     <input className="rounded-none text-main-red ml-8" type='radio' name="Accidents" id="Two+" />
                     <label className="text-white font-body ml-2" htmlFor="Two+">Two+</label>
                     
                </div>
            </div>

            <div className="border-b-2 border-dashed border-main-red my-14"></div>

            <div className="flex flex-col mb-4 ">
                <label className=" w-full text-body text-white mb-6 text-xl">Number of violations in the last 3 years</label>
                <div className="flex items-center">
                    
                    <input className="rounded-none text-main-red" type='radio' name="Violations" id="None" />
                    <label className="text-white font-body ml-2" htmlFor="None">None</label>
                    
                    <input className="rounded-none text-main-red ml-8" type='radio' name="Violations" id="One" />
                     <label className="text-white font-body ml-2" htmlFor="One">One</label>
                     
                    
                     <input className="rounded-none text-main-red ml-8" type='radio' name="Violations" id="Two+" />
                     <label className="text-white font-body ml-2" htmlFor="Two+">Two+</label>
                     
                </div>
            </div>

            <div className="border-b-2 border-dashed border-main-red my-14"></div>

            <div className="flex flex-col mb-4 ">
                <label className=" w-full text-body text-white mb-6 text-xl">Consent</label>
                <div className="flex  items-center">
                    
                     
                     <input className="rounded-none text-main-red" type='checkbox' name="Consent" id="Consent" />
                     <label className="text-white font-body ml-2" htmlFor="Consent">I agree with the privacy policy</label>
                     
                </div>
                <p className="font-body text-normal text-white mt-2">I hereby consent to the collection, processing, and use of my personal data as required for the execution
                    of the pre-qualification process.</p>
            </div>


            <div className="border-b-2 border-dashed border-main-red my-8"></div>

            <button className=" mt-16 w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red mx-auto hover:bg-main-red-hover hover:border-main-red-hover   " type="submit">
                Submit
            </button>
        </form>
        </div>
            
        </section>
    )
}

export default ApplyForm