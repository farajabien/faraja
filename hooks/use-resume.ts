import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { StateCreator } from 'zustand'

export type ResumeData = {
  personal: {
    fullName: string
    email: string
    phone: string
    address: string
    linkedIn?: string
    website?: string
  }
  summary: string
  experience: Array<{
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
  }>
  education: Array<{
    institution: string
    degree: string
    fieldOfStudy: string
    graduationDate: string
    gpa?: number
  }>
  skills: string[]
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    url?: string
  }>
  certifications: Array<{
    name: string
    issuer: string
    dateObtained: string
    expirationDate?: string
  }>
  awards: Array<{
    title: string
    issuer: string
    date: string
    description: string
  }>
  volunteer: Array<{
    organization: string
    role: string
    startDate: string
    endDate: string
    description: string
  }>
  languages: Array<{
    language: string
    proficiency: 'Basic' | 'Intermediate' | 'Fluent' | 'Native'
  }>
  publications: Array<{
    title: string
    authors: string[]
    publishedIn: string
    publicationDate: string
    url?: string
  }>
  references: Array<{
    name: string
    relationship: string
    company: string
    email: string
    phone: string
  }>
}

type ResumeState = {
  currentSection: number
  completedSections: string[]
  resumeData: ResumeData
  nextSection: () => void
  previousSection: () => void
  updateSection: (sectionId: string) => void
  saveResumeData: (data: Partial<ResumeData>) => void
  resetForm: () => void
}

const defaultResumeData: ResumeData = {
  personal: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
    website: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  awards: [],
  volunteer: [],
  languages: [],
  publications: [],
  references: [],
}

export const sections = [
	{ id: 'personal', title: 'Personal Information' },
	{ id: 'summary', title: 'Professional Summary' },
	{ id: 'experience', title: 'Work Experience' },
	{ id: 'education', title: 'Education' },
	{ id: 'skills', title: 'Skills & Competencies' },
	{ id: 'projects', title: 'Projects' },
	{ id: 'certifications', title: 'Certifications' },
	{ id: 'awards', title: 'Awards & Achievements' },
	{ id: 'volunteer', title: 'Volunteer Experience' },
	{ id: 'languages', title: 'Languages' },
	{ id: 'publications', title: 'Publications' },
	{ id: 'references', title: 'References' },
]

const resumeStore: StateCreator<ResumeState> = (set) => ({
  currentSection: 0,
  completedSections: [],
  resumeData: defaultResumeData,
  nextSection: () =>
    set((state) => {
      const newSection = state.currentSection + 1
      if (newSection >= sections.length) {
        return state // or handle completion
      }
      return {
        currentSection: newSection,
        completedSections: [
          ...state.completedSections,
          sections[state.currentSection].id,
        ],
      }
    }),
  previousSection: () =>
    set((state) => ({
      currentSection: Math.max(0, state.currentSection - 1),
    })),
  updateSection: (sectionId) =>
    set((state) => ({
      completedSections: state.completedSections.includes(sectionId)
        ? state.completedSections
        : [...state.completedSections, sectionId],
    })),
  saveResumeData: (data: Partial<ResumeData>) =>
    set((state) => ({ resumeData: { ...state.resumeData, ...data } })),
  resetForm: () =>
    set(() => ({
      currentSection: 0,
      completedSections: [],
      resumeData: defaultResumeData,
    })),
})

export const useResumeStore = create(
  persist(resumeStore, {
    name: 'resume-storage',
    storage: createJSONStorage(() => localStorage),
  })
)