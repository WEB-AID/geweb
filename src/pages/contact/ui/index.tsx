import { ContactFormModal } from '@/features/ContactForm'
import { ContactForm } from '@/features/ContactForm/ui'
import { MapBlock } from '@/features/MapBlock'

export default function Contact() {
    return (
        <div>
            <div className="mt-24 w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Приедьте к нам */}
                <div className="bg-white shadow-3xl rounded-lg p-6 text-center">
                    <div className="text-xl font-semibold mb-2">
                        Приедьте к нам
                    </div>
                    <p className="text-gray-600 mb-4">
                        Посетите наш офис в удобное для вас время.
                    </p>
                    <div className="text-gray-800 font-medium">
                        <p>Адрес:</p>
                        <p>г. Тбилиси, ул. Пушкина, 15</p>
                    </div>
                </div>
                {/* Позвоните нам */}
                <div className="bg-white shadow-3xl rounded-lg p-6 text-center">
                    <div className="text-xl font-semibold mb-2">
                        Позвоните нам
                    </div>
                    <p className="text-gray-600 mb-4">
                        Свяжитесь с нами по телефону в рабочее время.
                    </p>
                    <div className="text-gray-800 font-medium">
                        <p>Телефон:</p>
                        <p>+995 555 123 456</p>
                        <p className="mt-2">Рабочие часы:</p>
                        <p>Пн–Пт: 9:00–18:00</p>
                        <p>Сб–Вс: 10:00–16:00</p>
                    </div>
                </div>
                {/* Напишите нам */}
                <div className="bg-white shadow-3xl rounded-lg p-6 text-center">
                    <div className="text-xl font-semibold mb-2">
                        Напишите нам
                    </div>
                    <p className="text-gray-600 mb-4">
                        Свяжитесь с нами по имейлу в любое время.
                    </p>
                    <div className="text-gray-800 font-medium">
                        <p>Имейл:</p>
                        <p>lalala@gmail.com</p>
                    </div>
                </div>
            </div>
            <MapBlock />
            <ContactForm ModalSlot={<ContactFormModal TriggerClassName="" />} />
        </div>
    )
}
