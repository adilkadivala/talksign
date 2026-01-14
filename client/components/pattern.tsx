interface PatternProps {
  length: number;
}

export const Pattern = ({ length }: PatternProps) => {
  const pattern = Array.from({ length });
  return (
    <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
      <div className="w-30 sm:w-35 md:w-40.5 -left-10 sm:-left-12.5 md:-left-14.5 -top-30 absolute flex flex-col justify-start items-start">
        {pattern.map((_, i) => (
          <div
            key={i}
            className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left outline-[0.5px] outline-primary/10 outline-offset-[-0.25px]"
          />
        ))}
      </div>
    </div>
  );
};

 
