import React from "react";

type Props = {
  id?: string;
  title: string,
  children?: React.ReactNode
}

export default function Section({id, title, children} : Props) {
  return (
    <section id={id} className="mb-12 [&:last-child]:mb-0 scroll-mt-40">
      <header className="bg-yellow-100 text-slate-800 h-fit rounded-lg">
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
      <main className="min-h-[50vh] pt-8 pb-2 px-2 md:px-4 border-yellow-100">
        {children}
      </main>
    </section>
  );
}
