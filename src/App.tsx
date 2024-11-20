import { Hero } from "./components/hero";
import { Pricing } from "./components/pricing";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-background to-background" />
        <div className="relative">
          <Hero />
          <Pricing />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;