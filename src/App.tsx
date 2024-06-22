import { Icon } from "@iconify/react/dist/iconify.js";

function App() {
  return (
    <main className="w-full min-h-dvh flex flex-col items-center bg-zinc-900 text-zinc-100">
      <nav className="container py-12 flex items-center justify-between">
        <h1 className="flex text-2xl items-center gap-2">
          <Icon icon="tabler:hammer" className="w-8 h-8 text-primary" />
          <span className="font-semibold tracking-wide">
            Lifeforge
            <span className="text-primary ml-1">.</span>
          </span>
        </h1>
        <ul className="flex gap-16 text-zinc-500 font-medium text-lg">
          <li className="font-semibold text-zinc-100 relative after:bg-primary after:absolute after:w-6 after:h-[3px] after:rounded-full after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Home
          </li>
          <li className="">Docs</li>
          <li className="">Blog</li>
          <li className="">Contact</li>
          <li className="">
            <Icon icon="uil:github" className="w-8 h-8" />
          </li>
        </ul>
      </nav>
      <section className="container py-24">
        <h2 className="text-center mt-4 text-2xl uppercase tracking-[0.2em] font-medium text-primary">
          A SELF HOSTED PERSONAL MANAGEMENT SYSTEM
        </h2>
        <h1 className="text-center mt-4 text-8xl font-black leading-snug">
          Forge your <span className="text-primary">Second Brain</span>,
          <br />
          One Step at a Time.
        </h1>
        <p className="text-center mt-8 text-2xl tracking-wide leading-relaxed px-96 text-zinc-500">
          Lifeforge is your all-in-one personal management system designed to
          help you manage every aspect of your life efficiently.
        </p>
        <div className="flex justify-center mt-16">
          <button className="bg-primary text-zinc-900 py-5 px-8 tracking-wider rounded-lg flex items-center gap-2 font-semibold text-2xl">
            Get Started
            <Icon icon="uil:arrow-right" className="w-8 h-8" />
          </button>
        </div>
      </section>
      <img src="/images/hero.svg" alt="Hero" className="w-full -mt-16" />
      <section className="w-full flex items-start -mt-24 mb-24">
        <div className="container flex flex-col py-24 px-24">
          <h2 className="mt-4 text-xl uppercase tracking-[0.2em] font-medium text-primary">
            ABOUT LIFEFORGE.
          </h2>
          <h1 className="mt-4 text-7xl font-black leading-snug">
            It All Begins with a{" "}
            <span className="text-primary">Humble Idea</span>
          </h1>
          <p className="mt-8 text-2xl leading-normal tracking-wide text-zinc-500">
            Lifeforge was created to meet the needs of multitaskers like myself.
            Balancing school assignments, coding projects, and personal goals
            inspired me to develop a unified platform for efficient task
            management and productivity. Lifeforge combines my passion for
            coding with a user-friendly, customizable interface to help everyone
            stay organized.
          </p>
          <button className="text-primary mt-12 tracking-wider rounded-lg flex items-center gap-2 font-semibold text-xl">
            Learn More
            <Icon icon="uil:arrow-right" className="w-7 h-7" />
          </button>
        </div>
        <img src="/images/mockup.png" alt="Mockup" className="w-full" />
      </section>
      <section className="container my-24">
        <h2 className="text-center mt-4 text-xl uppercase tracking-[0.2em] font-medium text-primary">
          WHY LIFEFORGE?
        </h2>
        <h1 className="text-center mt-4 text-7xl font-black leading-snug">
          Don’t We Already Have <span className="text-primary">Notion?</span>
        </h1>
        <p className="text-center mt-8 text-2xl px-64 text-zinc-500">
          While Notion's extensive customization can be overwhelming, Lifeforge
          provides a more focused and streamlined experience.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-16 items-center">
          <div className="flex flex-col items-center gap-8 p-8">
            <div className="p-4 rounded-lg bg-zinc-800">
              <Icon icon="uil:server" className="w-16 h-16 text-zinc-500" />
            </div>
            <h3 className="text-5xl font-semibold mt-2">Self Hosted</h3>
            <p className="text-center text-xl text-zinc-500">
              As a self-hosted platform, Lifeforge ensures data privacy by
              allowing you to host it on your own server, providing greater
              control and security.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 p-8 bg-zinc-800 rounded-xl">
            <div className="p-4 rounded-lg bg-zinc-700">
              <Icon
                icon="tabler:brand-open-source"
                className="w-16 h-16 text-primary"
              />
            </div>
            <h3 className="text-5xl font-semibold mt-2">Open Sourced</h3>
            <p className="text-center text-xl text-zinc-500">
              Lifeforge, an open-sourced platform, ensures your privacy while
              providing essential tools without Notion's overwhelming
              customization.
            </p>
            <a
              href="#"
              className="bg-primary text-zinc-900 w-full flex items-center gap-2 justify-center py-4 px-6 font-semibold text-xl rounded-lg mt-4"
            >
              View Source
              <Icon icon="uil:arrow-right" className="w-7 h-7" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-8 p-8">
            <div className="p-4 rounded-lg bg-zinc-800">
              <Icon icon="uil:apps" className="w-16 h-16 text-zinc-500" />
            </div>
            <h3 className="text-5xl font-semibold mt-2">Modular System</h3>
            <p className="text-center text-xl text-zinc-500">
              Being a modular-based system, Lifeforge allows you to tweak and
              customize and integrate features as modules according to your
              needs.
            </p>
          </div>
        </div>
      </section>
      <section className="container py-24">
        <h1 className="text-center mt-4 text-7xl px-56 font-black leading-snug">
          Created for
          <span className="text-primary"> Everyone</span> Who Wants to Organize
          Their Entire Life & Build a Second Brain
        </h1>
        <p className="text-center mt-8 text-2xl px-64 text-zinc-500">
          Whether you're a student, professional, or entrepreneur, Lifeforge
          will help you capture and organize everything in one place, ensuring
          no idea, task, or goal is lost.
        </p>
        <div className="relative">
          <img
            src="/images/bento.svg"
            alt="Bento Grid"
            className="w-full mt-16"
          />
          <a
            href="#"
            className="absolute bottom-8 right-8 text-primary font-semibold text-2xl flex items-center gap-2"
          >
            Get Staretd
            <Icon
              icon="uil:arrow-right"
              className="w-8 h-8 stroke-[0.5px] stroke-primary"
            />
          </a>
        </div>
      </section>
      <footer className="flex flex-col items-center container mb-8 justify-center gap-4">
        <div className="flex items-center gap-2 text-zinc-500">
          <Icon icon="tabler:creative-commons" className="size-8" />
          <Icon icon="tabler:creative-commons-by" className="size-8" />
          <Icon icon="tabler:creative-commons-nc" className="size-8" />
          <Icon icon="tabler:creative-commons-sa" className="size-8" />
        </div>
        <p className="text-center text-lg text-zinc-500">
          A project by{" "}
          <a
            className="text-primary font-medium underline"
            target="_blank"
            href="https://thecodeblog.net"
            rel="noreferrer"
          >
            Melvin Chia
          </a>{" "}
          licensed under{" "}
          <a
            className="text-primary font-medium underline"
            target="_blank"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

export default App;
