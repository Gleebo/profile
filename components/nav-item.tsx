type Props = {
  number: number;
  symbol: string;
  name: string;
};

export default function NavItem(props: Props) {
  return (
    <li
      className="grid grid-rows-[25%_50%_25%]
           border-yellow-100 border rounded p-[0.125rem] w-[4.5rem] h-[4.5rem] group
           hover:bg-yellow-100 hover:text-slate-800 hover:cursor-pointer 
           focus:ring-1 focus:ring-yellow-200
           md:p-1 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
    >
      <span className="text-xs place-self-start xl:text-sm">{props.number}</span>
      <span className="text-2xl place-self-center group-hover:underline md:text-3xl lg:text-4xl xl:text-5xl">
        {props.symbol}
      </span>
      <span className="text-xs place-self-end xl:text-sm">{props.name}</span>
    </li>
  );
}
