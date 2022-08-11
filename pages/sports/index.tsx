import { GetStaticProps } from "next";
import TagCard from "../../components/tag-card/TagCard";
import { SportsDataProps } from "../api/sports";
interface SportsDataArrayProps {
  sportsData: SportsDataProps[];
}
const Sports = ({ sportsData }: SportsDataArrayProps) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-black text-3xl py-8">Sports</h1>
      <div className="grid grid-cols-2 gap-20">
        {sportsData.map((sport) => (
          <div key={sport.id}>
            <TagCard
              imgSrc={sport.imgSrc}
              title={sport.title}
              authImg={sport.author.img}
              authName={sport.author.name}
              authPost={sport.author.post}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/business");
  const data: SportsDataProps[] = await response.json();
  return {
    props: {
      sportsData: data,
    },
  };
};
