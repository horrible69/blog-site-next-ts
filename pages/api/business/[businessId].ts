import { businessData } from './index';
import { NextApiRequest, NextApiResponse } from 'next';
interface BusinessIdProps {
    businessId?: string
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { businessId }: BusinessIdProps = req.query
    const businessPost = businessData.find((post) => post.id === Number(businessId))
    res.status(200).json(businessPost)
}