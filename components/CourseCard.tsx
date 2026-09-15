'use client'

import { Course } from '@/data/courses'

interface CourseCardProps {
  course: Course
  index: number
}

const levelMap: Record<string, string> = {
  Beginner: 'text-green-600 bg-green-50/10 border-green-600/30',
  Intermediate: 'text-blue-600 bg-blue-50/10 border-blue-600/30',
  Advanced: 'text-red-600 bg-red-50/10 border-red-600/30',
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const levelStyle = levelMap[course.level] || levelMap.Beginner

  return (
    <article className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-start md:items-center py-6 border-b border-border hover:bg-bg-subtle transition-all duration-300 ease-out px-4 -mx-4">
      {/* Index & Icon */}
      <div className="flex items-center gap-6 shrink-0">
        <span className="font-mono text-xl font-light text-text-muted">
          {String(index).padStart(2, '0')}
        </span>
        <div className="w-12 h-12 bg-bg-surface border border-border flex items-center justify-center text-xl shadow-sm">
          {course.icon}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-sans text-xl font-bold text-text-primary m-0 truncate">
            {course.title}
          </h3>
          <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border ${levelStyle}`}>
            {course.level}
          </span>
        </div>
        
        <p className="text-sm text-text-secondary line-clamp-2 max-w-3xl m-0">
          {course.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mt-1">
          {course.topics.slice(0, 4).map((topic) => (
            <span key={topic} className="font-mono text-[10px] text-text-muted bg-bg-surface border border-border px-1.5 py-0.5">
              {topic}
            </span>
          ))}
          {course.topics.length > 4 && (
            <span className="font-mono text-[10px] text-text-muted px-1.5 py-0.5">
              +{course.topics.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Metadata & Action */}
      <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 shrink-0">
        <div className="flex md:flex-col gap-4 md:gap-1 text-right">
          <span className="flex items-center gap-2 font-mono text-xs text-text-muted justify-end">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            {course.lessons} Modules
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-text-muted justify-end">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {course.duration}
          </span>
        </div>
        
        <button className="opacity-0 group-hover:opacity-100 font-mono text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wider transition-all -translate-x-2 group-hover:translate-x-0 hidden md:flex items-center gap-1">
          Open Syllabus →
        </button>
      </div>
    </article>
  )
}
