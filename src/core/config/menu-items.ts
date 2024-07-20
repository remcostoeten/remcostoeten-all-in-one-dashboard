import svgToComponent from '../libs/svgToComponent'

export const headerDropdownItems: {
    title: string
    href: string
    description: string
}[] = [
        {
            title: 'Readme',
            href: '/readme',
            description: 'The repository read-me which also contains the roadmap.'
        },
        {
            title: 'Guestbook ',
            href: '/guestbook',
            description: 'Just a page to test crud operations.'
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
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`
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
        isFavourite: true
    },
    {
        name: 'color-tool',
        isFavourite: true,
        svg: svgToComponent(
            ` <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="ic_fluent_color_24_regular" fill="#212121" fill-rule="nonzero">
            <path d="M3.83904058,5.85749561 C6.78004581,1.94188971 12.8686707,0.802505202 17.2029394,3.497377 C21.4827525,6.15839057 23.0567972,11.2744655 21.303866,16.0747407 C19.648689,20.6073231 15.2875295,22.403209 12.1442101,20.1231428 C10.9667425,19.2690444 10.5102901,18.1984035 10.2896576,16.4593132 L10.1842745,15.4713913 L10.1388589,15.073954 C10.0162342,14.1399065 9.82780748,13.7214296 9.43453605,13.5022264 C8.89894535,13.2036966 8.54231757,13.1967226 7.83905282,13.4692784 L7.48794193,13.6148779 L7.30920754,13.6928218 C6.29543196,14.1331038 5.62104161,14.2877923 4.76804588,14.1090543 L4.56779442,14.0618665 L4.40426138,14.0152691 C1.61529547,13.1510586 1.20220653,9.36813303 3.83904058,5.85749561 Z M4.8232597,12.5739125 L4.94616428,12.610372 L5.080113,12.6412161 C5.51918878,12.7281665 5.89444039,12.6556749 6.51713486,12.3993955 L7.11930681,12.1421347 C8.32144994,11.6492191 9.1045463,11.6010233 10.1648305,12.1920088 C11.0824191,12.7034581 11.4400583,13.4895978 11.62247,14.8516511 L11.6756637,15.310802 L11.729873,15.8425189 L11.7770095,16.2649431 C11.9490842,17.6262078 12.2619162,18.3554553 13.024955,18.90894 C15.3002886,20.5593963 18.5593937,19.2173263 19.8948725,15.5602143 C21.411142,11.4080201 20.0689941,7.04567303 16.4109117,4.77122636 C12.736718,2.48676231 7.51248742,3.46438986 5.03840796,6.75833849 C2.96361994,9.52067707 3.21809532,12.0378944 4.8232597,12.5739125 Z M16.0477462,10.5795744 C15.8690689,9.91274179 16.264797,9.2273206 16.9316297,9.04864333 C17.5984623,8.86996607 18.2838835,9.26569418 18.4625608,9.93252681 C18.641238,10.5993594 18.2455099,11.2847806 17.5786773,11.4634579 C16.9118447,11.6421352 16.2264235,11.2464071 16.0477462,10.5795744 Z M16.5423361,14.0682389 C16.3636589,13.4014063 16.759387,12.7159851 17.4262196,12.5373078 C18.0930522,12.3586306 18.7784734,12.7543587 18.9571507,13.4211913 C19.135828,14.0880239 18.7400999,14.7734451 18.0732672,14.9521224 C17.4064346,15.1307997 16.7210134,14.7350716 16.5423361,14.0682389 Z M14.0692386,7.57689062 C13.8905613,6.91005799 14.2862894,6.2246368 14.9531221,6.04595953 C15.6199547,5.86728227 16.3053759,6.26301038 16.4840531,6.92984301 C16.6627304,7.59667564 16.2670023,8.28209683 15.6001697,8.4607741 C14.933337,8.63945136 14.2479158,8.24372325 14.0692386,7.57689062 Z M14.0407569,16.5752747 C13.8620796,15.9084421 14.2578077,15.2230209 14.9246403,15.0443437 C15.591473,14.8656664 16.2768942,15.2613945 16.4555714,15.9282271 C16.6342487,16.5950598 16.2385206,17.280481 15.571688,17.4591582 C14.9048553,17.6378355 14.2194341,17.2421074 14.0407569,16.5752747 Z M10.5438339,6.60529725 C10.3651566,5.93846462 10.7608847,5.25304343 11.4277174,5.07436616 C12.09455,4.8956889 12.7799712,5.29141701 12.9586484,5.95824964 C13.1373257,6.62508227 12.7415976,7.31050346 12.074765,7.48918073 C11.4079323,7.66785799 10.7225111,7.27212988 10.5438339,6.60529725 Z" id="🎨-Color">

</path>
        </g>
    </g>
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
        name: 'bell',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c.538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`
        ),
        hasNotification: false,
        isFavourite: false
    },
    {
        name: 'building',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        ),
        hasNotification: false
    },
    {
        name: 'profile',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
        ),

        href: 'dashboard/user-profile',

        hasNotification: true
    },

    {
        hasNotification: false,
        name: 'users',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        ),
        href: '/dashboard/user-profile'
    },
    {
        name: 'document',
        hasNotification: false,
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M9 12h6m-6 4h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`
        )
    },
    {
        hasNotification: false,
        name: 'sun',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        )
    },
    {
        hasNotification: false,
        name: 'database',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`
        )
    }
]
1
