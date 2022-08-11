import { TrendingDataProps } from "../../pages/api/trending";
import Navbar from "../navbar/Navbar";
import SwiperComp from "../swiper-comp/SwiperComp";
interface HeaderType {
  trendingData: TrendingDataProps[];
}
const Header = ({ trendingData }: HeaderType) => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div>
        <h1 className="text-center text-5xl my-16 font-bold">Trending</h1>
      </div>
      <SwiperComp trendingData={trendingData} />
    </div>
  );
};

export default Header;
