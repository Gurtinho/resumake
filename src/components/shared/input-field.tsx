'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils';
import { FieldWrapper } from '../ui/field-wrapper';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';
import React, { useEffect } from 'react';

type InputFieldProps = {
	title: string;
	label: string;
	placeholder?: string;
	name?: string;
	containerClassName?: string;
	extraContent?: (value: string) => React.ReactNode;
};

export const InputField = ({
	title,
	label,
	placeholder,
	containerClassName,
	extraContent,
}: InputFieldProps) => {
	const {
		register,
		watch,
		formState: { errors },
	} = useFormContext();

	// detona o componente e remove erros
	useEffect(() => {
		return () => {
			errors[title] = undefined;
		};
	});

	return (
		<FieldWrapper
			title={title}
			label={label}
			className={containerClassName}
			errors={errors}
		>
			<Input
				{...register(title)}
				title={title}
				placeholder={placeholder}
				className={cn(
					'border border-gray-300',
					'focus-visible:ring-0',
					errors[title] && 'border-red-500'
				)}
			/>
			{extraContent && extraContent(watch(title))}
		</FieldWrapper>
	);
};
