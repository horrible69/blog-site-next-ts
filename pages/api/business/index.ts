import { NextApiRequest, NextApiResponse } from "next";

export interface BusinessDataProps {
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
export const businessData: BusinessDataProps[] = [
    {
        id: 1,
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp",
        source: "business",
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
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp",
        source: "business",
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
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/ximg_3.jpg.pagespeed.ic.TsSrvxpHvJ.webp",
        source: "business",
        title: "Your most unhappy customers are your greatest source of learning.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        author: {
            img: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp",
            name: "Umar Arshad",
            post: "CEO and Founder",
        },
    },
    {
        id: 4,
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/ximg_4.jpg.pagespeed.ic.2DwdgZu3vw.webp",
        source: "business",
        title: "Your most unhappy customers are your greatest source of learning.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        author: {
            img: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp",
            name: "Umar Arshad",
            post: "CEO and Founder",
        },
    },
    {
        id: 5,
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/ximg_5.jpg.pagespeed.ic.gHoSUxJvjD.webp",
        source: "business",
        title: "Your most unhappy customers are your greatest source of learning.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        author: {
            img: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp",
            name: "Umar Arshad",
            post: "CEO and Founder",
        },
    },
    {
        id: 6,
        imgSrc: "https://preview.colorlib.com/theme/magdesign/images/ximg_6.jpg.pagespeed.ic.5qa1qm-uor.webp",
        source: "business",
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
    res.status(200).json(businessData)
}