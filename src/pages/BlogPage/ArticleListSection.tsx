import ArticleCoverImg1 from "../../assets/images/BlogPage/article-cover-1.png";
import ArticleCoverImg2 from "../../assets/images/BlogPage/article-cover-2.png";
import ArticleCoverImg3 from "../../assets/images/BlogPage/article-cover-3.png";
import ArticleCoverImg4 from "../../assets/images/BlogPage/article-cover-4.png";
import ArticleCoverImg5 from "../../assets/images/BlogPage/article-cover-5.png";
import ArticleCoverImg6 from "../../assets/images/BlogPage/article-cover-6.png";
import ArticleCard from "../../components/ArticleCard";

const articleList = [
  {
    cover: ArticleCoverImg1,
    category: "Công nghệ",
    title: "Công nghệ mới trong phẫu thuật nha khoa",
  },
  {
    cover: ArticleCoverImg2,
    category: "Nha khoa",
    title: "Chăm sóc răng miệng thường xuyên giúp nụ cười rạng rỡ",
  },
  {
    cover: ArticleCoverImg3,
    category: "Vệ sinh",
    title: "Vệ sinh răng miệng cho mọi lứa tuổi để giữ nụ cười",
  },
  {
    cover: ArticleCoverImg4,
    category: "Mẹo hay",
    title: "Công nghệ mới trong phẫu thuật nha khoa 2",
  },
  {
    cover: ArticleCoverImg5,
    category: "Tin tức",
    title: "Chăm sóc răng miệng thường xuyên giúp nụ cười rạng rỡ 2",
  },
  {
    cover: ArticleCoverImg6,
    category: "Sự kiện",
    title: "Vệ sinh răng miệng cho mọi lứa tuổi để giữ nụ cười 2",
  },
];
const ArticleListSection = () => {
  return (
    <section className="flex flex-col items-center gap-y-16 mx-auto max-w-[1300px]">
      {/* Title */}
      <h2 className="text-center">
        Cập nhật những tin tức mới nhất từ chúng tôi
      </h2>

      {/* Article list */}
      <div className="flex tablet:flex-row flex-col flex-wrap justify-center items-center gap-10">
        {articleList.map(({ cover, category, title }, index) => (
          <ArticleCard
            key={`${title}-${index}`}
            cover={cover}
            title={title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="700"
            category={category}
            abstract="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing..."
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`text-lg w-12 aspect-square tablet:w-14 font-bold rounded-2xl duration-300 ${
              page === 1
                ? "text-white bg-violet"
                : "text-violet-dark border border-[#eee] hover:text-white hover:bg-violet hover:border-violet"
            }`}
          >
            {page}
          </button>
        ))}

        <button className="hover:bg-violet border border-[#eee] hover:border-violet rounded-2xl w-12 tablet:w-14 aspect-square font-bold text-violet-dark hover:text-white text-lg duration-300">
          ...
        </button>

        <button
          className="flex justify-center items-center hover:bg-violet border border-[#eee] hover:border-violet rounded-2xl w-12 tablet:w-14 aspect-square font-bold text-violet-dark hover:text-white text-lg duration-300"
          aria-label="Next Page"
        >
          <svg className="fill-none w-2 h-[14px]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-2 stroke-current"
              d="m1 1 6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ArticleListSection;
