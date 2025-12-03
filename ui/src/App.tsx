import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight-950 via-midnight-900 to-midnight-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">
            ZK<span className="text-midnight-400">Mail</span>
          </h1>
          <p className="text-xl text-midnight-300">
            Private, Zero-Knowledge Messaging on Midnight Network
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-midnight-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-midnight-700">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              title="🔒 Private"
              description="End-to-end encrypted messages protected by zero-knowledge proofs"
            />
            <FeatureCard
              title="✅ Verifiable"
              description="Cryptographic proof of message authenticity without revealing content"
            />
            <FeatureCard
              title="🌐 Decentralized"
              description="Built on Midnight Network for true data sovereignty"
            />
          </div>

          <div className="text-center">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-8 py-4 bg-midnight-500 hover:bg-midnight-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started ({count})
            </button>
            <p className="mt-4 text-midnight-400 text-sm">
              Base project setup complete. Ready for development.
            </p>
          </div>
        </div>

        <footer className="mt-16 text-center text-midnight-500 text-sm">
          <p>Powered by Midnight Network • Built with React + Vite + TailwindCSS</p>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-midnight-900/50 rounded-xl p-6 border border-midnight-600 hover:border-midnight-500 transition-colors">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-midnight-300 text-sm">{description}</p>
    </div>
  )
}

export default App
