import React from 'react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import NavSettings from './NavSettings';

const Sidebar = ({ enabledNavItems, toggleNavItem }) => {
    const navItems = [
        { icon: 'bell', label: 'Notifications', href: '/notifications' },
        { icon: 'calendar', label: 'Calendar', href: '/calendar' },
        { icon: 'building', label: 'Office', href: '/office' },
        { icon: 'user', label: 'Profile', href: '/profile' },
        { icon: 'chat', label: 'Chat', href: '/chat' },
        { icon: 'users', label: 'Team', href: '/team' },
        { icon: 'document', label: 'Documents', href: '/documents' },
        { icon: 'database', label: 'Drive', href: '/drive' },
    ];

    return (
        <TooltipProvider>
            <div className="flex flex-col h-screen bg-background-sidebar text-text-primary w-16">
                <div className="flex items-center justify-center h-16 w-full">
                    <span className="text-2xl font-bold text-blue-primary">J</span>
                </div>
                {navItems.map((item, index) => (
                    enabledNavItems[item.label] && (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link href={item.href}>
                                    <a className="flex items-center justify-center h-16 w-full hover:bg-ghost-hover">
                                        <span className="text-xl text-icon-on-background hover:text-icon-active">
                                            {renderIcon(item.icon)}
                                        </span>
                                    </a>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    )
                ))}
                <div className="mt-auto">
                    <NavSettings enabledNavItems={enabledNavItems} toggleNavItem={toggleNavItem} />
                </div>
            </div>
        </TooltipProvider>
    );
};

const renderIcon = (iconName) => {
    // Implement SVG icons here based on the iconName
    return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(iconName)} />
    </svg>
};

const getIconPath = (icon) => {
    const paths = {
        bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        chat: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
        users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        database: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    };
    return paths[icon] || '';
};

export default Sidebar;