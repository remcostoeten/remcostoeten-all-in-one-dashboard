
import { create } from 'zustand';

type ChatState = {
    chatTitle: string;
    setChatTitle: (title: string) => void;
}

const useChatStore = create<ChatState>((set) => ({
    chatTitle: '',
    setChatTitle: (title: string) => set({ chatTitle: title }),
}))

export default useChatStore