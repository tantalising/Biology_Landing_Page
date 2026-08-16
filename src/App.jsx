import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Technology from './components/Technology';
import Spotlight from './components/Spotlight';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import Loader from './components/Loader';

const lockScroll = () => {
  document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
  document.body.style.overflow = 'auto';
};

const createDelay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const waitForVideoToBuffer = (video) => {
  const HAVE_FUTURE_DATA = 3;
  if (video.readyState >= HAVE_FUTURE_DATA) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    video.addEventListener('canplaythrough', resolve, { once: true });
    video.addEventListener('error', resolve, { once: true });
  });
};

const loadAllVideos = () => {
  const videos = Array.from(document.querySelectorAll('video'));
  return Promise.all(videos.map(waitForVideoToBuffer));
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    lockScroll();

    const executeBootSequence = async () => {
      const minimumDisplayTime = createDelay(2500);
      const maximumSafetyTimeout = createDelay(8000);

      const assetsLoaded = Promise.all([loadAllVideos(), minimumDisplayTime]);

      await Promise.race([assetsLoaded, maximumSafetyTimeout]);

      setIsLoading(false);
      unlockScroll();
    };

    const renderDelay = setTimeout(executeBootSequence, 100);

    return () => {
      clearTimeout(renderDelay);
      unlockScroll();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">

      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <Navigation />
      <Hero />
      <Capabilities />
      <Technology />
      <Spotlight />
      <Statistics />
      <Footer />

    </div>
  );
}
