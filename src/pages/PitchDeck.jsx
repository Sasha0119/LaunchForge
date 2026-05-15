import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronRight, ChevronLeft, Send, BarChart, Globe, Info } from 'lucide-react';
import './PitchDeck.css';

const SlideContent = ({ slide }) => (
  <motion.div 
    className="slide-canvas glass-card"
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -50, opacity: 0 }}
  >
    <div className="slide-tag">{slide.id} / 5</div>
    <h2>{slide.title}</h2>
    <div className="slide-body">
      {slide.content.map((point, i) => (
        <div key={i} className="slide-point">
          <div className="bullet"></div>
          <p>{point}</p>
        </div>
      ))}
    </div>
    {slide.visual && (
      <div className="slide-visual">
        <div className="visual-box">
          {slide.visual === 'chart' && <BarChart size={64} color="var(--acc-primary)" opacity={0.3} />}
          {slide.visual === 'globe' && <Globe size={64} color="var(--acc-secondary)" opacity={0.3} />}
          <p>AI Generated Visual Asset Pending</p>
        </div>
      </div>
    )}
  </motion.div>
);

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "01",
      title: "The Problem",
      content: [
        "Inaccurate data leads to $2.1M loss annually.",
        "Existing solutions are too slow for today's market.",
        "Founder fatigue is at an all-time high."
      ],
      visual: "globe"
    },
    {
      id: "02",
      title: "The Solution",
      content: [
        "AI-Powered prediction engines.",
        "Real-time data synchronization.",
        "Seamless integration with existing tools."
      ],
      visual: "chart"
    },
    {
      id: "03",
      title: "Market Opportunity",
      content: [
        "$15B Total Addressable Market (TAM).",
        "25% annual growth rate in the sector.",
        "Lack of dominant competitors."
      ],
      visual: "globe"
    }
  ];

  return (
    <div className="pitch-container">
      <div className="page-header">
        <div>
          <h1 className="gradient-text">Pitch Deck Architect</h1>
          <p className="subtitle">From initial spark to investor ready.</p>
        </div>
        <div className="header-btns">
            <button className="text-btn">Preview Mode</button>
            <button className="btn-primary">
                <Send size={18} />
                Send to Investors
            </button>
        </div>
      </div>

      <div className="pitch-layout">
        <SlideContent slide={slides[currentSlide]} />
        
        <div className="pitch-controls">
            <div className="control-card glass-card">
                <h3>Slide Navigator</h3>
                <div className="slide-thumbs">
                    {slides.map((s, i) => (
                        <div 
                            key={i} 
                            className={`thumb ${i === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(i)}
                        >
                            <span className="num">{s.id}</span>
                            <span className="label">{s.title}</span>
                        </div>
                    ))}
                </div>
                <div className="nav-btns">
                    <button 
                        onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                        disabled={currentSlide === 0}
                    >
                        <ChevronLeft />
                    </button>
                    <button 
                         onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
                         disabled={currentSlide === slides.length - 1}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <div className="control-card glass-card">
                <div className="label-with-icon">
                    <Info size={14} />
                    <span>AI Suggestions</span>
                </div>
                <p className="ai-tip">"Your Market Opportunity slide could benefit from mentioning recent regulatory changes in the EU."</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
