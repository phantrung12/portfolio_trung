import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  Experience,
  About,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  Tech,
} from "./components";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/*<Feedbacks />*/}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
