import React from 'react'

const FAQ = ({faq, index, toggleFAQ }) => {
    return (
        <div className={'bg-gray-500 w-full my-2 px-8 ' + (faq.open ? 'open' : '')} key={index}
        onClick={() => toggleFAQ(index)}>
            
            <div className="before:inline-block before:content-['+'] before:text-2xl before:text-main-red before:mr-4 text-lg font-bold text-main-blue transition-all">
                {faq.question}
            </div>
             <div className=" overflow-y-hidden font-body text-base text-main-blue ml-6 transition-all">
                {faq.answer}
            </div>
            <div className='border-main-red mt-2 border-t-2 '></div>
        </div>
    )
}

export default FAQ
