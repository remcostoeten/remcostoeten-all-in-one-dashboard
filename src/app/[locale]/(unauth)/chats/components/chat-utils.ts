import type { ChatFile, ChatMessage } from '@/core/types/chat-types';
import fs from 'fs/promises';
import path from 'path';

export async function getChatFiles(): Promise<string[]> {
  const chatsDir = path.join(process.cwd(), 'src','core', 'data', 'chats');
  const files = await fs.readdir(chatsDir);
  return files.filter(file => file.endsWith('-chat.json'));
}

export async function getChatData(chatName: string): Promise<ChatFile> {
  const filePath = path.join(process.cwd(), 'src',  'core', 'data', 'chats', `${chatName}-chat.json`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const messages = JSON.parse(fileContent);
  return { name: chatName, messages };
}

export function paginateMessages(messages: ChatMessage[], page: number, pageSize: number): ChatMessage[] {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return messages.slice(start, end);
}