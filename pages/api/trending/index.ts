import { NextApiRequest, NextApiResponse } from "next";

export interface TrendingDataProps {
    id: number
    imgSrc: string;
    source: string;
    title: string;
    description: string;
    author: {
        img: string;
        name: string;
        post: string;
    };
}
export const trendingData: TrendingDataProps[] = [
    {
        id: 1,
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/xpost_lg_1.jpg.pagespeed.ic.FHpKG3L7pq.webp",
        source: "trending",
        title: "Your most unhappy customers are your greatest source of learning.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        author: {
            img: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp",
            name: "Umar Arshad",
            post: "CEO and Founder",
        },
    },
    {
        id: 2,
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/xpost_lg_1.jpg.pagespeed.ic.FHpKG3L7pq.webp",
        source: "trending",
        title: "Your most unhappy customers are your greatest source of learning.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        author: {
            img: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp",
            name: "Umar Arshad",
            post: "CEO and Founder",
        },
    },
    {
        id: 3,
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/xpost_lg_1.jpg.pagespeed.ic.FHpKG3L7pq.webp",
        source: "trending",
        title: "Your most unhappy customers are your greatest source of learning.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        author: {
            img: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp",
            name: "Umar Arshad",
            post: "CEO and Founder",
        },
    },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(trendingData)
}