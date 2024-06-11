import { ReactNode } from 'react';

interface Task {
  name: string;
  details: (string | ReactNode)[];
}

interface Experience {
  company: string;
  duration: string;
  tasks: Task[];
}

export function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="flex flex-col break-keep divide-y-2 divide-slate-400/25">
      {experiences.map((experience) => (
        <section
          key={experience.company}
          className="grid grid-cols-2 gap-4 pt-8"
        >
          <div>
            <h3 className="!mt-0">{experience.company}</h3>
            <p>{experience.duration}</p>
          </div>
          <div>
            {experience.tasks.map((task, i) => (
              <div key={i}>
                <strong>{task.name}</strong>
                <ul>
                  {task.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
