'use client';

import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { IconInput } from '.';
import { cn } from '@/lib/utils';
import { FieldWrapper } from '../field-wrapper';

type IconFieldProps = {
	title: string;
	label: string;
	name?: string;
	containerClassName?: string;
	required?: boolean;
	placeholder?: string;
};

export const IconField = ({ title, label, containerClassName, placeholder }: IconFieldProps) => {
	const {
		register,
		watch,
		setValue,
		formState: { errors },
	} = useFormContext();

	// detona o componente e remove erros
	useEffect(() => {
		return () => {
			errors[title] = undefined;
		};
	});

	return (
		<FieldWrapper title={title} label={label} errors={errors} className={containerClassName}>
			<IconInput
				{...register(title)}
				value={watch(title)}
				onChange={(value) => setValue(title, value)}
				className={cn(containerClassName, errors[title] && 'border-red-500')}
				placeholder={placeholder}
			/> 
		</FieldWrapper>
	);
};
