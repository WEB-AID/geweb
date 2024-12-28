import { ContactFormModal } from '@/features/ContactForm'
import { ContactForm } from '@/features/ContactForm/ui'
import { MapBlock } from '@/features/MapBlock'
import { ContactFields } from '@/shared/ui/ContactFields/ContactFields'

export default function Contact() {
    return (
        <div>
            <ContactFields />
            <MapBlock />
            <ContactForm ModalSlot={<ContactFormModal TriggerClassName="" />} />
        </div>
    )
}
