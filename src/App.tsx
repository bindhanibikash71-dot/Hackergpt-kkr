/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-black text-white font-sans">
      {/* Sidebar */}
      <motion.aside 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "260px", opacity: 1 }}
        className="glass-card flex flex-col p-4"
      >
        <h1 className="text-2xl font-bold tracking-tighter text-[#ff003c] mb-8 uppercase italic">
          EVIL GPT
        </h1>
        <nav className="flex-1 space-y-2">
          <button className="w-full text-left p-2 hover:bg-[#ff003c]/10 rounded-md transition-colors">
            New Chat
          </button>
          <button className="w-full text-left p-2 hover:bg-[#ff003c]/10 rounded-md transition-colors">
            Characters
          </button>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full p-4 gap-4">
        <header className="glass-card flex items-center justify-between p-4 rounded-lg">
          <span className="font-mono text-xs opacity-60">MODEL: GPT-4.5-TURBO</span>
          <div className="w-8 h-8 rounded-full border border-[#ff003c]/50 bg-[#ff003c]/20" />
        </header>

        <section className="flex-1 glass-card rounded-lg flex flex-col items-center justify-center p-6">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            INITIATE SYSTEM
          </h2>
          <p className="opacity-60 text-center max-w-lg mb-8">
            Access restricted. Your neural interface is ready. Connect and begin.
          </p>
          <button className="px-6 py-3 border border-[#ff003c] hover:bg-[#ff003c] transition-all duration-300 rounded-sm font-bold uppercase tracking-widest">
            Execute Prompt
          </button>
        </section>

        <footer className="glass-card p-4 rounded-lg flex gap-2">
          <input 
            type="text" 
            placeholder="Enter command..."
            className="flex-1 bg-transparent border-none outline-hidden font-mono"
          />
          <button className="text-[#ff003c]">SEND</button>
        </footer>
      </main>
    </div>
  );
}

