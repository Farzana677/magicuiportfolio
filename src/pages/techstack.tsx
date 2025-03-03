import { useState, useEffect } from "react";
import { OrbitingCircles } from "../components/magicui/orbiting-circles";
import { RetroGrid } from "../components/magicui/retro-grid";
import { TypingAnimation } from "../components/magicui/typing-animation";
import { Link } from "react-router";

export default function TechStack() {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const cycleText = setInterval(() => {
      setShowFirstText((prev) => !prev);
      setShowSecondText((prev) => !prev);
    }, 6000);

    return () => clearInterval(cycleText);
  }, []);

  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl bg-black">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          What are you discovering next? Get Started
        </span>

        <RetroGrid />
      </div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <span className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-xl font-light leading-none text-black">
          Web Developer
        </span>

        {/* First Text Animation */}
        {showFirstText && (
          <TypingAnimation>Hey Farzana here 👋</TypingAnimation>
        )}

        {/* Second Text Animation */}
        {showSecondText && (
          <TypingAnimation delay={2000}>
            I build things for the web
          </TypingAnimation>
        )}
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <Link to="/skills">
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              skillls
            </button>
          </Link>
          <Link to="/techstack">
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              techstack
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              contact
            </button>
          </Link>
          {/* <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button> */}
        </div>
        <OrbitingCircles iconSize={40}>
          <Icons.star />
          <Icons.heart />
          <Icons.cloud />
          <Icons.sun />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <Icons.sun />
          <Icons.star />
          <Icons.cloud />
          <Icons.heart />
        </OrbitingCircles>
      </div>
    </>
  );
}

const Icons = {
  star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow-500"
    >
      <polygon points="12 2 15 8 22 8 16 12 18 19 12 15 6 19 8 12 2 8 9 8" />
    </svg>
  ),
  heart: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-500"
    >
      <path d="M12 21C12 21 8 17 4 12C2 9 2 5 4 3C6 1 8 1 10 3C12 5 14 5 16 3C18 1 20 1 22 3C24 5 24 9 22 12C18 17 12 21 12 21Z" />
    </svg>
  ),
  cloud: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
    >
      <path d="M20 17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17C4 15.8954 4.89543 15 6 15H7.26087C8.25523 12.5892 10.5204 11 13 11C15.7956 11 18 13.2044 18 16C18 16.1952 17.979 16.3881 17.9394 16.5721C18.8467 16.9237 19.5 17.7889 19.5 18.6667C19.5 19.5798 18.5798 20.5 17.6667 20.5C16.8087 20.5 16.0944 19.8553 16.0387 19.0264C15.736 18.2085 14.9317 17.5962 14 17.4061C13.8086 17.3045 13.6152 17.2555 13.4195 17.2555C13.2712 17.2555 13.1246 17.2782 12.9812 17.3211C12.4536 17.4643 11.9161 17.5709 11.3838 17.6398C11.2476 17.653 11.1127 17.6583 10.9776 17.6543C9.93709 17.6122 9.10059 16.9589 8.64907 16.0168C8.37216 15.4232 8.2678 14.6945 8.37167 13.9897C8.48012 13.3246 8.82512 12.7041 9.29542 12.1747C10.5577 10.3781 12.9001 9 15.5 9C18.2614 9 20.5 11.2386 20.5 14C20.5 14.0822 20.4943 14.1639 20.4813 14.2452C20.4751 14.4427 20.4341 14.6325 20.3626 14.8074C20.6189 15.0354 20.8584 15.295 21.0502 15.5795C21.312 16.0062 21.5 16.4767 21.5 17C21.5 17.9249 20.7038 18.75 19.6667 18.75C19.2609 18.75 18.866 18.5542 18.6036 18.2223C18.4672 18.0599 18.2472 17.9996 18 18L20 17Z" />
    </svg>
  ),
  sun: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-orange-500"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="4.22" x2="16.94" y2="5.64" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="19.78" x2="16.94" y2="18.36" />
    </svg>
  ),
};
