import ArticleCoverImg1 from "../../assets/images/HomePage/article-cover-1.png";
import ArticleCoverImg2 from "../../assets/images/HomePage/article-cover-2.png";
import ArticleCoverImg3 from "../../assets/images/HomePage/article-cover-3.png";
import ArticleCard from "../../components/ArticleCard";

const articleList = [
  {
    cover: ArticleCoverImg1,
    category: "Công nghệ",
    title: "Công nghệ mới phục vụ cho phẫu thuật nha khoa",
  },
  {
    cover: ArticleCoverImg2,
    category: "Nha khoa",
    title: "Chăm sóc răng miệng thường xuyên giúp nụ cười sáng hơn",
  },
  {
    cover: ArticleCoverImg3,
    category: "Vệ sinh",
    title: "Vệ sinh răng miệng cho mọi lứa tuổi để có nụ cười đẹp",
  },
];

const BlogSection = () => {
  return (
    <section
      className="flex-col items-center gap-y-16 section-1200"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Tiêu đề phần blog */}
      <div
        className="flex flex-col items-center gap-y-4 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <span className="section-small-title">Blog</span>
        <h2>Cập nhật những tin tức mới nhất từ chúng tôi</h2>
      </div>

      {/* Hiển thị danh sách bài viết */}
      <div className="flex tabletL:flex-row flex-col justify-center items-stretch gap-10">
        {articleList.map(({ cover, category, title }, index) => (
          <div
            key={title}
            data-aos="fade-up"
            data-aos-delay={200 + index * 200}
            data-aos-duration="1000"
          >
            <ArticleCard
              cover={cover}
              title={title}
              category={category}
              abstract="Lorem ipsum là đoạn văn bản mẫu thường dùng trong thiết kế đồ họa, in ấn và xuất bản..."
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
