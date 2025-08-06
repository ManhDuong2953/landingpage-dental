import ArticleCoverImg1 from "../../assets/images/HomePage/article-cover-1.png";
import ArticleCoverImg2 from "../../assets/images/HomePage/article-cover-2.png";
import ArticleCoverImg3 from "../../assets/images/HomePage/article-cover-3.png";
import ArticleCard from "../../components/ArticleCard";

const articleList = [
  {
    cover: ArticleCoverImg1,
    category: "Công nghệ",
    title: "Công nghệ hiện đại trong phẫu thuật nha khoa",
  },
  {
    cover: ArticleCoverImg2,
    category: "Nha khoa",
    title: "Chăm sóc răng định kỳ giúp nụ cười tỏa sáng",
  },
  {
    cover: ArticleCoverImg3,
    category: "Vệ sinh",
    title: "Vệ sinh răng miệng cho mọi lứa tuổi",
  },
];

const ArticleListSection = () => {
  return (
    <section className="flex-col items-center gap-y-16 section-1200">
      {/* tiêu đề chính */}
      <h2 className="text-center" data-aos="fade-up">
        Cập nhật những tin tức mới nhất từ chúng tôi
      </h2>

      {/* danh sách bài viết */}
      <div
        className="flex tablet:flex-row flex-col justify-center items-center gap-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {articleList.map(({ cover, category, title }, index) => (
          <ArticleCard
            key={title}
            cover={cover}
            title={title}
            category={category}
            abstract="Khám phá những kiến thức hữu ích về sức khỏe răng miệng, công nghệ và chăm sóc cá nhân từ đội ngũ chuyên gia."
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleListSection;
