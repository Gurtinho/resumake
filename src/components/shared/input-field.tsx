'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { FieldWrapper } from "../ui/field-wrapper";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type InputFieldProps = {
	title: string;
	label: string;
};

export const InputField = ({ title, label }: InputFieldProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<FieldWrapper label={label} />
			<Input
				{...register(title)}
				className={cn(
					'border border-gray-300 focus:outline-none',
					errors[title] && 'border-red-500'
				)}
			/>
			{errors[title] && (
				<span className="text-sm text-red-500">{errors[title]?.message?.toString()}</span>
			)}
		</>
	)
}