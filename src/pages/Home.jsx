import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatIsAfriTutors from '../components/WhatIsAfriTutors'
import CoursesSection from '../components/CoursesSection'
import WhyUsSection from '../components/WhyUsSection'
import InfluencerShowcase from '../components/InfluencerShowcase'
import ProductionShowcase from '../components/ProductionShowcase'
import HowItWorks from '../components/HowItWorks'
import InfluencerPromo from '../components/InfluencerPromo'
import Footer from '../components/Footer'
import EasterEggs from '../components/EasterEggs'

const Home = () => {
    return (
        <main className="overflow-hidden">
            <EasterEggs />
            <Navbar />
            <Hero />
            <WhatIsAfriTutors />
            <CoursesSection />
            <WhyUsSection />
            <InfluencerShowcase />
            <ProductionShowcase />
            <HowItWorks />
            <InfluencerPromo />
            <Footer />
        </main>
    )
}

export default Home
