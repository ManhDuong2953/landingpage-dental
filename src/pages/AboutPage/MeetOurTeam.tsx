import SectionHeaderAndParagraph from "../../components/SectionHeaderAndParagraph";
import DianneRussellPhoto from "../../assets/images/AboutPage/dianne-russell.png";
import EstherHoward from "../../assets/images/AboutPage/esther-howard.jpg";
import DarrellSteward from "../../assets/images/AboutPage/darrell-steward.png";
import JennyWilson from "../../assets/images/AboutPage/jenny-wilson.png";

const teamMembers = [
  { photo: DianneRussellPhoto, name: "Dianne Russell", bgColor: "#dbeffa" },
  { photo: EstherHoward, name: "Esther Howard", bgColor: "#dbdefa" },
  { photo: DarrellSteward, name: "Darrell Steward", bgColor: "#f6dbfa" },
  { photo: JennyWilson, name: "Jenny Wilson", bgColor: "#fadbe2" },
];

const MeetOurTeam = () => {
  return (
    <section className="flex-col gap-y-16 section-1200">
      {/* title & paragraph */}
      <SectionHeaderAndParagraph
        category="Đội ngũ của chúng tôi"
        titleStyles="max-w-[540px]"
        title="Gặp gỡ đội ngũ nha sĩ tận tâm của NekCare"
        paragraph="Chúng tôi là những chuyên gia tận tụy, không chỉ mang đến nụ cười khỏe mạnh mà còn đảm bảo trải nghiệm thân thiện, nhẹ nhàng và chuyên nghiệp cho mọi bệnh nhân."
      />

      {/* team members grid */}
      <div
        className="content-center gap-10 grid grid-cols-1 laptop:grid-cols-4 mobileXL:grid-cols-2"
      >
        {teamMembers.map(({ photo, name, bgColor }, index) => (
          <div
            key={name}
            className="flex flex-col items-center gap-y-6 px-4 py-6 rounded-[2rem]"
            style={{ backgroundColor: bgColor }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={photo}
              alt={`Ảnh chân dung ${name}`}
              className="shadow-md rounded-[2rem] w-[290px] h-[350px] object-cover"
            />
            <span className="font-bold text-violet-dark text-lg -tracking-[0.4px]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
