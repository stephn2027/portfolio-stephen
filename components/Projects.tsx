'use client';

import { projectsData } from '@/lib/data';
import React, { useEffect } from 'react';
import Project from './Project';
import SectionHeading from './SectionHeading';
import { useActiveSectionContext } from '@/context/active-section-context';
import {useInView} from 'react-intersection-observer';

export default function Projects() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();
  
  useEffect(() => {
    if (inView) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);
  return  (
  
  <section ref={ref} id='projects' className='scroll-mt-28'>
    <SectionHeading>My Projects</SectionHeading>
    <div>
        {projectsData.map((project,index)=>(
            <React.Fragment key={index}>
                <Project {...project}/>
            </React.Fragment>
            
        )

        )}

    </div>

  </section>
  )
}
