import React from "react";

type Props = {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  children: React.ReactNode;
};

export default function Card({
  title,
  subtitle,
  location,
  period,
  children,
}: Props) {
  return (
    <div className="border rounded border-yellow-100 mb-8">
      <header className="text-slate-800 space-y-1">
        <h2 className="bg-yellow-100 p-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </h2>
        <h3 className="bg-yellow-100 p-1 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="border-r border-slate-800 mr-1 pr-1">
            {subtitle}
          </span>
          <span>{location}</span>
        </h3>
        <h4 className="bg-yellow-100 p-1 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {period}
        </h4>
      </header>
      <main className="py-3">{children}</main>
    </div>
  );
}
