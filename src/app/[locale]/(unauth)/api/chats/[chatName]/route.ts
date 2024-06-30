import { NextResponse } from 'next/server';
import { getChatData, paginateMessages } from '../../../chats/components/chat-utils';

export async function GET(request: Request, { params }: { params: { chatName: string } }) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);
  const search = searchParams.get('search') || '';

  const chatData = await getChatData(params.chatName);
  let filteredMessages = chatData.messages;

  if (search) {
    filteredMessages = filteredMessages.filter(
      (msg) =>
        msg.name.toLowerCase().includes(search.toLowerCase()) ||
        new Date(msg.timestamp).toLocaleDateString().includes(search)
    );
  }

  const paginatedMessages = paginateMessages(filteredMessages, page, pageSize);
  const totalPages = Math.ceil(filteredMessages.length / pageSize);

  return NextResponse.json({ messages: paginatedMessages, totalPages });
}