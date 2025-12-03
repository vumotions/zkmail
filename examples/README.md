# ZKMail Examples

This directory contains practical examples demonstrating how to use ZKMail for private messaging.

## 📁 Directory Structure

```
examples/
├── basic/           # Simple examples for beginners
│   ├── send-message.ts
│   ├── receive-message.ts
│   └── verify-proof.ts
│
└── advanced/        # Advanced use cases
    ├── group-messaging.ts
    ├── file-encryption.ts
    └── custom-proofs.ts
```

## 🚀 Basic Examples

### 1. Send a Message

```bash
npm run build
node examples/basic/send-message.js
```

Demonstrates:
- Connecting to Midnight Network
- Encrypting a message
- Generating a ZK proof
- Sending to a recipient

### 2. Receive Messages

```bash
node examples/basic/receive-message.js
```

Demonstrates:
- Querying for messages
- Decrypting message content
- Verifying sender authenticity

### 3. Verify Proof

```bash
node examples/basic/verify-proof.js
```

Demonstrates:
- Independent proof verification
- Checking message integrity
- Validating sender identity

## 🔥 Advanced Examples

### Group Messaging

Multi-party encrypted messaging with shared secrets.

```bash
node examples/advanced/group-messaging.js
```

### File Encryption

Encrypt and share files with ZK proofs of authenticity.

```bash
node examples/advanced/file-encryption.js
```

### Custom Proofs

Create custom verification logic for specialized use cases.

```bash
node examples/advanced/custom-proofs.js
```

## 📖 Usage Patterns

### Basic Send Flow

```typescript
import { ZKMail } from '../src/zkmail'

const zkmail = await ZKMail.create({
  walletSeed: process.env.WALLET_SEED,
  network: 'testnet'
})

await zkmail.sendMessage({
  to: 'midnight1...',
  content: 'Hello, private world!',
  metadata: { subject: 'Greetings' }
})
```

### Basic Receive Flow

```typescript
const messages = await zkmail.getMessages({
  filter: { unread: true },
  limit: 10
})

for (const msg of messages) {
  console.log('From:', msg.sender)
  console.log('Content:', msg.content)
  console.log('Valid:', await msg.verifyProof())
}
```

## 🛠️ Prerequisites

All examples require:
- Midnight wallet with test tokens
- Proof server running locally
- Environment variables configured

## 🔑 Environment Setup

Create a `.env` file in the root directory:

```env
WALLET_SEED=your_wallet_seed_here
MIDNIGHT_NETWORK=testnet
PROOF_SERVER_URL=http://localhost:6300
```

## 📚 Learn More

- [Documentation](../docs/README.md)
- [API Reference](../docs/06-api-reference.md)
- [Architecture](../docs/02-architecture.md)

## 🤝 Contributing

Found a bug or want to add an example? Open an issue or PR!
