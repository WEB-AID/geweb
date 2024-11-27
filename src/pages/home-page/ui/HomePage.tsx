// import Greetings from '../../components/Greetings/Greetings'
// import PlantPhotoBlock from '@/components/PlantPhotoBlock/Greetings'
import PageBanner from '@/shared/ui/PageBanner'
import Greetings from './Greetings'

export default function Home() {
    return (
        <main className="flex flex-col">
            <PageBanner src={'/plant1.jpg'} alt={'Plant logo'} />
            <Greetings />
            <Greetings />
            <Greetings />
            <Greetings />
            {/* <Greetings />
            <EMAIL />
            <CONTACTUS /> */}
        </main>
    )
}
