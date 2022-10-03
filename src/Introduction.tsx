import { AiOutlineDown } from "react-icons/ai";
import { useState, useEffect } from "react";
const words = "Hi, I'm Thomas";
type Props = {
  handleFinish(): void;
  onDownArrowClick(): void;
};
export default function Introduction({
  handleFinish,
  onDownArrowClick,
}: Props) {
  const [text, setText] = useState({ index: 0, done: false });
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    function handleBlick() {
      setBlink((blick) => !blick);
    }
    const interval = setInterval(handleBlick, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleSetText({ index, done }: { index: number; done: boolean }) {
      if (done || index === words.length) {
        return { index: words.length, done: true };
      }
      return { index: index + 1, done: false };
    }

    function handleTimeout() {
      setText(handleSetText);
    }

    if (!text.done) {
      const timeout = setTimeout(handleTimeout, 200);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  const innerText = words.substring(0, text.index);

  return (
    <div className="grid h-screen w-screen place-items-center bg-slate-700">
      <div />
      <div className="font-mono font-thin text-white">
        {innerText}
        {blink ||
        (innerText.length > 6 && innerText.length !== words.length) ? (
          "|"
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
      <button className="animate-bounce text-white">
        <AiOutlineDown onClick={onDownArrowClick} />
      </button>
    </div>
  );
}
