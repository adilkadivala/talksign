export const BentoCard = ({ title, desc, children }: any) => (
  <div className="group flex flex-col gap-4 border-primary/5 border overflow-hidden">
    <div className="p-4 md:p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-primary text-lg sm:text-xl font-semibold">
          {title}
        </h3>
        <p className="text-primary/65 dark:text-secondary/65 text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </div>

    <div className="relative pl-7 w-full h-30 md:h-37.5 lg:h-87.5 flex items-end justify-end">
      <div className="absolute left-10 h-37.5 md:h-50 -rotate-3 lg:h-100 -right-20 -bottom-10 group-hover:shadow-2xl group-hover:left-8 group-hover:h-102.5 group-hover:rotate-0 transition-all delay-300">
        {children}
      </div>
    </div>
  </div>
);
