import React from 'react'
import CareerHero from '../components/careerHero'
import CdlDrivers from '../components/cdlDrivers'

import Layout from '../components/layout'
import Table from '../components/table'
import {Link} from 'gatsby'
import Seo from '../components/seo'

const Careers = () => {
    return (
        <Layout>
            <Seo title="Careers" description="Your Career at Route Carriers"></Seo>
            <CareerHero></CareerHero>
            <CdlDrivers></CdlDrivers>
            <Table></Table>
            {/* CTA */}
            <section className="px-4 py-16 flex flex-col items-center">
                <p className="text-center font-body max-w-prose text-main-blue leading-6 mb-12 ">We are an equal opportunity employer, and all drivers will receive consideration for employment without regard to race, color, religion, sex, national origin, disability status, protected veteran status, sexual orientation, gender identity, or any other characteristic protected by law.</p>
            <h2 className="font-display text-4xl  lg:text-5xl text-main-blue mt-4">
                JOIN OUR TEAM, we value drivers!
            </h2>
             <Link
                    to="/apply-now"
                    className=" mt-7 w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover  mb-8 "
                  >
                    Apply Now
                  </Link>
            </section>

        </Layout>
    )
}

export default Careers
