import { AiOutlineClose } from "react-icons/ai";
import { useState, useMemo, ChangeEvent, FormEvent } from "react";
import sendEmail from "./useEmail";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPostSumbit, setShowPostSubmit] = useState(false);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendEmail(email, message);
    setEmail("");
    setMessage("");
    setShowPostSubmit(true);
  }

  return (
    <div className="container my-auto mx-auto max-w-md rounded-md bg-gray-400 p-4 shadow-md">
      {showPostSumbit && (
        <div className="m-1 flex items-center rounded-lg border-2 border-cyan-800 bg-cyan-400 p-2 text-slate-800">
          Thanks, I'll reach out to you soon!
          <div className="flex-grow" />
          <AiOutlineClose
            className="text-slate-900/50"
            onClick={() => setShowPostSubmit(false)}
          />
        </div>
      )}
      <div className="text-lg font-bold text-gray-900">Want to chat?</div>
      <div className="text-base font-thin text-gray-800">
        Leave your email and I would love to schedule a meeting soon!
      </div>
      <div className="p-1" />
      <div className="flex w-full">
        <form className="h-fit flex-grow" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleEmailChange}
            required
            type="email"
            className="w-full rounded-t-md border border-gray-200 px-3 py-2 shadow-none outline-none focus:border-violet-400"
            placeholder="your_email@coolcompany.com"
          />

          <hr className="border-gray-500" />
          <textarea
            value={message}
            onChange={handleMessageChange}
            className="block w-full rounded-b-md border border-gray-200 px-3 py-2 shadow-none outline-none focus:border-violet-400"
            placeholder="Optional message"
          />
          <button className="m-2 ml-auto block self-end rounded-full border-2 border-violet-200 bg-slate-700 py-2 px-4 text-violet-200 disabled:border-gray-200 disabled:bg-slate-300 disabled:text-slate-500">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
