/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from './index';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { FieldWrapper } from '../field-wrapper';

type SliderFieldProps = {
	label: string;
	name: string;
	containerClassName?: string;
};

export const SliderField = ({
	name,
	label,
	containerClassName,
}: SliderFieldProps) => {
	const {
		register,
		watch,
		formState: { errors },
		setValue,
	} = useFormContext();

	const value = watch(name);
	const level = watch('level');

	// detona o componente e remove erros
	useEffect(() => {
		if (level === undefined) {
			setValue('level', 0);
		}
		return () => {
			errors[name] = undefined;
		};
	}, [errors, name, level, setValue]);

	return (
		<FieldWrapper title={name} label={label} errors={errors} className={containerClassName}>
			<div className="flex items-center gap-4">
				<Slider
					{...register(name)}
					defaultValue={[1]}
					min={0}
					max={5}
					value={[Number(value)]}
          onValueChange={(value) => {
						setValue(name, Number(value[0]))
					}}
				/>

				<p className="font-bold">{value == 0 ? 'Oculto' : value}</p>

				{errors[name] && (
					<span className="text-sm text-red-500">
						{errors[name]?.message?.toString()}
					</span>
				)}
			</div>
		</FieldWrapper>
	);
};
