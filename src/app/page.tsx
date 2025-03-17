"use client";

export default function Home() {
  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <section>
      <h1
        className="fade-in font-black text-center text-[3.9rem] leading-none lg:text-8xl text-primary flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleMenu}
      >
        <span>Torneo</span>
        <span>Apertura</span>
        <span>2025</span>
      </h1>
    </section>
  );
}
