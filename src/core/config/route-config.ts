/**
 * Defines the route configurations for the application's dashboard.
 * Each route configuration includes a path and a corresponding subMenu identifier.
 * The subMenu identifier is used to determine which sub-menu should be active
 * when the user navigates to that route.
 */

type RouteConfig = {
    path: string
    subMenu?: string
}

export const routeConfig: RouteConfig[] = [
    {
        path: '/dashboard/chat',
        subMenu: 'ChatSubMenu'
    },
    {
        path: '/dashboard/color-tool',
        subMenu: 'ColorToolSubMenu'
    },
    { path: '/dashboard/checker', subMenu: 'DiffCheckerSubMenu' },
    {
        path: '/dashboard/planner'
        // subMenu: 'DriveSubMenu'
    },
    {
        path: '/dashboard/settings',
        subMenu: 'SettingsSubMenu'
    },
    {
        path: '/dashboard/todos',
        subMenu: 'TodosSubMenu'
    }
    // Add more route configurations as needed
]
