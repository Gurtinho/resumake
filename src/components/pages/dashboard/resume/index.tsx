'use client';

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import { InfosSidebar } from './infos-sidebar';
import { ResumeContent } from './resume-content';
import { StructureSidebar } from './structure-sidebar';
import { validatePhone } from '@/lib/phone';

const resumeSchema = z.object({
	content: z.object({
		image: z.object({
			url: z.string().url(),
			visible: z.boolean(),
		}),
		infos: z.object({
			fullName: z.string().min(1, 'O nome é obrigatório'),
			headLine: z.string(),
			email: z.string().email().min(1, 'O email é obrigatório'),
			website: z.string().url(),
			phone: z.string().refine(validatePhone, {
				message: 'O número de telefone é inválido',
			}),
			location: z.string().min(1, 'A localização é obrigatória'),
		}),
		summary: z.string().min(1, 'O sumário é obrigatório'),
		socialMedias: z.array(
			z
				.object({
					name: z.string().min(1, 'O nome é obrigatório'),
					username: z.string().min(1, 'O nome de usuário é obrigatório'),
					url: z.string().url(),
					icon: z.string(),
				})
				.partial()
		),
		experiences: z.array(
			z
				.object({
					company: z.string().min(1, 'A empresa é obrigatória'),
					position: z.string().min(1, 'A posição é obrigatória'),
					date: z.string().min(1, 'A data é obrigatória'),
					location: z.string().min(1, 'A localização é obrigatória'),
					website: z.string().url(),
					summary: z.string().min(1, 'O resumo é obrigatório'),
				})
				.partial()
		),
		educations: z.array(
			z
				.object({
					institution: z.string().min(1, 'A instituição é obrigatória'),
					degree: z.string().min(1, 'O grau é obrigatório'),
					location: z.string().min(1, 'A localização é obrigatória'),
					date: z.string().min(1, 'A data é obrigatória'),
					website: z.string().url(),
					summary: z.string().min(1, 'O resumo é obrigatório'),
				})
				.partial()
		),
		skills: z.array(
			z
				.object({
					name: z.string().min(1, 'O nome é obrigatório'),
					description: z.string().min(1, 'A descrição é obrigatória'),
					level: z.number().min(1, 'O nível é obrigatório'),
					keywords: z.string().min(1, 'As palavras-chave são obrigatórias'),
				})
				.partial()
		),
		languages: z.array(
			z
				.object({
					name: z.string().min(1, 'O nome é obrigatório'),
					description: z.string().min(1, 'A descrição é obrigatória'),
					level: z.number().min(1, 'O nível é obrigatório'),
				})
				.partial()
		),
		certifications: z.array(
			z
				.object({
					name: z.string().min(1, 'O nome é obrigatório'),
					institution: z.string().min(1, 'A instituição é obrigatória'),
					date: z.string().min(1, 'A data é obrigatória'),
					website: z.string().url(),
					summary: z.string().min(1, 'O resumo é obrigatório'),
				})
				.partial()
		),
		projects: z.array(
			z
				.object({
					name: z.string().min(1, 'O nome é obrigatório'),
					description: z.string().min(1, 'A descrição é obrigatória'),
					website: z.string().url(),
					date: z.string().min(1, 'A data é obrigatória'),
					summary: z.string().min(1, 'O resumo é obrigatório'),
					keywords: z.string().optional(),
				})
				.partial()
		),
	}),
	structure: z.object({
		template: z.enum(['onix', 'jynx', 'eevee', 'ditto']),
		colorTheme: z.string(),
		layout: z.object({
			mainSections: z.array(
				z.object({
					id: z.string().optional(),
					key: z.enum([
						'summary',
						'experiences',
						'educations',
						'skills',
						'languages',
						'certifications',
						'projects',
					]),
				})
			),
			sidebarSections: z.array(
				z.object({
					id: z.string().optional(),
					key: z.enum([	
						'languages',
						'skills',
					]),
				})
			),
		}),
		languages: z.enum([
			'portuguese',
			'english',
			'french',
			'german',
			'italian',
			'spanish',
		]),
	}),
});
export type ResumeSchemaProps = z.infer<typeof resumeSchema>;

export const ResumePage = () => {
	const defaultValues: ResumeSchemaProps = {
		content: {
			image: {
				url: '',
				visible: true,
			},
			infos: {
				fullName: '',
				headLine: '',
				email: '',
				website: '',
				phone: '',
				location: '',
			},
			summary: '',
			socialMedias: [],
			experiences: [],
			educations: [],
			skills: [],
			languages: [],
			certifications: [],
			projects: [],
		},
		structure: {
			template: 'ditto',
			colorTheme: 'blue',
			layout: {
				mainSections: [
					{
						key: 'summary',
					},
					{
						key: 'experiences',
					},
					{
						key: 'educations',
					},
					{
						key: 'skills',
					},
					{
						key: 'languages',
					},
					{
						key: 'certifications',
					},
					{
						key: 'projects',
					},
				],
				sidebarSections: [{ key: "languages" }, { key: "skills" }]
			},
			languages: 'portuguese',
		},
	};

	const methods = useForm<ResumeSchemaProps>({
		resolver: zodResolver(resumeSchema),
		defaultValues,
	});

	const onResumeSubmit = ({ content }: ResumeSchemaProps) => {
		// console.log(content);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onResumeSubmit)}>
				<main className="w-full h-screen overflow-hidden">
					<ResizablePanelGroup direction="horizontal" className="w-full h-full">
						<ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
							<InfosSidebar />
						</ResizablePanel>

						<ResizableHandle withHandle />

						<ResizablePanel>
							<ResumeContent />
						</ResizablePanel>

						<ResizableHandle withHandle />

						<ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
							<StructureSidebar />
						</ResizablePanel>
					</ResizablePanelGroup>
				</main>
			</form>
		</FormProvider>
	);
};
