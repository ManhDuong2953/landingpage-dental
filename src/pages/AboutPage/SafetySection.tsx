import { useRef, useState } from "react";

import OperatingRoomImg from "../../assets/images/AboutPage/operating-room.png";
import OperatingRoomVideo from "../../assets/images/AboutPage/operating-room.mp4";

const SafetySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(videoRef.current.paused);
    }
  };

  return (
    <section
      className="flex flex-col items-center gap-y-12 tablet:gap-y-24 bg-violet-light mx-auto tablet:mb-48 px-4 pt-20 pb-4 tablet:pb-0 rounded-[48px] w-full max-w-[1200px]"
    >
      {/* Top content */}
      <div className="text-center" data-aos="fade-up">
        <span className="section-small-title">An toàn</span>
        <h2 className="mt-4 mb-6">Chúng tôi đặt yếu tố an toàn lên hàng đầu</h2>
        <p className="mx-auto max-w-[510px]">
          Từ trang thiết bị hiện đại đến quy trình vô trùng nghiêm ngặt,
          chúng tôi luôn đảm bảo sự an toàn tuyệt đối cho mọi khách hàng khi trải nghiệm dịch vụ.
        </p>
      </div>

      {/* Video content */}
      <div
        className="relative tablet:-mb-48 rounded-[2.5rem] max-w-[840px] overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          aria-label={isPaused ? "Phát video" : "Tạm dừng video"}
          className={`w-20 h-20 rounded-full absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[2]
            ${
              isPaused
                ? "bg-white text-violet-dark active:bg-violet active:text-white"
                : "bg-white/10 text-violet-dark/10 hover:bg-white hover:text-violet-dark"
            }
            transition-all duration-300`}
        >
          {isPaused ? (
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Video element */}
        <video
          ref={videoRef}
          preload="none"
          poster={OperatingRoomImg}
          loop
          className="rounded-[2.5rem] tablet:rounded-none w-[840px] min-w-60 h-auto object-cover"
        >
          <source src={OperatingRoomVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default SafetySection;
