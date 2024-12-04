// import Greetings from '../../components/Greetings/Greetings'
// import PlantPhotoBlock from '@/components/PlantPhotoBlock/Greetings'
import PageBanner from '@/shared/ui/PageBanner'
import Greetings from './Greetings'
import OurAdwantages from './OurAdvantages'
import SwiperBlock from './SwiperBlock'
// import MapBlock from './MapBlock'
// import { ContactForm } from '@/features/ContactForm/ui'

export default function Home() {
    return (
        <main className="flex flex-col">
            <PageBanner src={'/plant1.jpg'} alt={'Plant logo'} />
            <section className="w-full bg-gray-100">
                <Greetings />
                <OurAdwantages />
                <SwiperBlock />
                {/* <MapBlock />
                <ContactForm /> */}
            </section>
        </main>
    )
}
