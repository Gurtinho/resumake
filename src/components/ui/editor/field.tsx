'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { FieldWrapper } from "../field-wrapper";
import { Editor } from ".";

type EditorFieldProps = {
  title: string;
	label: string;
	name?: string;
	containerClassName?: string;
  required?: boolean;
};

export const EditorField = ({ title, label, containerClassName }: EditorFieldProps) => {
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
		}		
	});

	return (
		<FieldWrapper title={title} label={label} className={containerClassName} errors={errors}>
			<Editor
				{...register(title)}
        value={watch(title)}
        onChange={(value) => setValue(title, value)}
				className={cn(
					'border border-gray-300 focus-visible:ring-0',
					errors[title] && 'border-red-500'
				)}
			/>
		</FieldWrapper>
	)
}