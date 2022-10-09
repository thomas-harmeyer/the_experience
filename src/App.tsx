import { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./Introduction";
import tempImage from "./assets/temp.jpg";
import Contact from "./Contact";
import UCFLogo from "./assets/ucf.jpg";
import icpcLogo from "./assets/icpc.png";
import workLogo from "./assets/work.svg";
import reactLogo from "./assets/react.png";

type TransitionState = "Introduction" | "Begin";

const details: CardProps[] = [
  {
    description: "I am a Junior at the University of Central Florida.",
    imgSrc: UCFLogo,
    title: "Education",
  },
  {
    description:
      "Currently I work at Voloridge Investment Management as a front-end React developer.",
    imgSrc: workLogo,
    title: "Work",
  },
  {
    imgSrc: icpcLogo,
    title: "Competitive Programming",
    description:
      "I have been on the varsity programming team at UCF and competed in ICPC contests. Which requires advanced knowledge of data structures and algorithms.",
  },
  {
    title: "Development",
    imgSrc: reactLogo,
    description:
      "I love all parts of full stack development and try and never limit what I can achive. However, I do have a special knack for frontend design.",
  },
];

type CardProps = { imgSrc: string; title: string; description: string };
function Card(props: CardProps) {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded shadow-md">
      <img src={props.imgSrc || tempImage} className="w-full bg-slate-500" />
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-700">{props.title}</h2>
        <p className="text-base text-gray-900">{props.description}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [transitionState, setTransitionState] =
    useState<TransitionState>("Introduction");

  const container = useRef<null | HTMLDivElement>(null);
  const bottom = useRef<null | HTMLDivElement>(null);

  function handleScrollToBottom() {
    if (bottom.current) {
      bottom.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleIntroductionFinish() { }

  return (
    <div ref={container} className="scrollbar-hide">
      <Header />
      <Introduction
        handleFinish={handleIntroductionFinish}
        onDownArrowClick={handleScrollToBottom}
      />
      <div className="flex min-h-screen w-screen  flex-col bg-neutral-200">
        <div
          ref={bottom}
          className="p-3 text-center text-base font-light text-slate-700"
        >
          <div>And thanks for stopping by.</div>
          <div className="font-sans text-lg font-medium">
            Let me introduce myself.
          </div>
        </div>
        <div className="py-4" />
        <div className="container mx-auto flex flex-wrap gap-4 lg:grid lg:grid-cols-4 ">
          {details.map((detail) => (
            <Card key={detail.title} {...detail} />
          ))}
        </div>
        <div className="py-3" />

        <Contact />
        <Footer />
      </div>
    </div>
  );
}
