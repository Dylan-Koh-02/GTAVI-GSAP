import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SecondVideo = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.set('.lucia', { marginTop: '-60vh', opacity: 0.1, marginLeft:'2%' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true
      }
    })

    tl.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' })

    videoRef.current.onloadedmetadata = () => {
      tl.fromTo(videoRef.current,
    { currentTime: 0.2 },                       
    { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' },
    '<'
  )
    }
  })
  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd scale-105"
          style={{ objectPosition: "15% 0%" }}
        ></video>
      </div>
    </section>
  );
};

export default SecondVideo;
