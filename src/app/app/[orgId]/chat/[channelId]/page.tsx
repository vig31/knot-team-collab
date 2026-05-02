'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useChatStore } from '@/stores/chatStore'
import { ChatPanel } from '@/components/chat/ChatPanel'

export default function ChatPage() {
  const { channelId } = useParams<{ channelId: string }>()
  const setActiveChannel = useChatStore((s) => s.setActiveChannel)

  useEffect(() => {
    if (channelId) setActiveChannel(channelId)
  }, [channelId, setActiveChannel])

  if (!channelId) return null

  return <ChatPanel channelId={channelId} />
}
