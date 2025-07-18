"use client";

export default function Home() {
  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <section className="fade-in">
      <h1
        className="fade-in-slow font-black text-center text-[3.9rem] leading-none lg:text-8xl text-primary flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer drop-shadow-xl"
        onClick={handleMenu}
      >
        <span>Torneo</span>
        <span>Clausura</span>
        <span>2025</span>
      </h1>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-50 blur-sm">
        <img
          src="/assets/ldc-bg-2.jpg"
          alt="Logo"
          height={1920}
          className="h-full w-full object-cover bg-center "
        />
      </div>
    </section>
  );
}
