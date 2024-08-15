import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#0A0B0A] text-white min-h-screen px-32">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
export default App;
