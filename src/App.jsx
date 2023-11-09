import React, { useState } from "react";
import axios from "axios";

import Hero from './components/Hero'
import Demo from './components/Demo'
import Footer from './components/Footer'

import './App.css'

const App = () => {
  const [buildStatus, setBuildStatus] = useState("");
  const buildHookUrl = "https://api.netlify.com/build_hooks/654c4d35d9a9611fb06ff1a8"; // Replace with your actual Build Hook URL

  const triggerBuild = async () => {
    try {
      const response = await axios.post(buildHookUrl);
      if (response.status === 200) {
        setBuildStatus("Build triggered successfully.");
      }
    } catch (error) {
      setBuildStatus("Error triggering build.");
      console.error("Error triggering build:", error);
    }
  };
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
        <div>
          <button onClick={triggerBuild}>Trigger Build</button>
          <p>{buildStatus}</p>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App