const words = ["About Me", "Projects", "Contact"];
export default function Header() {
  return (
    <header className="sticky top-0 left-0 flex h-0 justify-end">
      <div className="h-fit rounded-bl-full bg-slate-700 pl-8 pr-4 pt-2 pb-5 text-right text-slate-50/20 shadow shadow-slate-700">
        {words.map((word) => (
          <div key={word} className="">
            <button className="hover:uppercase">{word}</button>
          </div>
        ))}
      </div>
    </header>
  );
}
