"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";

import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Contact({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10 ",
        className
      )}
      ref={containerRef}
    >
      <div
        className={cn(
          "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10 ",
          className
        )}
        ref={containerRef}
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <h3 className="text-2xl tracking-wider text-black dark:text-white font-bold text-center">
            CONTACT
          </h3>
          <p className="font-bold text-2xl">connect with me on socials.</p>
          <div className="flex flex-row items-center justify-between gap-10">
            <Circle ref={div7Ref}>
              <Icons.user />
            </Circle>
            <Circle ref={div6Ref} className="text-black">
              <Icons.openai />
            </Circle>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/Farzana677" target="_blank">
                <Circle ref={div1Ref} className="text-black">
                  <Icons.googleDrive />
                </Circle>
              </a>

              <a href="https://mail.google.com" target="_blank">
                <Circle ref={div2Ref} className="text-black">
                  <Icons.googleDocs />
                </Circle>
              </a>

              <Circle ref={div3Ref} className="text-black">
                <Icons.whatsapp />
              </Circle>
              <Circle ref={div4Ref} className="text-black">
                <Icons.messenger />
              </Circle>
              <Circle ref={div5Ref} className="text-black">
                <Icons.notion />
              </Circle>
            </div>
          </div>
        </div>

        {/* AnimatedBeams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          duration={3}
        />
      </div>
    </div>
  );
}

const Icons = {
  notion: () => <RiNotionFill />,
  openai: () => <IoShareSocialOutline />,
  googleDrive: () => <FaGithub />,
  whatsapp: () => <IoLogoWhatsapp />,
  googleDocs: () => <SiGmail />,
  zapier: () => <FaLinkedin />,
  messenger: () => <FaFacebookMessenger />,
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
