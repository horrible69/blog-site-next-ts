import { GetStaticPaths, GetStaticProps } from "next";
import ReusablePost from "../../components/reusable-clicked-post/ReusablePost";
import { SportsDataProps } from "../api/sports";

export interface SportsIdProp {
  post: SportsDataProps;
}
const SportsIdComp = ({ post }: SportsIdProp) => {
  return (
    <div>
      {" "}
      <ReusablePost post={post} />{" "}
    </div>
  );
};

export default SportsIdComp;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/sports`);
  const data: SportsDataProps[] = await response.json();
  const paths = data.map((sportsPost) => {
    return {
      params: {
        sportsId: JSON.stringify(sportsPost.id),
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
  const { sportsId }: any = params;
  const response = await fetch(`http://localhost:3000/api/sports/${sportsId}`);
  const data: SportsDataProps = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
