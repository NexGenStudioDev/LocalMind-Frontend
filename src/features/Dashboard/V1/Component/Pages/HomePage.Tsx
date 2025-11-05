import React from "react";



const features = [
  { title: "Custom Models", desc: "Train and deploy custom AI models lightning fast." },
  { title: "Model Supports", desc: "Supports GPT, Llama, Stability and more AI engines." },
  { title: "AI Chat Section", desc: "Next-gen real-time AI chat system, built for speed." },
  { title: "Socket & REST APIs", desc: "Ultra-low latency sockets and secure REST APIs." },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* Floating Shapes */}
      <img src={tubeImg} className="absolute top-[80px] left-[50%] -translate-x-1/2 w-[300px] opacity-40" />
      <img src={blobImg} className="absolute top-[250px] left-[60px] w-[260px] opacity-30 blur-[2px]" />
      <img src={waveImg} className="absolute top-[400px] left-0 w-[500px] opacity-40" />
      <img src={dotShadowImg} className="absolute bottom-[40px] right-[120px] w-[200px] opacity-20 blur-[60px]" />

      {/* NAVBAR */}
      <div className="w-full flex justify-between items-center px-10 py-5 border-b border-white/10">
        <span className="text-lg font-bold opacity-90 tracking-wide">LOCALMIND</span>
        
        <div className="flex gap-8 text-sm text-gray-400">
          <span>Docs</span>
          <span>Models</span>
          <span>Chat</span>
          <span>Login</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-10 pt-16">
        <h1 className="text-5xl font-semibold tracking-[2px]">LOCAL MIND</h1>
        <p className="mt-3 text-gray-300 text-lg">"BUILT FOR SPEED. DESIGNED FOR INTELLIGENCE."</p>

        <div className="mt-6 max-w-[550px] text-gray-400 text-sm leading-relaxed">
          LocalMind is a fast, secure platform made for intelligent systems and real-time execution.
          Optimized for speed, scalable deployment & modern AI capabilities.
        </div>
      </div>

      {/* HERO RIGHT IMAGE (Globe + lines) */}
      <div className="absolute top-[150px] right-[80px] w-[420px] rounded-2xl overflow-hidden border border-white/10">
        <img src={globweImg} className="w-full opacity-60" />
        <img src={linesImg} className="absolute top-0 left-0 w-full mix-blend-screen" />
      </div>

      {/* FEATURES SECTION */}
      <div className="mt-[350px] px-10">
        <h2 className="text-center text-2xl font-bold tracking-wide mb-12">FEATURES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} title={f.title} desc={f.desc} />
        
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center py-12 text-gray-500 text-xs tracking-wide">
        Made by © NextGen Devs
      </div>
    </div>
  );
};

export default HomePage;
