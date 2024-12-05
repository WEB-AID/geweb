import { ContactFormModal } from '@/features/ContactForm'
import { ContactForm } from '@/features/ContactForm/ui'

export default function Contact() {
    return (
        <div>
            1CONTACT11
            <ContactForm ModalSlot={<ContactFormModal TriggerClassName="" />} />
        </div>
    )
}
