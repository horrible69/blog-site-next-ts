import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ReusablePost from "../components/reusable-clicked-post/ReusablePost";
import { TrendingDataProps } from "./api/trending";
export interface TrendingIdProp {
  post: TrendingDataProps;
}

const TrendingIdComp = ({ post }: TrendingIdProp) => {
  return (
    <div>
      <ReusablePost post={post} />
    </div>
  );
};

export default TrendingIdComp;
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/trending`);
  const data: TrendingDataProps[] = await response.json();
  const paths = data.map((trendingPost) => {
    return {
      params: {
        trendingId: JSON.stringify(trendingPost.id),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { trendingId }: any = params;
  const response = await fetch(
    `http://localhost:3000/api/trending/${trendingId}`
  );
  const data: TrendingDataProps = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
