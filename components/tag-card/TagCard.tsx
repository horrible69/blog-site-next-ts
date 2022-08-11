interface TagCardProp {
  imgSrc: string;
  title: string;
  authImg: string;
  authName: string;
  authPost: string;
}
const TagCard = ({
  imgSrc,
  title,
  authImg,
  authName,
  authPost,
}: TagCardProp) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-4">
      <div>
        <img src={imgSrc} alt={title} className="rounded-lg" />
      </div>
      <div className="col-span-3 items-center">
        <h1 className="text-xl font-bold">{title}</h1>
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

export default TagCard;
