import { cn } from "@/lib/utils";
import azios from "../assets/Azios.png";
import img from "../assets/Angular .png";
import css from "../assets/CSS3.png";
import html from "../assets/HTML5.png";
import js from "../assets/JavaScript.png";
import reacticon from "../assets/react.svg";
import vite from "../assets/Vite.js.png";
import { BoxReveal } from "../components/magicui/box-reveal";
import { Marquee } from "../components/marquee";

const reviews = [
  {
    body: "Tailwind",
    img: img,
  },
  {
    body: "CSS.",
    img: css,
  },
  {
    body: "Html",
    img: html,
  },
  {
    body: "React",
    img: reacticon,
  },
  {
    body: "Vite",
    img: vite,
  },
  {
    body: "Azios",
    img: azios,
  },
  {
    body: "Javascript",
    img: js,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(0, reviews.length / 2);
const ReviewCard = ({
  img,
  body,
  color = "bg-neutral-100",
}: {
  img: string | React.ReactElement;
  color?: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-34 cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-100 hover:bg-gray-200 dark:bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-black dark:hover:bg-gray-50/[.15] ",
        color
      )}
    >
      <div className="flex items-center gap-4 text-black dark:text-white">
        {" "}
        {/* Corrected class for horizontal alignment */}
        {typeof img === "string" ? (
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt="Tech logo"
            src={img}
          />
        ) : (
          img
        )}
        <div>
          <blockquote className="text-xl font-semibold text-black dark:text-white">
            {body}
          </blockquote>
        </div>
      </div>
    </figure>
  );
};

export function Skills() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
      <h3 className="text-2xl tracking-wider text-black font-bold dark:text-white">
        SKILLS
      </h3>
      <BoxReveal boxColor={"white"} duration={0.5} mx-auto>
        <h2 className="mb-2">
          <span className="text-black text-3xl font-bold dark:text-white">
            Get Started
          </span>
        </h2>
      </BoxReveal>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {fourthRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
