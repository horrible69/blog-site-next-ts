import { trendingData } from './index';
import { NextApiRequest, NextApiResponse } from 'next';
interface TrendingIdProps {
    trendingId?: string
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { trendingId }: TrendingIdProps = req.query
    const trendingPost = trendingData.find((post) => post.id === Number(trendingId))
    res.status(200).json(trendingPost)
}