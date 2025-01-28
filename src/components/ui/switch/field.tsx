/* eslint-disable @typescript-eslint/no-explicit-any */
import { Switch } from './index';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

type SwitchFieldProps = {
	name: string;
	className?: string;
};

export const SwitchField = ({ name, className }: SwitchFieldProps) => {
	const {
		register,
		watch,
		formState: { errors },
		setValue,
	} = useFormContext();

	const value = watch(name);

	// detona o componente e remove erros
	useEffect(() => {
		return () => {
			errors[name] = undefined;
		}
	}, [errors, name]);

	return (
		<>
			<Switch checked={value} onCheckedChange={checked => setValue(name, checked)} {...register(name)} className={className} />
			{errors[name] && (
				<span className="text-sm text-red-500">
					{errors[name]?.message?.toString()}
				</span>
			)}
		</>
	);
};
