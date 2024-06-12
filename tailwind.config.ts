import type { Config } from 'tailwindcss'

const {
    default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

const svgToDataUri = require('mini-svg-data-uri')

const colors = require('tailwindcss/colors')

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
            padding: {
                nav: 'var(--nav-height)'
            },
            width: {
                sidebar: 'var(--sidebar-width)',
                icon: 'var(--icon-size)'
            },
            height: {
                icon: 'var(--icon-size)',
                nav: 'var(--nav-height'
            },
            colors: {
                'theme-primary': 'var(--theme-primary)',
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
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%'
                    }
                },
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
                'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust duration and timing as needed for your design.
                orbit: 'orbit calc(var(--duration)*1s) linear infinite',
                gradient: 'gradient 8s linear infinite',
                shimmer: 'shimmer 8s infinite',
                buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'border-beam':
                    'border-beam calc(var(--duration)*1s) infinite linear',
                'background-shine': 'background-shine 2s linear infinite'
            }
        }
    },
    plugins: [
        require('tailwindcss-animate'), // Assuming require is resolved in your environment
        // Add other unique plugins here
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    'bg-grid': (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`
                    }),
                    'bg-grid-small': (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`
                    }),
                    'bg-dot': (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`
                    })
                },
                {
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: 'color'
                }
            )
        }
    ]
}

export default config
