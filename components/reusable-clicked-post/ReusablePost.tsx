// interface ReusablePostProp {
//    trendingPost:

import { BusinessIdProp } from "../../pages/business/[businessId]";
import { SportsIdProp } from "../../pages/sports/[sportsId]";
import { TrendingIdProp } from "../../pages/[trendingId]";

type PostProp = TrendingIdProp | SportsIdProp | BusinessIdProp;
const ReusablePost = ({ post }: PostProp) => {
  return (
    <section className="max-w-4xl text-center mx-auto py-20 space-y-8 flex flex-col">
      <div>
        <img
          src={post.author.img}
          className="h-20 w-20 rounded-full mx-auto"
          alt={post.title}
        />
        <h2 className="text-gray-500 font-semibold text-lg">
          {post.author.name}
        </h2>
        <p className="text-gray-500 font-semibold text-md">JUNE 11,2001</p>
      </div>
      <div className="flex flex-col space-y-8">
        <h1 className="text-4xl font-bold ">{post.title}</h1>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
          {post.description}
        </p>
        <img
          src={post.imgSrc}
          alt={post.title}
          className="max-w-full rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default ReusablePost;
