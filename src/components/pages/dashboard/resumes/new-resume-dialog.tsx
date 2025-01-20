'use client';

import { BaseDialogProps, Dialog } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FieldWrapper } from '@/components/ui/field-wrapper';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NewResumeSchema = z.object({
	title: z
		.string()
		.min(1, 'O título é obrigatório')
		.max(255, 'O título deve ter no máximo 255 caracteres'),
});
type NewResumeSchemaProps = z.infer<typeof NewResumeSchema>;

export const NewResumeDialog = (props: BaseDialogProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewResumeSchemaProps>({
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
				<form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col'
        >

          <FieldWrapper label="Título" />
          <Input
            {...register('title')}
            className={cn(
              'border border-gray-300 focus:outline-none',
              errors.title && 'border-red-500'
            )}
          />

					{errors.title && (
						<span className="text-sm text-red-500">{errors.title.message}</span>
					)}

					<Button 
            type="submit"
            className='w-max mt-6 ml-auto'
          >
            Criar
          </Button>
				</form>
			}
		/>
	);
};
