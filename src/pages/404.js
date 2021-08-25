import * as React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section className="bg-main-blue h-screen w-full flex flex-col items-center justify-center">
    <h1 className="font-display  text-big-m  sm:text-6xl  text-white md:text-big">404: Not Found</h1>
    <p className="mt-4 font-body text-white mb-8 text-xl">The page you are looking for doesn't exist</p>
      <Link 
               to="/"
                  className="w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Back Home
                 </Link>
    </section>
  </Layout>
)

export default NotFoundPage
