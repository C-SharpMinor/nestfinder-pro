import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Stats from "../components/Stats"
import FeaturedProperties from "../components/FeaturedProperties"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home