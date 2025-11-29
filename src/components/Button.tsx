import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-cafe-600 text-white hover:bg-cafe-700 focus:ring-cafe-500',
        secondary: 'bg-cafe-200 text-cafe-900 hover:bg-cafe-300 focus:ring-cafe-400',
        outline: 'border-2 border-cafe-600 text-cafe-600 hover:bg-cafe-50 focus:ring-cafe-500',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
