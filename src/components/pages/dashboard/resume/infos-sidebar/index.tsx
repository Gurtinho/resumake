import { Logo } from '@/components/shared/logo';
import Link from 'next/link';
import { AIGenerationDropdown } from './ai-generation-dropdown';

export const InfosSidebar = () => {
	return (
		<aside className="w-full h-full p-6 overflow-y-auto">
			<div className="w-full flex items-center justify-between">
				<Link href='dashboard/resumes'>
					<Logo className='w-full max-w-[80px]' />
				</Link>

        <AIGenerationDropdown />
			</div>
		</aside>
	);
};
