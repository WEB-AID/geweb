import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const files = [
        {
            name: 'Прайс-лист 1',
            path: '/prices/PriceList1.pdf',
            description: 'Актуальный прайс-лист на услуги за январь 2024 года',
        },
    ]
    res.status(200).json(files)
}
