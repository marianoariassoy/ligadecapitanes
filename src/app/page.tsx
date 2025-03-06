export default function Home() {
  return (
    <>
      <h1 className="fade-in-slow font-black text-center text-[3.9rem] leading-none lg:text-8xl text-primary flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span>Torneo</span>
        <span>Apertura</span>
        <span>2025</span>
      </h1>
      <div className="fixed bg-scroll top-0 left-0 bg-[url('/assets/background.webp')] h-full w-screen -z-10 opacity-20"></div>
    </>
  );
}
