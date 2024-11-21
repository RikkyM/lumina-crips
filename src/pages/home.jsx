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
      </div>
    </section>
  );
};

export default HomePage;
