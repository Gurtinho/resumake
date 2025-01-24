'use client'

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';

import { InfosSidebar } from './infos-sidebar';
import { ResumeContent } from './resume-content';
import { StructureSidebar } from './structure-sidebar';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

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
			phone: z.string(),
			location: z.string().min(1, 'A localização é obrigatória'),
		}),
	}),
	// structure: z.object({})
});
type ResumeSchemaProps = z.infer<typeof resumeSchema>;

export const ResumePage = () => {
	const methods = useForm<ResumeSchemaProps>({
		resolver: zodResolver(resumeSchema),
	});

	const onResumeSubmit = ({ content }: ResumeSchemaProps) => {
		console.log(content);
	}

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
