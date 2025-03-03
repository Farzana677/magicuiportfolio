"use client";

import { MagicCard } from "./magic-card";

export function MagicCardDemo() {
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl bg-red-900"
        // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <p className="text-blue-900">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          repudiandae harum quibusdam. Error natus officia animi deserunt
          aliquid alias nostrum magnam possimus, voluptatibus laudantium
          voluptate mollitia nesciunt, cumque vero nulla.
        </p>
      </MagicCard>
      <MagicCard className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl bg-red-900">
        <p className="text-red-700"></p>
      </MagicCard>
    </div>
  );
}
