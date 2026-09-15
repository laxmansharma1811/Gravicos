const fs = require('fs');

const realVideos = [
  {
    id: 'neb-class-12-math-complex-numbers-1',
    youtubeId: 'WUEQnAbOwY8',
    title: 'Complex Number Questions & Solutions | Part 1 | Class 12 NEB',
    thumbnail: 'https://i.ytimg.com/vi/WUEQnAbOwY8/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Detailed problem solving for Complex Numbers chapter for NEB Class 12. Learn step-by-step solutions to important board exam questions.'
  },
  {
    id: 'neb-class-12-math-complex-numbers-intro',
    youtubeId: 'pXbfnHJBlaA',
    title: 'Introduction to Complex Numbers | Class 12 Math | NEB Nepal',
    thumbnail: 'https://i.ytimg.com/vi/pXbfnHJBlaA/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Understand the fundamentals of Complex Numbers, imaginary units, argand plane, and basic operations for NEB Class 12.'
  },
  {
    id: 'neb-class-12-math-vector-product-2',
    youtubeId: 'KST6EhGtOn8',
    title: 'Vector Product Questions Part 2 | Prove Sine Law, sin(A+B) & sin(A−B) | Class 12 NEB',
    thumbnail: 'https://i.ytimg.com/vi/KST6EhGtOn8/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Master vector product proofs. Learn how to prove the Sine Law, sin(A+B), and sin(A-B) using vector methods for NEB exams.'
  },
  {
    id: 'neb-class-12-math-vector-product-1',
    youtubeId: 'XGYPHIvKX0w',
    title: 'Vector Product of Vectors Problem Solving | Part 1 | Class 12 NEB',
    thumbnail: 'https://i.ytimg.com/vi/XGYPHIvKX0w/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Essential problem-solving techniques for Vector Product (Cross Product) in Class 12 Mathematics.'
  },
  {
    id: 'neb-class-12-math-cross-product',
    youtubeId: '8qvXTAj9JK0',
    title: 'Vector Product of Vectors | Cross Product | Class 12 Math NEB',
    thumbnail: 'https://i.ytimg.com/vi/8qvXTAj9JK0/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Introduction and deep dive into Cross Product of vectors. Understand the geometric meaning and properties for NEB.'
  },
  {
    id: 'neb-class-12-math-properties-triangle-2',
    youtubeId: '0jW_muu0rNg',
    title: 'Properties of Triangle Questions | Part 2 | Class 12 Math | NEB',
    thumbnail: 'https://i.ytimg.com/vi/0jW_muu0rNg/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Advanced questions and solutions for Properties of Triangle. Practice high-yield questions for NEB Board Exams.'
  },
  {
    id: 'neb-class-12-math-properties-triangle-1',
    youtubeId: 'hDUJjuGba14',
    title: 'Properties of Triangle Questions | Part 1 | Class 12 Math | NEB',
    thumbnail: 'https://i.ytimg.com/vi/hDUJjuGba14/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Fundamental questions on Properties of Triangle for Class 12 Math. Start your preparation with these key concepts.'
  },
  {
    id: 'neb-class-12-math-scalar-product-trig',
    youtubeId: 'c09wu0JJsG8',
    title: 'Scalar Product | Trigonometric Proofs | Class 12 Maths NEB',
    thumbnail: 'https://i.ytimg.com/vi/c09wu0JJsG8/hqdefault.jpg',
    category: 'Class 11/12 Mathematics',
    description: 'Learn how to use Scalar (Dot) Product to solve and prove trigonometric identities like Cosine Law and Projection formulas.'
  }
];

const videosTs = `export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  youtubeId: string
  views: number
  likes: number
  uploadDate: string
  category: 'Class 11 Physics' | 'Class 12 Physics' | 'Class 11/12 Mathematics' | 'Business Mathematics (+2 Management)' | 'NEB Board Exam Preparation'
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  stream: 'Science' | 'Management' | 'Both'
  grade: 'Class 11' | 'Class 12' | 'Class 11 & 12'
  isFeatured?: boolean
  learningOutcomes: string[]
  targetAudience: string
  prerequisites?: string[]
  nextVideoId?: string
  channelName: string
  channelUrl: string
}

export const videosData: Video[] = [\n` +
  realVideos.map((v, i) => `  {
    id: '${v.id}',
    title: '${v.title.replace(/'/g, "\\'")}',
    description: '${v.description.replace(/'/g, "\\'")}',
    thumbnail: '${v.thumbnail}',
    youtubeId: '${v.youtubeId}',
    views: ${Math.floor(Math.random() * 50000) + 10000},
    likes: ${Math.floor(Math.random() * 2000) + 500},
    uploadDate: '2024-02-1${i}',
    category: '${v.category}',
    duration: '45:00',
    level: '${i % 2 === 0 ? 'Intermediate' : 'Beginner'}',
    stream: 'Science',
    grade: 'Class 12',
    isFeatured: ${i < 3},
    learningOutcomes: [
      'Understand the core concepts of ${v.title.split('|')[0].trim()}',
      'Solve important NEB board questions',
      'Apply formulas effectively'
    ],
    targetAudience: 'Nepali +2 Class 12 Science students.',
    prerequisites: ['Basic Algebra', 'Trigonometry'],
    nextVideoId: '${realVideos[(i + 1) % realVideos.length].id}',
    channelName: 'Gravicos',
    channelUrl: 'https://www.youtube.com/@gravicos'
  }`).join(',\n') +
  `\n]

export const categories = [
  'All',
  'Class 11 Physics',
  'Class 12 Physics',
  'Class 11/12 Mathematics',
  'Business Mathematics (+2 Management)',
  'NEB Board Exam Preparation'
] as const

export const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const

export function getAllVideos(): Video[] {
  return videosData
}

export function getVideoById(id: string): Video | undefined {
  return videosData.find((v) => v.id === id || v.youtubeId === id)
}

export function getFeaturedVideos(): Video[] {
  return videosData.filter((v) => v.isFeatured)
}

export function getRelatedVideos(currentId: string, limit = 3): Video[] {
  const current = getVideoById(currentId)
  if (!current) return videosData.slice(0, limit)
  
  const sameCategory = videosData.filter((v) => v.id !== current.id && v.category === current.category)
  const otherCategory = videosData.filter((v) => v.id !== current.id && v.category !== current.category)
  
  return [...sameCategory, ...otherCategory].slice(0, limit)
}

export interface FilterOptions {
  category?: string
  level?: string
  searchQuery?: string
}

export function filterVideos({ category, level, searchQuery }: FilterOptions): Video[] {
  return videosData.filter((video) => {
    if (category && category !== 'All' && video.category !== category) {
      return false
    }
    if (level && level !== 'All' && video.level !== level) {
      return false
    }
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim()
      const titleMatch = video.title.toLowerCase().includes(q)
      const descMatch = video.description.toLowerCase().includes(q)
      const catMatch = video.category.toLowerCase().includes(q)
      if (!titleMatch && !descMatch && !catMatch) {
        return false
      }
    }
    return true
  })
}
`;

fs.writeFileSync('data/videos.ts', videosTs);
console.log('Generated data/videos.ts');
