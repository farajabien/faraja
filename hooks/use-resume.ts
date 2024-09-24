import { sections } from '@/app/resume-builder/_components/ResumeForm'
import { create } from 'zustand'

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
	updateSection: (sectionId: string) => void
	saveResumeData: (data: Partial<ResumeData>) => void
}

export const useResumeStore = create<ResumeState>((set) => ({
	currentSection: 0,
	completedSections: [],
	resumeData: {} as ResumeData,
	saveResumeData: (data: Partial<ResumeData>) =>
		set((state) => ({ resumeData: { ...state.resumeData, ...data } })),

	nextSection: () =>
		set((state) => {
			const newSection = state.currentSection + 1
			return {
				currentSection: newSection,
				completedSections: [
					...state.completedSections,
					sections[state.currentSection].id,
				],
			}
		}),
	updateSection: (sectionId) =>
		set((state) => ({
			completedSections: state.completedSections.includes(sectionId)
				? state.completedSections
				: [...state.completedSections, sectionId],
		})),
}))
