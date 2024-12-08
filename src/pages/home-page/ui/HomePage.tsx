// import Greetings from '../../components/Greetings/Greetings'
// import PlantPhotoBlock from '@/components/PlantPhotoBlock/Greetings'
import PageBanner from '@/shared/ui/PageBanner'
import Greetings from './Greetings'
import OurAdwantages from './OurAdvantages'
import SwiperBlock from './SwiperBlock'
import { ContactForm } from '@/features/ContactForm/ui'
import { ContactFormModal } from '@/features/ContactForm'
import { MapBlock } from '@/features/MapBlock'

export default function Home() {
    return (
        <main className="flex flex-col">
            <PageBanner src={'/plant1.jpg'} alt={'Plant logo'} />
            <section className="w-full">
                <Greetings />
                <OurAdwantages />
                <SwiperBlock />
                <MapBlock />
                <ContactForm
                    ModalSlot={<ContactFormModal TriggerClassName="" />}
                />
            </section>
        </main>
    )
}
