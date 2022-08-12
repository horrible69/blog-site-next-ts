import { GetStaticPaths, GetStaticProps } from "next";
import ReusablePost from "../../components/reusable-clicked-post/ReusablePost";
import { BusinessDataProps } from "../api/business";

export interface BusinessIdProp {
  post: BusinessDataProps;
}
const BusinessIdComp = ({ post }: BusinessIdProp) => {
  return (
    <div>
      <ReusablePost post={post} />
    </div>
  );
};

export default BusinessIdComp;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/business`);
  const data: BusinessDataProps[] = await response.json();
  const paths = data.map((sportsPost) => {
    return {
      params: {
        businessId: JSON.stringify(sportsPost.id),
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
  const { businessId }: any = params;
  const response = await fetch(
    `http://localhost:3000/api/business/${businessId}`
  );
  const data: BusinessDataProps = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
