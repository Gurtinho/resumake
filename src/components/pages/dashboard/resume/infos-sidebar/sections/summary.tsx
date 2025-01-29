import { ScrollText } from 'lucide-react';
import { SectionTitle } from '../section-title';
import { useFormContext } from 'react-hook-form';
import { Editor } from '@/components/ui/editor';

export const SummarySection = () => {
	const {
		register,
		watch,
		setValue,
		formState: { errors },
	} = useFormContext();

	return (
		<div>
			<SectionTitle icon={ScrollText} title="Sobre Você" />

			<Editor
				{...register('content.summary')}
				value={watch('content.summary')}
				onChange={(value) => setValue('content.summary', value)}
				className="min-h-[200px] max-h-[300px] mt-4"
			/>

			{errors['content.summary'] && (
				<span className="text-sm text-red-500">
					{errors['content.summary']?.message?.toString()}
				</span>
			)}
		</div>
	);
};
