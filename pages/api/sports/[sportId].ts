import { SportsData } from './index';
import { NextApiRequest, NextApiResponse } from 'next';
interface SportsIdProps {
    sportId?: string
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { sportId }: SportsIdProps = req.query
    const sportsPost = SportsData.find((post) => post.id === Number(sportId))
    res.status(200).json(sportsPost)
}