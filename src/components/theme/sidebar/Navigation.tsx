'use client';

import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

import NavigationLink from './NavigationLink';
import ProjectLink from './ProjectLink';
import ProjectNavigation from './ProjectNavigation';

const containerVariants = {
  close: {
    width: '5rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start('open');
      svgControls.start('open');
    } else {
      containerControls.start('close');
      svgControls.start('close');
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="absolute right-0 top-0 z-10 flex h-full flex-col gap-20 bg-neutral-900 p-5 shadow shadow-neutral-600"
      >
        <div className="flex w-full flex-row place-items-center justify-between">
          <div className="size-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-700" />
          <button
            className="flex rounded-full p-1"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <NavigationLink name="Dashboard">
            <ChartBarIcon className="w-8 min-w-8 stroke-inherit stroke-[0.75]" />
          </NavigationLink>
          <NavigationLink name="Projects">
            <Square2StackIcon className="w-8 min-w-8 stroke-inherit stroke-[0.75]" />
          </NavigationLink>
          <NavigationLink name="Tasks">
            <DocumentCheckIcon className="w-8 min-w-8 stroke-inherit stroke-[0.75]" />
          </NavigationLink>
          <NavigationLink name="Reporting">
            <ChartPieIcon className="w-8 min-w-8 stroke-inherit stroke-[0.75]" />
          </NavigationLink>
          <NavigationLink name="Users">
            <UsersIcon className="w-8 min-w-8 stroke-inherit stroke-[0.75]" />
          </NavigationLink>
        </div>
        <div className="flex flex-col gap-3">
          <ProjectLink
            name="Virtual Reality"
            setSelectedProject={setSelectedProject}
          >
            <div className="mx-2 aspect-square min-w-4 rounded-full border border-pink-600 bg-pink-700" />
          </ProjectLink>
          <ProjectLink
            name="Apple Vision Pro"
            setSelectedProject={setSelectedProject}
          >
            <div className="mx-2 aspect-square min-w-4 rounded-full border border-indigo-600 bg-indigo-700" />
          </ProjectLink>
          <ProjectLink name="Porsche" setSelectedProject={setSelectedProject}>
            <div className="mx-2 aspect-square min-w-4 rounded-full border border-cyan-600 bg-cyan-700" />
          </ProjectLink>
          <ProjectLink
            name="Secret Project"
            setSelectedProject={setSelectedProject}
          >
            <div className="mx-2 aspect-square min-w-4 rounded-full border border-yellow-600 bg-yellow-700" />
          </ProjectLink>
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectNavigation
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            isOpen={isOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
