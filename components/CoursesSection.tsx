'use client'

import { coursesData } from '@/data/courses'
import CourseCard from './CourseCard'

const levelIcons: Record<string, React.ReactNode> = {
  Beginner: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  Intermediate: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  Advanced: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
}

export default function CoursesSection() {
  return (
    <section aria-label="Curriculum Syllabus" className="bg-bg-surface border-t border-border">
      <div className="container-page py-20 md:py-32 max-w-5xl">
        
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs font-semibold tracking-wide text-accent uppercase mb-4 block">
            [ Course Architecture ]
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-6">
            Curriculum Syllabus
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl border-l-2 border-border pl-4">
            Structured learning paths designed for progressive comprehension. Each module strictly builds upon the prerequisites of the last, avoiding leaps of logic.
          </p>
        </div>

        {/* Levels / Syllabus Lists */}
        <div className="flex flex-col gap-20">
          {coursesData.map((level) => (
            <div key={level.level} className="relative">
              
              {/* Vertical line connector (desktop only) */}
              <div className="hidden md:block absolute left-6 top-16 bottom-0 w-px bg-border -z-10" />

              {/* Level header */}
              <div className="flex items-center gap-6 mb-8 bg-bg-surface">
                <div className="w-12 h-12 bg-bg-inset border border-border flex items-center justify-center text-text-primary shrink-0">
                  {levelIcons[level.level]}
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-text-primary tracking-tight">
                    Phase: {level.level}
                  </h3>
                  <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-wider">
                    {level.description}
                  </p>
                </div>
              </div>

              {/* Course List (Syllabus format) */}
              <div className="flex flex-col border-t border-border mt-4">
                {level.courses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index + 1} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
