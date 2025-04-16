import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const fontSans = Nunito_Sans({
	variable: '--font-sans',
	subsets: ['latin'],
});

const fontTitle = Nunito({
	variable: '--font-title',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Resumake',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontTitle.variable,
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
