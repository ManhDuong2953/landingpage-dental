import SearchBar from "../../components/SearchBar";
import NewsAndArticleImg from "../../assets/images/BlogPage/news-and-article-img.png";

const HeroSection = () => {
  return (
    <section
      className="flex tablet:flex-row flex-col-reverse justify-center items-center gap-x-16 gap-y-10 mx-auto mt-6 px-4 w-full max-w-[1200px]"
    >
      {/* Left Content */}
      <div
        className="flex flex-col items-center tablet:items-start tablet:text-left text-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="font-bold text-[32px] text-violet-dark tablet:text-[44px] leading-tight">
          Tin tức & Bài viết
        </h1>

        <p className="mt-4 mb-8 max-w-[480px] text-gray-700">
          Cập nhật những thông tin, mẹo chăm sóc sức khỏe răng miệng và tin tức
          mới nhất từ chúng tôi mỗi ngày.
        </p>

        {/* SearchBar */}
        <SearchBar addStyles="w-full max-w-[480px]" />
      </div>

      {/* Right Content - Hero Image */}
      <div
        className="w-full max-w-[600px]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src={NewsAndArticleImg}
          alt="News and article about dentition"
          className="shadow-sm rounded-xl w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
