import { GetStaticProps } from "next";
import Card from "../../components/card/Card";
import { BusinessDataProps } from ".././api/business/index";
interface BusinessDataArrayProps {
  businessData: BusinessDataProps[];
}
const Business = ({ businessData }: BusinessDataArrayProps) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-slate-800 font-black uppercase">
        Business Blog's
      </h1>
      <section className="grid grid-cols-3 gap-12 max-w-7xl mx-auto py-12">
        {businessData.map((business) => (
          <div key={business.id}>
            {/* <h1>Businnes</h1> */}
            <Card
              iid={business.id}
              imgSrc={business.imgSrc}
              title={business.title}
              description={business.description}
              authImg={business.author.img}
              authName={business.author.name}
              authPost={business.author.post}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Business;
export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/business");
  const data: BusinessDataProps[] = await response.json();
  return {
    props: {
      businessData: data,
    },
  };
};
