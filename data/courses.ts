export interface Course {
  id: string
  title: string
  description: string
  lessons: number
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  stream: 'Science' | 'Management' | 'Both'
  grade: 'Class 11' | 'Class 12' | 'Class 11 & 12'
  topics: string[]
  icon: string
}

export interface CourseLevel {
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  courses: Course[]
}

export const coursesData: CourseLevel[] = [
  {
    level: 'Beginner',
    description: 'Class 11 NEB Science & Management Core Foundations',
    courses: [
      {
        id: 'c11-phys',
        title: 'Class 11 Physics (NEB Complete Syllabus)',
        description: 'Kinematics, Newton\'s laws, Work-Energy, Friction, Gravitation, Heat & Thermodynamics for Class 11 Science.',
        lessons: 32,
        duration: '14 hours',
        level: 'Beginner',
        stream: 'Science',
        grade: 'Class 11',
        topics: ['Kinematics', 'Newton\'s Laws', 'Work & Energy', 'Friction', 'Gravitation', 'Thermodynamics'],
        icon: '🍎'
      },
      {
        id: 'c11-math',
        title: 'Class 11 Basic Mathematics (NEB)',
        description: 'Set theory, Real numbers, Quadratic equations, Trigonometry, Derivatives, and Coordinate geometry for Class 11.',
        lessons: 28,
        duration: '12 hours',
        level: 'Beginner',
        stream: 'Science',
        grade: 'Class 11',
        topics: ['Sets & Logic', 'Algebra', 'Trigonometry', 'Limits & Derivatives', 'Coordinate Geometry'],
        icon: '📐'
      },
      {
        id: 'c11-bmath',
        title: 'Class 11 Business Mathematics (+2 Management)',
        description: 'Ratio & Proportion, Percentage, Profit & Loss, Compound Interest, Matrices, and Algebra for Management students.',
        lessons: 24,
        duration: '10 hours',
        level: 'Beginner',
        stream: 'Management',
        grade: 'Class 11',
        topics: ['Arithmetic & Ratios', 'Compound Interest', 'Matrices Basics', 'Commercial Math', 'Equations'],
        icon: '💼'
      },
      {
        id: 'c11-vec',
        title: 'Vectors & Scalar Fields (+2 Science)',
        description: 'Vector addition, dot product, cross product, resolution of forces, and 3D coordinate vectors for NEB exams.',
        lessons: 18,
        duration: '7 hours',
        level: 'Beginner',
        stream: 'Science',
        grade: 'Class 11',
        topics: ['Vector Addition', 'Dot Product', 'Cross Product', 'Force Resolution', '3D Geometry'],
        icon: '↗️'
      },
    ]
  },
  {
    level: 'Intermediate',
    description: 'Class 12 NEB Science & Management Advanced Core',
    courses: [
      {
        id: 'c12-phys',
        title: 'Class 12 Physics (NEB Complete Syllabus)',
        description: 'Electrostatics, Current Electricity, Magnetism, Electromagnetic Induction, Optics, and Modern Physics.',
        lessons: 38,
        duration: '18 hours',
        level: 'Intermediate',
        stream: 'Science',
        grade: 'Class 12',
        topics: ['Electrostatics', 'Magnetism', 'EMI & AC', 'Wave Optics', 'Modern Physics', 'Nuclear Physics'],
        icon: '⚡'
      },
      {
        id: 'c12-math',
        title: 'Class 12 Mathematics (NEB Calculus & Algebra)',
        description: 'Indefinite & Definite Integrals, Differential Equations, Matrices, Complex Numbers, and 3D Geometry.',
        lessons: 36,
        duration: '16 hours',
        level: 'Intermediate',
        stream: 'Science',
        grade: 'Class 12',
        topics: ['Integration', 'Differential Equations', 'Matrices & Determinants', 'Complex Numbers', 'Probability'],
        icon: '∫'
      },
      {
        id: 'c12-bmath',
        title: 'Class 12 Business Mathematics (+2 Management)',
        description: 'Matrices, Determinants, Cramer\'s Rule, Linear Programming (LPP), Input-Output Analysis, and Statistics.',
        lessons: 26,
        duration: '11 hours',
        level: 'Intermediate',
        stream: 'Management',
        grade: 'Class 12',
        topics: ['Cramer\'s Rule', 'Matrix Inversion', 'Linear Programming', 'Input-Output Analysis', 'Statistics'],
        icon: '📊'
      },
      {
        id: 'c12-optics',
        title: 'Wave Optics & Geometrical Optics (NEB Class 12)',
        description: 'Huygens\' principle, Young\'s double slit experiment, interference, diffraction, polarization, and optical instruments.',
        lessons: 22,
        duration: '9 hours',
        level: 'Intermediate',
        stream: 'Science',
        grade: 'Class 12',
        topics: ['Huygens Theory', 'YDSE Interference', 'Diffraction Grating', 'Polarization', 'Prisms & Lenses'],
        icon: '🌊'
      },
    ]
  },
  {
    level: 'Advanced',
    description: 'NEB Board Examination Preparation & Past Question Practice',
    courses: [
      {
        id: 'neb-phys-revision',
        title: 'NEB Physics Board Exam Derivations & Numericals',
        description: 'High-probability derivations, formula cheat sheets, and numerical solution guide for Class 11 & 12 Physics.',
        lessons: 40,
        duration: '20 hours',
        level: 'Advanced',
        stream: 'Science',
        grade: 'Class 11 & 12',
        topics: ['Class 11 Derivations', 'Class 12 Derivations', 'Physics Numericals', 'Model Questions', 'Board Tips'],
        icon: '📝'
      },
      {
        id: 'neb-math-revision',
        title: 'NEB Mathematics Board Exam Model Question Solution',
        description: 'Step-by-step solution of NEB Class 11 & 12 Group A, Group B, and Group C Mathematics model questions.',
        lessons: 34,
        duration: '16 hours',
        level: 'Advanced',
        stream: 'Both',
        grade: 'Class 11 & 12',
        topics: ['Group A MCQs', 'Group B Short Questions', 'Group C Long Questions', 'Past Papers', 'Exam Strategy'],
        icon: '🎓'
      },
      {
        id: 'neb-mgmt-revision',
        title: 'NEB +2 Management Business Math & Stats Exam Guide',
        description: 'Complete revision of Business Mathematics, Cramer\'s Rule, LPP, and Financial Mathematics for NEB exams.',
        lessons: 28,
        duration: '12 hours',
        level: 'Advanced',
        stream: 'Management',
        grade: 'Class 11 & 12',
        topics: ['Business Math Revision', 'LPP Practice', 'Cramer\'s Rule Solutions', 'Statistical Measures'],
        icon: '🏆'
      },
      {
        id: 'neb-modern-phys',
        title: 'Modern Physics & Quantum Concepts (Class 12 NEB)',
        description: 'Photoelectric effect, Bohr\'s atomic model, X-rays, Radioactivity, and Semiconductor devices for NEB Class 12.',
        lessons: 30,
        duration: '14 hours',
        level: 'Advanced',
        stream: 'Science',
        grade: 'Class 12',
        topics: ['Photoelectric Effect', 'Bohr Model', 'Radioactivity', 'Semiconductors', 'Logic Gates'],
        icon: '⚛️'
      },
    ]
  },
]
