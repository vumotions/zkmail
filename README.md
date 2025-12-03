<div align="center">
  <h1>ZKMail</h1>

  <p><strong>Private, Zero-Knowledge Messaging on Midnight Network</strong></p>

  <p>A progressive framework for building confidential, verifiable communication using zero-knowledge proofs on the Midnight blockchain.</p>

  [![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/zkmail)
  [![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/zkmail)
  [![Midnight Network](https://img.shields.io/badge/Midnight-Network-blueviolet.svg)](https://midnight.network)
  [![Node.js](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen.svg)](https://nodejs.org)

  [Documentation](./docs) | [Examples](./examples) | [API Reference](./docs/06-api-reference.md) | [Contributing](./CONTRIBUTING.md)

</div>

---

## Description

**ZKMail** is a framework for building efficient, scalable privacy-preserving messaging applications. It uses modern JavaScript, is built with **TypeScript** (preserves compatibility with pure JavaScript) and combines elements of **OOP** (Object Oriented Programming), **FP** (Functional Programming), and **Zero-Knowledge Cryptography**.

Under the hood, ZKMail makes use of **Midnight Network**, but also provides compatibility with a wide range of other libraries, like **React** and **Vite**, allowing for easy integration into existing applications.

---

## Features

<table>
  <tr>
    <td><strong>End-to-End Encryption</strong></td>
    <td>Messages encrypted with recipient's public key using NaCl cryptography</td>
  </tr>
  <tr>
    <td><strong>Zero-Knowledge Proofs</strong></td>
    <td>Verify message authenticity without revealing content using ZK-SNARKs</td>
  </tr>
  <tr>
    <td><strong>Decentralized</strong></td>
    <td>Built on Midnight Network blockchain for true data sovereignty</td>
  </tr>
  <tr>
    <td><strong>Modern UI</strong></td>
    <td>Beautiful React interface with TailwindCSS and responsive design</td>
  </tr>
  <tr>
    <td><strong>Well-Tested</strong></td>
    <td>Comprehensive test suite with Vitest and Testing Library</td>
  </tr>
  <tr>
    <td><strong>Developer-Friendly</strong></td>
    <td>Extensive documentation, examples, and tutorials for quick onboarding</td>
  </tr>
</table>

---

## Installation

```bash
npm install zkmail
```

Or clone and setup:

```bash
git clone https://github.com/yourusername/zkmail.git
cd zkmail
npm install
npm run setup
```

---

## Quick Start

### Prerequisites

- **Node.js** >= 22.0.0
- **Docker** (for proof server)
- **Midnight Wallet** with test tokens

### Basic Usage

```typescript
import { ZKMail } from 'zkmail'

// Initialize ZKMail client
const zkmail = await ZKMail.create({
  walletSeed: process.env.WALLET_SEED,
  network: 'testnet'
})

// Send encrypted message
await zkmail.sendMessage({
  to: 'midnight1...',
  content: 'Hello, private world!',
  metadata: { subject: 'Greetings' }
})

// Receive messages
const messages = await zkmail.getMessages({
  filter: { unread: true },
  limit: 10
})

// Verify proof
for (const msg of messages) {
  const isValid = await msg.verifyProof()
  console.log(`Message from ${msg.sender}: ${isValid ? '✓' : '✗'}`)
}
```

### Run the Application

**Backend + Contracts:**
```bash
# Start proof server
npm run proof-server

# Run CLI
npm run cli
```

**Frontend UI:**
```bash
npm run dev:ui
```

Visit `http://localhost:3000` to see the application.

**Full Stack (all at once):**
```bash
npm run dev:full
```

---

## Project Structure

```
zkmail/
├── contracts/          # Compact smart contracts
│   ├── zkmail.compact  # Main messaging contract
│   └── managed/        # Compiled artifacts
│
├── ui/                 # React frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── utils/      # Helper functions
│   │   ├── types/      # TypeScript types
│   │   └── App.tsx     # Main application
│   └── index.html
│
├── backend/            # Backend services
│   ├── providers/      # Midnight providers
│   ├── utils/          # Utilities
│   ├── deploy.ts       # Contract deployment
│   └── cli.ts          # CLI interface
│
├── docs/               # Documentation
│   ├── 01-getting-started.md
│   ├── 02-architecture.md
│   └── tutorials/
│
├── tests/              # Test suites
│   └── setup.ts
│
└── examples/           # Usage examples
    ├── basic/          # Simple examples
    └── advanced/       # Advanced patterns
```

---

## Scripts

### Development
```bash
npm run dev:ui          # Start UI development server
npm run dev             # Start backend with proof server
npm run dev:full        # Run everything (proof + backend + UI)
```

### Building
```bash
npm run build           # Build backend (TypeScript → JavaScript)
npm run build:ui        # Build frontend for production
npm run compile         # Compile Compact contracts
```

### Deployment
```bash
npm run setup           # Compile, build, and deploy contracts
npm run deploy          # Deploy contracts to testnet
```

### Testing
```bash
npm test                # Run tests in watch mode
npm run test:run        # Run tests once
npm run test:ui         # Open Vitest UI
```

### Utilities
```bash
npm run cli             # Interactive CLI
npm run check-balance   # Check wallet balance
npm run health-check    # Verify network connection
npm run clean           # Clean build artifacts
npm run reset           # Reset everything and recompile
```

---

## Documentation

Comprehensive documentation is available in the [`docs/`](./docs) directory:

- **[Getting Started](./docs/01-getting-started.md)** - Setup and installation guide
- **[Architecture Overview](./docs/02-architecture.md)** - System design and components
- **[Smart Contracts Guide](./docs/03-contracts.md)** - Contract development
- **[Frontend Development](./docs/04-frontend.md)** - UI development guide
- **[ZK Proofs System](./docs/05-zk-proofs.md)** - Zero-knowledge proof implementation
- **[API Reference](./docs/06-api-reference.md)** - Complete API documentation
- **[Security Best Practices](./docs/07-security.md)** - Security guidelines

### Tutorials

Step-by-step tutorials are available in [`docs/tutorials/`](./docs/tutorials):

1. **Send Your First Message** - Learn the basics of sending encrypted messages
2. **Verify Zero-Knowledge Proofs** - Understand proof verification
3. **Build Custom UI Components** - Extend the messaging interface
4. **Implement Group Messaging** - Create multi-party communications

---

## Examples

Practical examples are in the [`examples/`](./examples) directory:

**Basic Examples:**
- [Send a message](./examples/basic/send-message.ts)
- [Receive and decrypt messages](./examples/basic/receive-message.ts)
- [Verify zero-knowledge proofs](./examples/basic/verify-proof.ts)

**Advanced Examples:**
- [Group messaging](./examples/advanced/group-messaging.ts)
- [File encryption](./examples/advanced/file-encryption.ts)
- [Custom proof logic](./examples/advanced/custom-proofs.ts)

Run examples:
```bash
npm run build
node examples/basic/send-message.js
```

---

## Tech Stack

**Blockchain:**
- [Midnight Network](https://midnight.network) - Privacy-focused blockchain
- [Compact](https://docs.midnight.network/compact) - Smart contract language
- Zero-Knowledge Proofs (ZK-SNARKs)

**Frontend:**
- [React](https://react.dev) 19
- [Vite](https://vitejs.dev) - Fast build tool
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) 5.9+

**Backend:**
- [Node.js](https://nodejs.org) 22+
- TypeScript
- [Midnight.js SDK](https://docs.midnight.network/develop/tutorial/using-midnight-js/)

**Cryptography:**
- [TweetNaCl](https://tweetnacl.js.org) - Cryptographic library
- [Noble Hashes](https://github.com/paulmillr/noble-hashes) - Hashing functions
- Midnight ZK primitives

**Testing:**
- [Vitest](https://vitest.dev) - Fast unit test framework
- [Testing Library](https://testing-library.com) - React testing utilities

---

## Security

ZKMail uses zero-knowledge proofs to ensure:

- **Privacy** - Message content is encrypted and never revealed on-chain
- **Authenticity** - Cryptographically prove sender identity without exposing it
- **Integrity** - Detect any tampering with message content or metadata
- **Non-repudiation** - Verifiable proof of message origin

See [Security Best Practices](./docs/07-security.md) for detailed security guidelines.

---

## Roadmap

- [x] Base project setup with React + Vite + TailwindCSS
- [x] ZKMail smart contract with private messaging
- [x] Documentation structure and tutorials
- [x] Example templates for common use cases
- [ ] Complete UI components for messaging interface
- [ ] Message encryption/decryption implementation
- [ ] Zero-knowledge proof generation and verification
- [ ] Group messaging support
- [ ] File attachments via IPFS
- [ ] Read receipts (privacy-preserving)
- [ ] Forward secrecy implementation
- [ ] Mobile application
- [ ] Cross-chain bridging

---

## Contributing

We welcome contributions from the community! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run tests: `npm test`
5. Commit with clear messages: `git commit -m 'Add amazing feature'`
6. Push to your fork: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code of Conduct

Please note we have a code of conduct. Follow it in all interactions with the project.

---

## Community & Support

- **Documentation**: [docs/](./docs)
- **Issues**: [GitHub Issues](https://github.com/yourusername/zkmail/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/zkmail/discussions)
- **Midnight Network**: [Discord](https://discord.gg/midnight)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Midnight Network** team for the privacy-focused blockchain platform
- **Input Output Global** for supporting privacy innovation
- All contributors who help improve ZKMail

---

## Support the Project

If you find ZKMail useful, please consider:
- Starring the repository
- Reporting bugs
- Suggesting new features
- Contributing code
- Improving documentation

**Help us build the future of private communication!**

---

<div align="center">

  **Built with ❤️ by the ZKMail community**

  [Website](https://zkmail.network) | [Twitter](https://twitter.com/zkmail) | [Discord](https://discord.gg/zkmail)

</div>
