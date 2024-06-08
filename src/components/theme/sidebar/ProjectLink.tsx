"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  children: React.ReactNode;
  name: string;
  setSelectedProject: (val: string | null) => void;
}

const ProjectLink = ({ children, name, setSelectedProject }: Props) => {
  const handleClick = () => {
    setSelectedProject(null);
    setTimeout(() => {
      setSelectedProject(name);
    }, 250);
  };
  return (
    <a
      href="#"
      onClick={handleClick}
      className="flex cursor-pointer place-items-center gap-3 rounded stroke-neutral-400 stroke-[0.75] p-1 text-neutral-400 transition-colors duration-100 hover:bg-neutral-700/30 hover:stroke-neutral-100 hover:text-neutral-100"
    >
      {children}
      <div className="flex w-full place-items-center justify-between text-clip">
        <p className="truncate whitespace-nowrap tracking-wide text-inherit">
          {name}
        </p>
        <ChevronRightIcon className="w-8 min-w-8 stroke-inherit stroke-[0.75]" />
      </div>
    </a>
  );
};

export default ProjectLink;
