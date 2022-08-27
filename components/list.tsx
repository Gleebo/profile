export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-8 pr-2 text-base md:text-lg lg:text-xl xl:text-2xl space-y-2 max-w-[75ch]">
      {children}
    </ul>
  );
}
