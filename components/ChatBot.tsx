'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your cecevents assistant. How can I help you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.text,
          history: messages.slice(-8).map(m => ({ sender: m.sender, text: m.text })),
        }),
      })
      const data = await res.json()
      if (!res.ok || !data?.ok) throw new Error(data?.error || 'Failed to get response')
      setMessages(prev => [...prev, { id: Date.now() + 1, text: String(data.answer || ''), sender: 'bot' }])
    } catch (e: any) {
      setError('Having trouble reaching the assistant. Showing a quick local answer.')
      setMessages(prev => [...prev, { id: Date.now() + 2, text: 'We specialize in on-site registration: badge printing, staffed desks, QR check-in, and live analytics. Share city, dates, and attendee estimate for tailored advice.', sender: 'bot' }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full",
          "bg-gradient-to-br from-brand-start via-brand-mid to-brand-end text-white",
          "shadow-2xl shadow-gold/30 flex items-center justify-center",
          "glow-gold-strong",
          isOpen && "hidden"
        )}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-[9999] w-96 h-[500px] glass-effect rounded-3xl shadow-2xl overflow-hidden border border-line"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-start via-brand-mid to-brand-end p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">cecevents Assistant</h3>
                  <p className="text-xs text-white/80">Always here to help</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:bg-white/10 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="h-[360px] overflow-y-auto p-4 space-y-3 bg-white/60 backdrop-blur-sm">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[75%] p-3 rounded-2xl text-sm",
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-brand-start to-brand-mid text-white rounded-br-sm'
                        : 'bg-white border border-line text-gray-800 rounded-bl-sm'
                    )}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center text-gray-500 text-sm"
                >
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                      className="w-2 h-2 bg-brand-start rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                      className="w-2 h-2 bg-brand-mid rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                      className="w-2 h-2 bg-brand-end rounded-full"
                    />
                  </div>
                  Typing...
                </motion.div>
              )}
              {error && (
                <div className="text-xs text-red-600/80">{error}</div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-line">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border-2 border-line focus:border-brand-mid outline-none text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-start to-brand-mid flex items-center justify-center text-white"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

