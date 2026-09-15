'use client'

import { categories, levels } from '@/data/videos'

interface VideoFiltersProps {
  selectedCategory: string
  onSelectCategory: (cat: string) => void
  selectedLevel: string
  onSelectLevel: (lvl: string) => void
  searchQuery: string
  onSearchChange: (q: string) => void
  totalResults: number
  onReset?: () => void
}

export default function VideoFilters({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  searchQuery,
  onSearchChange,
  totalResults,
  onReset,
}: VideoFiltersProps) {
  const hasActiveFilters =
    selectedCategory !== 'All' || selectedLevel !== 'All' || searchQuery.trim() !== ''

  return (
    <div className="flex flex-col gap-6 mb-10">
      {/* Top Controls Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative flex-1 w-full max-w-md">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-bg-surface border border-border text-text-primary text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Level Selector */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="level-select" className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">
            Level
          </label>
          <select
            id="level-select"
            value={selectedLevel}
            onChange={(e) => onSelectLevel(e.target.value)}
            className="w-full sm:w-auto py-2.5 pl-3 pr-8 bg-bg-surface border border-border text-text-primary text-sm font-sans font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl === 'All' ? 'All Levels' : lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors border ${
                isSelected 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-bg-surface text-text-secondary border-border hover:border-text-primary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Active Filter Bar & Summary */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-mono text-xs text-text-muted">
          Showing <strong className="text-text-primary">{totalResults}</strong> result{totalResults !== 1 ? 's' : ''}
        </span>
        {hasActiveFilters && onReset && (
          <button
            onClick={onReset}
            className="font-mono text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wider"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  )
}
