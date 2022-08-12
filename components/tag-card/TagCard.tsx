import Link from "next/link";

interface TagCardProp {
  iid: number;
  imgSrc: string;
  title: string;
  authImg: string;
  authName: string;
  authPost: string;
}
const TagCard = ({
  iid,
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
        <Link href={`/sports/${iid}`}>
          <a>
            <h1 className="text-xl font-bold hover:underline">{title}</h1>
          </a>
        </Link>
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
