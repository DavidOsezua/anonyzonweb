import DownloadSection from "./components/DownloadSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BottomImg from "./components/svgComponents/BottomImg";
import TopImg from "./components/svgComponents/TopImg";

const App: React.FC = () => {
  return (
    <section
      className="min-h-screen relative "
      style={{
        background: "linear-gradient(to bottom right, #161B33, #2C3147)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute  left-0">
        <TopImg />
      </div>

      <div className="absolute bottom-0 right-0">
        <BottomImg />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="">
          <Hero />
          <Features />

          <DownloadSection />
          <Footer />
        </main>
      </div>
    </section>
  );
};
export default App;
