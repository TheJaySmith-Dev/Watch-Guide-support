import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Search, ListPlus, HelpCircle, ArrowRight, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Discover, track, and watch—<span className="text-blue-600">faster.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Welcome to the WatchGuide Support Center. Find tutorials, troubleshooting tips, and deep dives into features to help you get the most out of your movie & TV tracker.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link to="/features" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
               Explore Features
             </Link>
             <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all">
               Contact Support
             </Link>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-12">App Preview</h2>
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x px-4 justify-start md:justify-center scrollbar-hide">
            {[
              { src: "https://i.ibb.co/Q3Gy7gBq/i-Phone-App-Store-Preview-Home.png", alt: "Home" },
              { src: "https://i.ibb.co/WW13qGv9/i-Phone-App-Store-Preview-Search.png", alt: "Search" },
              { src: "https://i.ibb.co/tpwm0ZXQ/i-Phone-App-Store-Preview-Lists.png", alt: "Lists" },
              { src: "https://i.ibb.co/RpGV2RDv/i-Phone-App-Store-Preview-AI.png", alt: "AI Discovery" },
              { src: "https://i.ibb.co/4nRj248v/i-Phone-App-Store-Preview-AI-2.png", alt: "Settings" }
            ].map((img, i) => (
              <div key={i} className="snap-center shrink-0 first:pl-4 last:pr-4">
                <div className="relative group">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="h-[400px] w-auto rounded-[2rem] shadow-xl border-[6px] border-slate-900 transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <p className="mt-4 font-medium text-slate-600">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8 text-center">Common Tasks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Find where to watch', icon: Search, to: '/how-to' },
              { label: 'View trailers', icon: PlayCircle, to: '/features' },
              { label: 'Save to my list', icon: ListPlus, to: '/features' },
              { label: 'Fix a problem', icon: HelpCircle, to: '/troubleshooting' },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group text-center h-full">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-medium text-slate-800">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
             <div className="mb-6 md:mb-0">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Features</h2>
               <p className="text-slate-600 max-w-md">Detailed guides on how to utilize the power of WatchGuide's data integrations.</p>
             </div>
             <Link to="/features" className="group flex items-center text-blue-600 font-semibold hover:text-blue-700">
               View all features <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Rich Media Details", desc: "Comprehensive data from TMDb including cast, crew, budget, and revenue.", color: "bg-purple-100 text-purple-600" },
               { title: "Inline Trailers", desc: "Watch YouTube trailers instantly without leaving the app interface.", color: "bg-red-100 text-red-600" },
               { title: "Smart Recommendations", desc: "Discover similar titles based on genres, cast, and your watchlist.", color: "bg-green-100 text-green-600" }
             ].map((f, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                 <div className={`w-12 h-12 ${f.color} rounded-lg flex items-center justify-center mb-6`}>
                   <Zap className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{f.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;