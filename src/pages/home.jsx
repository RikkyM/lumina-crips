import Hero from "../components/Fragments/Home/Hero";
import Features from "../components/Fragments/Home/Feature";

const HomePage = () => {
  return (
    <section className="h-dvh relative pt-20 overflow-auto">
      <div
        style={{ backgroundImage: "url('images/background.png')" }}
        className="bg-cover bg-no-repeat bg-center opacity-10 absolute inset-0"
      />
      <div className="h-full relative overflow-auto">
        <Hero />
        <Features />
        <div className="flex justify-center h-screen py-20">
          <iframe
            className="rounded-md  w-[720px] h-[405px]"
            src="https://www.youtube.com/embed/O8sbPXxQP0s?autoplay=1&mute=1&loop=1&playlist=O8sbPXxQP0s&controls=0&showinfo=0&modestbranding=1&rel=0&origin=https://yourdomain.com"
            title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
