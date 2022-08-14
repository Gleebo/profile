import React from "react";

type Props = {
  id?: string;
  title: string,
  children?: React.ReactNode
}

export default function Section({id, title, children} : Props) {
  return (
    <section id={id}>
      <header className="bg-yellow-100 text-slate-800 rounded h-fit">
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-1">
          <span
            className="text-3xl border-r px-1 border-slate-800 mr-1
                  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {title.substring(0, 2)}
          </span>
          <span>{title.substring(2)}</span>
        </h1>
      </header>
      <main className="mt-1">
        {children}
      </main>
    </section>
  );
}
