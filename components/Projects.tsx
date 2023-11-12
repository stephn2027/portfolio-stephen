import { projectsData } from '@/lib/data';
import React from 'react';
import Project from './Project';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return  (
  
  <section>
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
