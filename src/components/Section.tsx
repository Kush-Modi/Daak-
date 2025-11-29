import { twMerge } from 'tailwind-merge';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={twMerge('py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto', className)}
            {...props}
        >
            {children}
        </section>
    );
}
