import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300',
          'hover:scale-105 hover:shadow-xl active:scale-95',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
          {
            'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/50':
              variant === 'primary',
            'bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/50':
              variant === 'secondary',
            'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white':
              variant === 'outline',
            'px-6 py-2.5 text-sm': size === 'sm',
            'px-8 py-3.5 text-base': size === 'md',
            'px-10 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
