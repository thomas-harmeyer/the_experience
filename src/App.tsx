import { useState, useEffect, createRef, useRef } from "react";
import Header from "./Header";
import Introduction from "./Introduction";

type TransitionState = "Introduction" | "Begin";
function App() {
  const [transitionState, setTransitionState] =
    useState<TransitionState>("Introduction");

  const container = useRef<null | HTMLDivElement>(null);
  const bottom = useRef<null | HTMLDivElement>(null);

  function handleScrollToBottom() {
    if (bottom.current) {
      bottom.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleIntroductionFinish() {}

  return (
    <div ref={container} className="scrollbar-hide">
      <Header />
      <Introduction
        handleFinish={handleIntroductionFinish}
        onDownArrowClick={handleScrollToBottom}
      />
      <div className="flex h-screen w-screen  flex-col bg-neutral-200">
        <div
          ref={bottom}
          className="p-3 text-center text-base font-light text-slate-700"
        >
          And thanks for stopping by.
        </div>
        <h2 className="container mx-auto max-w-prose text-lg text-slate-700">
          Let me tell you a little bit about myself
        </h2>
        <div className="p-2">
          I am a Junior at the University of Central Florida.
          <br />
          Currently I work at Voloridge Investment Management as a front-end
          React developer.
          <br />
          I have been on the varsity programming team at UCF and competed in
          ICPC contests. Which requires advanced knowledge of data structures
          and algorithms.
          <br />I love all parts of full stack development and try and never
          limit what I can achive. However, I do have a special knack for
          frontend design.
        </div>
      </div>
    </div>
  );
}

export default App;
