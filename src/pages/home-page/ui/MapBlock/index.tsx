'use client'

import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

const Map = () => {
    const { t } = useTranslation()
    const handleDirectionsClick = () => {
        window.open(
            'https://www.google.com/maps/dir//Akaurta,+Georgia/@41.4634061,44.4293329,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4043ebd82be195af:0xd092e196efa6c56a!2m2!1d44.4466484!2d41.4634173?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D',
            '_blank'
        )
    }
    return (
        <div className="w-3/4 lg:w-3/5 mx-auto flex flex-col md:flex-row gap-4 items-center justify-center my-10 lg:my-20 font-extrabold">
            <div className="md:w-1/3 flex flex-col h-32 min-[600px]:h-24 md:h-60">
                <span className="mb-auto text-sm lg:text-base">
                    {t('mapText')}
                </span>
                <Button
                    variant="default"
                    size="sm"
                    className="border-0 bg-orange-600 font-sans font-bold mt-1"
                    onClick={handleDirectionsClick}
                >
                    {t('mapButton')}
                </Button>
            </div>
            <div className="max-[767px]:mt-3 md:ml-12 w-full md:w-96 lg:w-1/2 flex items-center justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13376.617626814921!2d44.43961131019164!3d41.463423518722664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4043eb7a014c0f17%3A0x71c96f892c224569!2sAkaurta%20pig%20farm!5e1!3m2!1sru!2sua!4v1733056020151!5m2!1sru!2sua"
                    width="0"
                    height="0"
                    className="border-0 w-full h-60 2xl:h-80"
                    // allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Map
