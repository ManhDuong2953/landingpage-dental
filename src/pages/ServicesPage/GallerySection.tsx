import SectionHeaderAndParagraph from "../../components/SectionHeaderAndParagraph";
import Photo1 from "../../assets/images/ServicesPage/gallery-photo-1.png";
import Photo2 from "../../assets/images/ServicesPage/gallery-photo-2.png";
import Photo3 from "../../assets/images/ServicesPage/gallery-photo-3.png";
import Photo4 from "../../assets/images/ServicesPage/gallery-photo-4.png";
import Photo5 from "../../assets/images/ServicesPage/gallery-photo-5.png";
import Photo6 from "../../assets/images/ServicesPage/gallery-photo-6.png";

const gallery = [
  { photo: Photo1, key: "p1", className: "gallery-photo gallery-photo-1" },
  { photo: Photo2, key: "p2", className: "gallery-photo gallery-photo-2" },
  { photo: Photo3, key: "p3", className: "gallery-photo gallery-photo-3" },
  { photo: Photo4, key: "p4", className: "gallery-photo gallery-photo-4" },
  { photo: Photo5, key: "p5", className: "gallery-photo gallery-photo-5" },
  { photo: Photo6, key: "p6", className: "gallery-photo gallery-photo-6" },
];

const GallerySection = () => {
  return (
    <section className="flex-col gap-y-16 section-1200">
      {/* title, paragraph */}
      <SectionHeaderAndParagraph
        category="Thư viện ảnh"
        title="Một vài hình ảnh thực tế về dịch vụ của chúng tôi"
        titleStyles="max-w-[475px]"
        paragraph="Chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu. Dưới đây là những khoảnh khắc thực tế trong quá trình phục vụ khách hàng tại NekCare."
      />

      {/* Gallery photos */}
      <div className="gap-10 gallery-grid grid">
        {gallery.map(({ photo, key, className }, index) => (
          <img
            key={key}
            src={photo}
            alt={`Dịch vụ nha khoa thực tế ${index + 1}`}
            className={className}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
