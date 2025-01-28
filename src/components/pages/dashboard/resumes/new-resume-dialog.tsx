'use client';

import { BaseDialogProps, Dialog } from '@/components/ui/dialog';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { InputField } from '@/components/shared/input-field';

const NewResumeSchema = z.object({
	title: z
		.string()
		.min(1, 'O título é obrigatório')
		.max(255, 'O título deve ter no máximo 255 caracteres'),
});
type NewResumeSchemaProps = z.infer<typeof NewResumeSchema>;

export const NewResumeDialog = (props: BaseDialogProps) => {
	const methods = useForm<NewResumeSchemaProps>({
		resolver: zodResolver(NewResumeSchema),
	});

	const onSubmit = (data: NewResumeSchemaProps) => {
		console.log(data);
	};

	return (
		<Dialog
			{...props}
			title="Novo currículo"
			description="Escolha um título pra começar"
			content={
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col">
						<InputField label="Título" title="title" placeholder="Projetos..." />

						<Button type="submit" className="w-max mt-6 ml-auto">
							Criar
						</Button>
					</form>
				</FormProvider>
			}
		/>
	);
};
