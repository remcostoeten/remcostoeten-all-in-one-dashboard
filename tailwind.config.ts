import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            width: {
                sidebar: 'var(--sidebar-width)',
                icon: 'var(--icon-size)'
            },
            height: {
                icon: 'var(--icon-size)'
            },
            colors: {
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                ghost: 'var(--bg-ghost)',
                'ghost-hover': 'var(--bg-ghost-hover)',
                'ghost-active': 'var(--bg-ghost-active)',
                'border-ghost': 'var(--border-ghost)',
                'blue-primary': 'var(--blue-primary)',
                'dark-blue': 'var(--dark-blue)',
                sidebar: 'var(--dark-blue)',
                'light-blue': 'var(--light-blue)',
                'bg-body': 'var(--light-blue)', // alias for light-blue
                'text-white': 'var(--text-white)',
                icon: '#1A1A28',
                'icon-active': 'var(--icon-active)',
                'icon-active-background': 'var(--icon-active-background)',
                'icon-on-background': 'var(--icon-on-background)',
                'background-main': 'var(--background-main)',
                'background-sidebar': 'var(--background-sidebar)',
                'background-card': 'var(--background-card)',
                'background-active': 'var(--background-active)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-active': 'var(--text-active)',
                'button-primary': 'var(--button-primary)',
                'button-primary-hover': 'var(--button-primary-hover)',
                border: 'rgba(255, 255, 255, .141)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                icon: 'var(--icon-border-radius)'
            },
            border: {
                icon: 'var(--icon-border)',
                'icon-hover': 'var(--border-ghost-hover)'
            },
            spacing: {
                'icon-size': 'var(--icon-size)',
                'icon-bg-size': 'var(--icon-bg-size)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [animate]
}

export default config
