import { BlurFade } from "@/components/magicui/blur-fade";

export default function Intro() {
  return (
    <>
      <section id="header" className="flex justify-center p-8 gap-8 text-black">
        <img
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hello World"
          className="w-1/2"
        />

        <div className="flex flex-col justify-center">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-white">
              Hello World 👋
            </h2>
          </BlurFade>
          <br />
          <BlurFade delay={0.25 * 2} inView>
            <p className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none dark:text-white">
              Nice to meet you
            </p>
          </BlurFade>
          <h2 className="text-3xl font-bold mb-4 dark:text-white">About Me</h2>
          <p className="text-xl mb-6 dark:text-white">
            Hi there! I specialize in building visually appealing and
            user-friendly web applications. With a focus on responsive design,
            performance optimization, and accessibility, I strive to create
            seamless experiences for users across all devices.
          </p>
          <p className="text-xl mb-6 dark:text-white">
            I love working with modern JavaScript frameworks such as React, Vue,
            and Angular. I'm constantly learning new technologies to stay on top
            of the ever-evolving world of web development.
          </p>
        </div>
      </section>
    </>
  );
}
