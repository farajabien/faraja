'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useResumeStore, sections, ResumeData } from '@/hooks/use-resume'
import { ScrollArea } from '@/components/ui/scroll-area'

const formSchemas = {
	personal: z.object({
		fullName: z.string().min(2, {
			message: 'Full name must be at least 2 characters.',
		}),
		email: z.string().email({
			message: 'Please enter a valid email address.',
		}),
		phone: z.string().min(10, {
			message: 'Please enter a valid phone number.',
		}),
		address: z.string().min(5, {
			message: 'Please enter a valid address.',
		}),
		linkedIn: z.string().url().optional(),
		website: z.string().url().optional(),
	}),
	summary: z.object({
		summary: z.string().min(10, {
			message: 'Summary must be at least 10 characters.',
		}),
	}),
	experience: z.object({
		company: z.string().min(2, {
			message: 'Company name must be at least 2 characters.',
		}),
		position: z.string().min(2, {
			message: 'Position must be at least 2 characters.',
		}),
		startDate: z.string().min(4, {
			message: 'Start date must be at least 4 characters.',
		}),
		endDate: z.string().min(4, {
			message: 'End date must be at least 4 characters.',
		}),
		description: z.string().min(10, {
			message: 'Description must be at least 10 characters.',
		}),
	}),
	education: z.object({
		institution: z.string().min(2, {
			message: 'Institution name must be at least 2 characters.',
		}),
		degree: z.string().min(2, {
			message: 'Degree must be at least 2 characters.',
		}),
		fieldOfStudy: z.string().min(2, {
			message: 'Field of study must be at least 2 characters.',
		}),
		graduationDate: z.string().min(4, {
			message: 'Graduation date must be at least 4 characters.',
		}),
		gpa: z.string().optional(),
	}),
	skills: z.object({
		skills: z.string().min(1, {
			message: 'Skills must be at least 1 character.',
		}),
	}),
	projects: z.object({
		name: z.string().min(2, {
			message: 'Project name must be at least 2 characters.',
		}),
		description: z.string().min(10, {
			message: 'Description must be at least 10 characters.',
		}),
		technologies: z.object({
			technologies: z.string().min(1, {
				message: 'technologies must be at least 1 character.',
			}),
		}),
		url: z.string().url().optional(),
	}),
	certifications: z.object({
		name: z.string().min(2, {
			message: 'Certification name must be at least 2 characters.',
		}),
		issuer: z.string().min(2, {
			message: 'Issuer must be at least 2 characters.',
		}),
		dateObtained: z.string().min(4, {
			message: 'Date obtained must be at least 4 characters.',
		}),
		expirationDate: z.string().min(4).optional(),
	}),
	awards: z.object({
		title: z.string().min(2, {
			message: 'Award title must be at least 2 characters.',
		}),
		issuer: z.string().min(2, {
			message: 'Issuer must be at least 2 characters.',
		}),
		date: z.string().min(4, {
			message: 'Date must be at least 4 characters.',
		}),
		description: z.string().min(10, {
			message: 'Description must be at least 10 characters.',
		}),
	}),
	volunteer: z.object({
		organization: z.string().min(2, {
			message: 'Organization name must be at least 2 characters.',
		}),
		role: z.string().min(2, {
			message: 'Role must be at least 2 characters.',
		}),
		startDate: z.string().min(4, {
			message: 'Start date must be at least 4 characters.',
		}),
		endDate: z.string().min(4, {
			message: 'End date must be at least 4 characters.',
		}),
		description: z.string().min(10, {
			message: 'Description must be at least 10 characters.',
		}),
	}),
	languages: z.object({
		language: z.string().min(2, {
			message: 'Language must be at least 2 characters.',
		}),
		proficiency: z.enum(['Basic', 'Intermediate', 'Fluent', 'Native']),
	}),
	publications: z.object({
		title: z.string().min(2, {
			message: 'Title must be at least 2 characters.',
		}),
		authors: z.array(
			z.string().min(2, {
				message: 'Author name must be at least 2 characters.',
			})
		),
		publishedIn: z.string().min(2, {
			message: 'Published in must be at least 2 characters.',
		}),
		publicationDate: z.string().min(4, {
			message: 'Publication date must be at least 4 characters.',
		}),
		url: z.string().url().optional(),
	}),
	references: z.object({
		name: z.string().min(2, {
			message: 'Name must be at least 2 characters.',
		}),
		relationship: z.string().min(2, {
			message: 'Relationship must be at least 2 characters.',
		}),
		company: z.string().min(2, {
			message: 'Company must be at least 2 characters.',
		}),
		email: z.string().email({
			message: 'Please enter a valid email address.',
		}),
		phone: z.string().min(10, {
			message: 'Please enter a valid phone number.',
		}),
	}),
}

// Define the allowed field names
type FieldName = {
	[K in SectionId]: keyof z.infer<(typeof formSchemas)[K]>
}[SectionId]

// Define a type for the keys of formSchemas
type SectionId = keyof typeof formSchemas

export default function ResumeFormFields() {
	const {
		currentSection,
		resumeData,
		saveResumeData,
		nextSection,
		updateSection,
		previousSection,
	} = useResumeStore()
	const section = sections[currentSection]

	const formSchema = formSchemas[section.id]
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...resumeData[section.id as keyof ResumeData],
			...(section.id === 'skills'
				? {
						skills: Array.isArray(resumeData.skills)
							? resumeData.skills.join(', ')
							: '',
				  }
				: {}),
			...(section.id === 'projects'
				? {
						technologies: Array.isArray(resumeData.technologies)
							? resumeData.technologies.join(', ')
							: '',
				  }
				: {}),
		} as any,
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		const formattedValues = {
			...values,
			...(section.id === 'skills' && {
				skills: values.skills.split(',').map((skill) => skill.trim()),
			}),
			...(section.id === 'projects' && {
				technologies: values.technologies
					.split(',')
					.map((technology) => technology.trim()),
			}),
		}
		saveResumeData({ [section.id as keyof ResumeData]: formattedValues })
		updateSection(section.id)
		nextSection()
	}

	const previousSectionHandler = () => {
		updateSection(section.id)
		previousSection()
	}

	return (
		<div className='h-[calc(100vh-4rem)] flex flex-col'>
			<h2 className='text-2xl font-bold mb-4'>{section.title}</h2>
			<ScrollArea className='flex-grow pr-4'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
						{Object.keys(formSchema.shape).map((fieldName) => (
							<FormField
								key={fieldName}
								control={form.control}
								name={fieldName as FieldName}
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
										</FormLabel>
										<FormControl>
											{fieldName === 'description' ||
											fieldName === 'summary' ? (
												<Textarea
													placeholder={`Enter your ${fieldName}`}
													{...field}
												/>
											) : (
												<Input
													placeholder={`Enter your ${fieldName}`}
													{...(fieldName === 'gpa'
														? { valueAsNumber: true }
														: {})}
													{...field}
												/>
											)}
										</FormControl>
										<FormDescription>
											{`Enter your ${fieldName} as you'd like it to appear on your resume.`}
											{fieldName === 'skills' && (
												<p>Enter your skills separated by commas.</p>
											)}
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						))}
					</form>
				</Form>
			</ScrollArea>
			<div className='mt-6 flex justify-between'>
				<Button type='button' onClick={() => previousSectionHandler()}>
					Previous
				</Button>
				<Button type='submit' onClick={form.handleSubmit(onSubmit)}>
					Save and Continue
				</Button>
			</div>
		</div>
	)
}
