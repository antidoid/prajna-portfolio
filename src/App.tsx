import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-black text-white min-h-screen px-32">
      <Header />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
export default App;
