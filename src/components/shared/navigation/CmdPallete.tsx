'use client'

import { useState, useEffect } from 'react';

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '/') {
                setIsOpen((prev) => !prev);
            } else if (event.ctrlKey && event.key === 'm') {
                console.log('Microphone search triggered');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 text-white rounded-lg w-96 p-4">
                <input
                    type="text"
                    placeholder="Search or run a command..."
                    className="w-full bg-gray-700 p-2 rounded-md mb-4"
                />
                <div>
                    <div className="mb-2">
                        <span className="text-gray-400">OFFICE</span>
                        <div className="flex justify-between items-center mt-1">
                            <span>Microphone</span>
                            <span className="text-gray-400">Ctrl M</span>
                        </div>
                    </div>
                    <div className="mb-2">
                        <span className="text-gray-400">INBOX</span>
                        <div className="flex justify-between items-center mt-1">
                            <span>Archive all</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <span>Mark all as read</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <span>Mark all as unread</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-gray-400">PLANNER</span>
                        <div className="flex justify-between items-center mt-1">
                            <span>Type</span>
                            <span className="text-gray-400">/ to view available commands</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
