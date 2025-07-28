import gsap from "gsap";
import { useRef, useEffect } from "react";

const Magnetic = ({ children, className }) => {
  const Ref = useRef();

  useEffect(() => {
    const element = Ref.current;
    if (!element) return;

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(element, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "elastic.out",
      });
    };

    const mouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      });
    };

    element.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseleave", mouseLeave);

    return () => {
      element.removeEventListener("mousemove", mouseMove);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div ref={Ref} className={`${className} inline-block`}>
      {children}
    </div>
  );
};

export default Magnetic;
