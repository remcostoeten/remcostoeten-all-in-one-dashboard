import svgToComponent from '../libs/svgToComponent'

export const headerDropdownItems: {
    title: string
    href: string
    description: string
    isDisabled?: boolean
}[] = [
    {
        title: 'Readme',
        href: '/readme',
        description: 'The repository read-me which also contains the roadmap.'
    },
    {
        title: 'Diff checker',
        href: '/dashboard/diff-checker',
        description:
            'A diff checker with the goal of saving checks in your personal vault'
    },
    {
        title: 'Note',
        href: '/dashboard/posts',
        description:
            'A collection of notes that you can create, edit and delete.'
    },
    {
        title: 'WhatsApp Exports',
        href: '/dashboard/chat',
        description:
            'Exported chats from WhatsApp fetched from own API, because why not.'
    }
]

export const DashboardAsideItems = [
    {
        name: 'chat',
        svg: svgToComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>'
        ),
        hasNotification: false,
        isFavourite: true
    },
    {
        name: 'gasstations',
        svg: svgToComponent(`

<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 22V5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5Z" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 22H19" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.39 9.99998H12.62C13.66 9.99998 14.51 9.49999 14.51 8.10999V6.87999C14.51 5.48999 13.66 4.98999 12.62 4.98999H8.39C7.35 4.98999 6.5 5.48999 6.5 6.87999V8.10999C6.5 9.49999 7.35 9.99998 8.39 9.99998Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 13H9.5" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 16.01L22 16V10L20 9" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `),
        isDisabled: true,
        isFavourite: true
    },
    {
        name: 'diff-checker',
        isFavourite: true,
        svg: svgToComponent(
            `<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="#7f7f7f"
        viewBox="0 0 99.8 122.88"
        >
        <path
          class="cls-1"
          fill-rule="evenodd"
          d="M67.47,118.48a4.4,4.4,0,0,1-4.38,4.4H4.4a4.38,4.38,0,0,1-3.11-1.29A4.35,4.35,0,0,1,0,118.48V41.69a4.4,4.4,0,0,1,4.4-4.4H29V25.55a2.57,2.57,0,0,1,1.87-2.48L53.55,1a2.52,2.52,0,0,1,2-.95H95.18A4.63,4.63,0,0,1,99.8,4.62V85.23a4.63,4.63,0,0,1-4.62,4.62H67.48v28.63ZM34.11,37.29h8.06a2.4,2.4,0,0,1,1.88.9L65.7,59.27a2.44,2.44,0,0,1,1.78,2.36V84.69H94.64V53.82H87.08v5.84c-.11,2.52-2,3.45-4.28,2.67a1.24,1.24,0,0,1-.36-.19C76.62,57.57,72.6,53,66.77,48.42l-.08-.07c-1.77-1.62-1.25-3.46.47-4.81L81.45,30.86a6.91,6.91,0,0,1,2.11-1.18,2.45,2.45,0,0,1,3.17,1.38,5.05,5.05,0,0,1,.35,2c0,1.81,0,3.64,0,5.45h7.56V5.13H58.12V26.05a2.59,2.59,0,0,1-2.59,2.59H34.11v8.65ZM53,9,37.53,23.48H53V9Zm-40.84,65H4.91V42.18H39.7V62.1a2.47,2.47,0,0,0,2.47,2.47h20.4q0,26.7,0,53.4H4.91V88.64h7.21V94.2c.1,2.4,1.88,3.28,4.07,2.54a1,1,0,0,0,.34-.18c5.55-4.36,9.38-8.71,14.93-13.07l.07-.07c1.7-1.53,1.19-3.29-.44-4.58L17.48,66.77a6.43,6.43,0,0,0-2-1.13,2.34,2.34,0,0,0-3,1.32,4.78,4.78,0,0,0-.32,1.9c0,1.73,0,3.47,0,5.19ZM44.61,45.89l14.7,13.77H44.61V45.89Z"
        ></path>
        </svg>`
        )
    },
    {
        name: 'planner',
        isFavourite: true,
        svg: svgToComponent(
            `<svg
            xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            >
            <path
              stroke="#f7f7f7"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"
            ></path>
            <path
              fill="#1C274C"
              d="M18 17a1 1 0 11-2 0 1 1 0 012 0zM18 13a1 1 0 11-2 0 1 1 0 012 0zM13 17a1 1 0 11-2 0 1 1 0 012 0zM13 13a1 1 0 11-2 0 1 1 0 012 0zM8 17a1 1 0 11-2 0 1 1 0 012 0zM8 13a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
            </svg>`
        )
    },
    {
        name: 'posts',
        svg: svgToComponent(
            `<svg fill="#7f7f7f"
className="h-6 w-6"
            version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 345.369 345.369" xml:space="preserve">
                <g>
                    <g>
                        <g>
                            <g>
                                <path d="M199.654,105.629H49.965c-4.143,0-7.5-3.357-7.5-7.5s3.357-7.5,7.5-7.5h149.689c4.142,0,7.5,3.357,7.5,7.5
                                    S203.796,105.629,199.654,105.629z"/>
                            </g>
                            <g>
                                <path d="M163.922,139.246H49.965c-4.143,0-7.5-3.357-7.5-7.5c0-4.143,3.357-7.5,7.5-7.5h113.957c4.142,0,7.5,3.357,7.5,7.5
                                    C171.422,135.889,168.063,139.246,163.922,139.246z"/>
                            </g>
                            <g>
                                <path d="M87.682,240.096H49.965c-4.143,0-7.5-3.357-7.5-7.5c0-4.143,3.357-7.5,7.5-7.5h37.717c4.142,0,7.5,3.357,7.5,7.5
                                    C95.182,236.738,91.823,240.096,87.682,240.096z"/>
                            </g>
                            <g>
                                <path d="M71.332,273.713H49.965c-4.143,0-7.5-3.357-7.5-7.5c0-4.143,3.357-7.5,7.5-7.5h21.367c4.142,0,7.5,3.357,7.5,7.5
                                    C78.832,270.355,75.474,273.713,71.332,273.713z"/>
                            </g>
                            <path d="M333.404,34.782l-17.108-12.757c-4.308-3.212-9.605-4.558-14.923-3.779c-5.316,0.775-10.012,3.573-13.223,7.88
                                c-0.002,0.002-0.004,0.005-0.005,0.007l-42.411,57.48V26.529c0-4.143-3.357-7.5-7.5-7.5h-31.08V7.5c0-4.143-3.358-7.5-7.5-7.5
                                c-4.143,0-7.5,3.357-7.5,7.5v11.529H169.73V7.5c0-4.143-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.357-7.5,7.5v11.529h-22.422V7.5
                                c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v11.529H94.887V7.5c0-4.143-3.358-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5
                                v11.529H57.465V7.5c0-4.143-3.358-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v11.529H11.383c-4.142,0-7.5,3.357-7.5,7.5v311.34
                                c0,4.143,3.358,7.5,7.5,7.5h226.852c4.143,0,7.5-3.357,7.5-7.5V188.138l91.767-125.204c0.001-0.002,0.003-0.003,0.005-0.005
                                C344.134,54.038,342.295,41.412,333.404,34.782z M230.734,330.369H18.883V34.029h23.582v11.527c0,4.143,3.357,7.5,7.5,7.5
                                c4.142,0,7.5-3.357,7.5-7.5V34.029h22.422v11.527c0,4.143,3.357,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5V34.029h22.422v11.527
                                c0,4.143,3.357,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5V34.029h22.422v11.527c0,4.143,3.358,7.5,7.5,7.5
                                c4.143,0,7.5-3.357,7.5-7.5V34.029h22.424v11.527c0,4.143,3.357,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5V34.029h23.58v70.166
                                l-39.113,53.668H49.965c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h130.725c0,0-42.642,58.513-42.65,58.525
                                c0,0,0.002,0,0.004,0c-0.484,0.673-0.87,1.432-1.115,2.272l-17.15,58.669H49.965c-4.143,0-7.5,3.357-7.5,7.5
                                c0,4.143,3.357,7.5,7.5,7.5c0,0,75.515-0.006,75.555-0.006c0-0.001-0.001-0.002-0.002-0.002c1.373-0.022,2.744-0.413,3.951-1.193
                                l56.059-36.229c0.771-0.498,1.412-1.119,1.932-1.813c0.018-0.024,43.275-59.367,43.275-59.367V330.369z M148.296,248.23
                                l20.024,14.932l-30.069,19.432L148.296,248.23z M179.861,253.057l-25.305-18.869L272.844,71.883l25.305,18.869L179.861,253.057z
                                 M307.05,78.678l-25.306-18.869l8.076-10.83l25.305,18.871L307.05,78.678z M325.48,53.962c-0.002,0.002-0.004,0.005-0.005,0.007
                                l-1.384,1.855l-25.305-18.871l1.383-1.854c0.002-0.002,0.004-0.004,0.006-0.006c0.816-1.095,2.01-1.807,3.361-2.004
                                c1.353-0.196,2.697,0.146,3.791,0.961l17.109,12.757C326.697,48.492,327.165,51.702,325.48,53.962z"/>
                        </g>
                    </g>
                </g>
                                </svg>`
        ),
        isDisabled: false,
        hasNotification: false,
        isFavourited: true
    },
    {
        name: 'building',
        svg: svgToComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
        ),
        isDisabled: true,
        hasNotification: false
    },
    {
        name: 'profile',
        svg: svgToComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'
        ),
        isDisabled: true,
        href: 'dashboard/user-profile',
        hasNotification: true
    },

    {
        hasNotification: false,
        name: 'users',
        isDisabled: true,
        svg: svgToComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'
        ),
        href: '/dashboard/user-profile'
    },
    {
        name: 'document',
        isDisabled: true,
        hasNotification: false,
        svg: svgToComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M9 12h6m-6 4h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
        )
    }
]
