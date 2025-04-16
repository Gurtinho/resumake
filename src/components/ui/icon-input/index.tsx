/* eslint-disable @next/next/no-img-element */
import { useDebounce } from '@/hooks/use-debounce';
import { Input } from '../input';
import { cn } from '@/lib/utils';

type IconInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
};

export const IconInput = ({
	value,
	onChange,
	placeholder,
	className,
}: IconInputProps) => {
	const debouncedValue = useDebounce(value);

	return (
		<div className='flex items-center gap-2'>
			<div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
				{!!debouncedValue && (
					<img
						src={`https://cdn.simpleicons.org/${value}`}
						className="w-full h-full object-contain"
					/>
				)}
			</div>

			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className={cn(
					"border border-gray-300 focus-visible:ring-0",
					className,
				)}
			/>
		</div>
	);
};
