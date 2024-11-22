import Hero from "../components/Fragments/Home/Hero";
import Features from "../components/Fragments/Home/Feature";
import Video from "../components/Fragments/Home/Video";
import MapLeaflet from "../components/Fragments/Home/MapLeaflet";

const HomePage = () => {
  return (
    <section className="h-screen relative pt-20 overflow-auto">
      <div
        style={{ backgroundImage: "url('images/background.png')" }}
        className="bg-cover bg-no-repeat bg-center opacity-10 absolute inset-0"
      />
      <div className="h-full relative overflow-auto no-scrollbar">
        <Hero />
        <Features />
        <Video />
        <MapLeaflet />
        <div className="bg-[#FFF5E9]">
          <div>
            <a href=""></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
