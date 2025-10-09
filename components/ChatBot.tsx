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

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thank you for your interest! A team member will contact you within 24 hours.",
        "We'd love to help with your event! Please call +91 98765 43210 or fill our contact form.",
        "Our team specializes in on-site registration for events of all sizes. Let's discuss your requirements!"
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: randomResponse, 
        sender: 'bot' 
      }])
      setIsTyping(false)
    }, 1500)
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
          "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full",
          "bg-gradient-to-br from-gold to-gold-dark text-primary",
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
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] glass-effect rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gold to-gold-dark p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">cecevents Assistant</h3>
                  <p className="text-xs text-primary/70">Always here to help</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-primary hover:bg-primary/10 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="h-[360px] overflow-y-auto p-4 space-y-3 bg-white/50 backdrop-blur-sm">
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
                        ? 'bg-gold text-primary rounded-br-sm'
                        : 'bg-white border border-gold/20 text-gray-800 rounded-bl-sm'
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
                      className="w-2 h-2 bg-gold rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                      className="w-2 h-2 bg-gold rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                      className="w-2 h-2 bg-gold rounded-full"
                    />
                  </div>
                  Typing...
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gold/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border-2 border-gold/20 focus:border-gold outline-none text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-primary" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

