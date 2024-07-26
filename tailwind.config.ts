import type { Config } from 'tailwindcss'
const svgToDataUri = require('mini-svg-data-uri')
const colors = require('tailwindcss/colors')
const {
    default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

const withMT = require('@material-tailwind/html/utils/withMT')

const config: Config = withMT({
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{ts,tsx}'
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
                mobile: { max: '639px' }
            }
        },
        extend: {
            backgroundImage: {
                'gradient-to-solid':
                    'linear-gradient(to bottom, var(--tw-gradient-stops), #000000)' // Customize the solid color here
            },
            padding: {
                nav: 'var(--nav-height)',
                outskirts: '1.25rem'
            },
            dropShadow: {
                popover:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
            },
            width: {
                sidebar: 'var(--sidebar-width)',
                submenu: 'var(--submenu-width)',
                icon: 'var(--icon-size)'
            },
            maxWidth: {
                submenu: 'var(--submenu-width)'
            },
            maxHeight: {
                'top-section': '53px'
            },
            height: {
                'top-section': '53px',
                icon: 'var(--icon-size)',
                nav: 'var(--nav-height)',
                'top-bar': 'var(--top-bar-height)'
            },
            colors: {
                section: '#1f1f2c',
                'theme-primary': 'var(--theme-primary)',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                ghost: 'var(--bg-ghost)',
                'ghost-hover': 'var(--bg-ghost-hover)',
                'ghost-active': 'var(--bg-ghost-active)',
                'border-ghost': 'var(--border-ghost)',
                'blue-primary': 'var(--blue-primary)',
                'dark-blue': 'var(--dark-blue)',
                sidebar: 'var(--dark-blue)',
                'dash-body': 'var(--light-blue)',
                'bg-body': 'var(--light-blue)',
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
                orange: 'var(--custom-orange)',
                'top-bar': 'var(--top-bar)',
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
                    DEFAULT: 'var(--bg-popover)',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
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
                shine: {
                    from: { backgroundPosition: '200% 0' },
                    to: { backgroundPosition: '-200% 0' }
                },
                'caret-blink': {
                    '0%,70%,100%': { opacity: '1' },
                    '20%,50%': { opacity: '0' }
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' }
                },
                'marquee-vertical': {
                    from: { transform: 'translateY(0)' },
                    to: { transform: 'translateY(calc(-100% - var(--gap)))' }
                },
                'shine-pulse': {
                    '0%': {
                        'background-position': '0% 0%'
                    },
                    '50%': {
                        'background-position': '100% 100%'
                    },
                    to: {
                        'background-position': '0% 0%'
                    }
                },
                'background-shine': {
                    from: {
                        backgroundPosition: '0 0'
                    },
                    to: {
                        backgroundPosition: '-200% 0'
                    }
                },
                'border-beam': {
                    '100%': {
                        'offset-msstance': '100%'
                    }
                },
                'logo-cloud': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - 4rem))' }
                },
                'spin-around': {
                    '0%': {
                        transform: 'translateZ(0) rotate(0)'
                    },
                    '15%, 35%': {
                        transform: 'translateZ(0) rotate(90deg)'
                    },
                    '65%, 85%': {
                        transform: 'translateZ(0) rotate(270deg)'
                    },
                    '100%': {
                        transform: 'translateZ(0) rotate(360deg)'
                    }
                },
                slide: {
                    to: {
                        transform: 'translate(calc(100cqw - 100%), 0)'
                    }
                }
            },
            orbit: {
                '0%': {
                    transform:
                        'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
                },
                '100%': {
                    transform:
                        'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
                }
            },
            gradient: {
                to: {
                    backgroundPosition: 'var(--bg-size) 0'
                }
            },
            shimmer: {
                '0%, 90%, 100%': {
                    'background-position':
                        'calc(-100% - var(--shimmer-width)) 0'
                },
                '30%, 60%': {
                    'background-position': 'calc(100% + var(--shimmer-width)) 0'
                }
            },
            'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' }
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' }
            },
            buttonheartbeat: {
                '0%': {
                    'box-shadow': '0 0 0 0 theme("colors.blue.500")',
                    transform: 'scale(1)'
                },
                '50%': {
                    'box-shadow': '0 0 0 7px theme("colors.blue.500/0")',
                    transform: 'scale(1.05)'
                },
                '100%': {
                    'box-shadow': '0 0 0 0 theme("colors.blue.500/0")',
                    transform: 'scale(1)'
                }
            }
        },
        gap: {
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem'
        },
        animation: {
            shine: 'shine 8s ease-in-out infinite',
            'caret-blink': 'caret-blink 1.25s ease-out infinite',
            marquee: 'marquee var(--duration) linear infinite',
            'marquee-vertical':
                'marquee-vertical var(--duration) linear infinite',
            'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
            slide: 'slide var(--speed) ease-in-out infinite alternate',
            'logo-cloud': 'logo-cloud 30s linear infinite',
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
    },
    daisyui: {
        themes: ['light', 'sunset', 'cupcake']
    },
    plugins: [
        require('daisyui'),
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        function ({ addUtilities }) {
            const newUtilities = {
                '.break-container': {
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'
                }
            }

            addUtilities(newUtilities)
        },
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
})

module.exports = config
