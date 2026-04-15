import { useState } from "react";


const PAST_SPEAKERS = [
  {
    name: "John Doe",
    topic: "AI and the Future",
    year: "2024",
    image: "/images/john.jpg",
    highlights: [
      "Ex-Google AI Lead",
      "Published 20+ research papers",
      "TEDx Speaker"
    ],
    bio: "John focuses on practical AI systems and real-world deployment."
  },
  {
    name: "John Doe",
    topic: "AI and the Future",
    year: "2024",
    image: "/images/john.jpg",
    highlights: [
      "Ex-Google AI Lead",
      "Published 20+ research papers",
      "TEDx Speaker"
    ],
    bio: "John focuses on practical AI systems and real-world deployment."
  },
  {
    name: "John Doe",
    topic: "AI and the Future",
    year: "2024",
    image: "/images/john.jpg",
    highlights: [
      "Ex-Google AI Lead",
      "Published 20+ research papers",
      "TEDx Speaker"
    ],
    bio: "John focuses on practical AI systems and real-world deployment."
  },
  {
    name: "John Doe",
    topic: "AI and the Future",
    year: "2024",
    image: "/images/john.jpg",
    highlights: [
      "Ex-Google AI Lead",
      "Published 20+ research papers",
      "TEDx Speaker"
    ],
    bio: "John focuses on practical AI systems and real-world deployment."
  },
  {
    name: "John Doe",
    topic: "AI and the Future",
    year: "2024",
    image: "/images/john.jpg",
    highlights: [
      "Ex-Google AI Lead",
      "Published 20+ research papers",
      "TEDx Speaker"
    ],
    bio: "John focuses on practical AI systems and real-world deployment."
  },
 
];



// nav button styling helper
const navBtn = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "-40px",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
});