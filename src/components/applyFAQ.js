import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import "./faq.css"

export default function ApplyFAQ () {
    return (

        <section className="py-24  ">
            <h2 className="font-display text-4xl  lg:text-5xl text-main-blue text-center">Driver FAQs</h2>

            <div className="bg-main-red w-24 h-2 my-7 mx-auto"></div>

            <p className="text-center font-body  text-main-blue leading-6 mb-6">Have more questions? Let’s get them answered.</p>
        <Accordion className="max-w-2xl mx-auto">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton >
                        How often do I get paid?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                    <p>
                        We pay weekly!  Your settlements will be directly deposited into your account every Friday.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Do you offer any sort of bonuses?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Yes! Currently, we are offering a $1,000 sign-on bonus.  And if you want to make even more money, you can refer other talented drivers and get paid $500 per referral after 90 days of active employment.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Do you have fuel cards?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Yes, each driver will be assigned a fuel card.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How much do you advance?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        We do not offer cash advances; however, we do pay on time every Friday so you can trust in reliable income each week.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What is the work/life balance like with your company?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Our most successful contractors stay out 2-3 weeks at a time.  We try to get you back often though, so you can recharge and spend time with friends and family.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        
        </Accordion>
        </section>
    );
}