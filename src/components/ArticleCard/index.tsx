import { Link } from "react-router-dom";

type ArticleCardProps = {
  title: string;
  cover: string;
  category: string;
  abstract: string;
  link?: string;
};

const ArticleCard = ({
  title,
  cover,
  category,
  abstract,
  link = "/landingpage-dental/blog/new-tech",
}: ArticleCardProps) => {
  return (
    <Link
      key={title}
      to={link}
      className="hover:shadow-sm p-4 pb-10 border border-[#eee] rounded-[2rem] max-w-[400px] hover:scale-105 duration-300"
    >
      {/* cover and date */}
      <div className="relative mb-6 max-w-[480px] max-h-[250px]">
        <div className="top-4 left-4 absolute flex flex-col items-center bg-white px-5 pt-1 pb-2 rounded-2xl text-center">
          <span className="font-bold text-violet-dark text-lg">23</span>
          <span className="font-bold text-violet-dark/60 text-sm">Jan</span>
        </div>
        <img
          src={cover}
          alt={title}
          className="rounded-[2rem] w-full min-w-48 h-full min-h-32 object-cover"
        />
      </div>

      <span className="section-small-title">{category}</span>
      <h4 className="mt-2 mb-3 font-bold text-violet-dark text-lg">{title}</h4>

      <p className="text-base line-clamp-2">{abstract}</p>
    </Link>
  );
};

export default ArticleCard;
