import { GetStaticProps } from "next";
import Header from "../components/header/Header";
import { TrendingDataProps } from "./api/trending";

interface TrendingDataArrayProps {
  trendingData: TrendingDataProps[];
}
const Home = ({ trendingData }: TrendingDataArrayProps) => {
  return (
    <div>
      <Header trendingData={trendingData} />
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/trending");
  const data: TrendingDataProps[] = await response.json();
  return {
    props: {
      trendingData: data,
    },
  };
};
