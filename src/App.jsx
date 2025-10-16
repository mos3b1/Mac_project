import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import ProductViewer from './component/ProductViewer';
// FIXED: Changed 'scroollTrigger' to 'ScrollTrigger' (correct spelling and capitalization)
import { ScrollTrigger, SplitText } from "gsap/all";

import { gsap } from "gsap";

// FIXED: Changed to 'ScrollTrigger' with capital S
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App;