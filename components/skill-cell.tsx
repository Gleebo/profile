import Image from "next/image";

type Props = {
  number: number;
  imgSrc: string;
  name: string;
};

export default function SkillCell({ number, imgSrc, name }: Props) {
  return (
    <li
      className="grid grid-rows-[15%_70%_15%] bg-yellow-100 w-28 h-28
       border-slate-800 border-r border-b p-0.5 text-xs
       sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 lg:text-sm
       xl:w-44 xl:h-44 xl:text-base"
    >
      <span className="flex items-center justify-start text-left">
        {number}
      </span>
      <span className="relative">
        <Image src={imgSrc} alt={name} layout="fill" priority={number === 1} />
      </span>
      <span className="flex items-center justify-end">{name}</span>
    </li>
  );
}
