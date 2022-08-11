import { BusinessDataProps } from "../../pages/api/business";

interface CardProp {
  imgSrc: string;
  title: string;
  description: string;
  authImg: string;
  authName: string;
  authPost: string;
}
const Card = ({
  imgSrc,
  title,
  description,
  authImg,
  authName,
  authPost,
}: CardProp) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <img src={imgSrc} alt={title} className="rounded-xl" />
      </div>
      <div className="px-1 ">
        <h2 className="text-xl font-extrabold my-2">{title}</h2>
        <span className="text-sm my-3 py-3 text-gray-500">{description}</span>
        <div className="flex space-x-2">
          <img
            className="h-12 w-12 rounded-full"
            src={authImg}
            alt={authName}
          />
          <div>
            <h3 className="font-bold">{authName}</h3>
            <span className="text-gray-700 text-sm">{authPost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
