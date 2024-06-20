'use client'

import { useState, useEffect, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogHeader } from "@/components/ui/dialog";
import { MicrophoneIcon, CameraIcon, ArchiveIcon, MailIcon } from '@heroicons/react/outline';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleMicClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onresult = (event: any) => {
      setSearchQuery(event.results[0][0].transcript);
    };
    recognition.start();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown as any);
    return () => {
      document.removeEventListener('keydown', handleKeyDown as any);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Command Palette</DialogTitle>
          <DialogDescription>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search or run a command..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleMicClick}>
                <MicrophoneIcon className="h-5 w-5" />
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ul>
            <li className="py-2 flex items-center">
              <MicrophoneIcon className="h-5 w-5 mr-2" /> Microphone <span className="ml-auto text-gray-500">Ctrl D</span>
            </li>
            <li className="py-2 flex items-center">
              <CameraIcon className="h-5 w-5 mr-2" /> Camera <span className="ml-auto text-gray-500">Ctrl E</span>
            </li>
            <li className="py-2 flex items-center">
              <ArchiveIcon className="h-5 w-5 mr-2" /> Archive all
            </li>
            <li className="py-2 flex items-center">
              <MailIcon className="h-5 w-5 mr-2" /> Mark all as read
            </li>
            <li className="py-2 flex items-center">
              <MailIcon className="h-5 w-5 mr-2" /> Mark all as unread
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}