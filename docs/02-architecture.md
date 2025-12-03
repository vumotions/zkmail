# ZKMail Architecture

## Overview

ZKMail is a privacy-preserving messaging system built on Midnight Network that uses zero-knowledge proofs to enable private, verifiable communication.

## System Components

```
┌─────────────────────────────────────────────────────────────┐
│                        ZKMail System                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐      ┌──────────────┐      ┌───────────┐ │
│  │   Frontend   │◄────►│   Backend    │◄────►│  Midnight │ │
│  │   (React)    │      │   (Node.js)  │      │  Network  │ │
│  └──────────────┘      └──────────────┘      └───────────┘ │
│         │                      │                     │       │
│         │                      │                     │       │
│  ┌──────▼──────┐      ┌───────▼──────┐      ┌───────▼────┐ │
│  │  UI Layer   │      │  Contracts   │      │   Ledger   │ │
│  │  Components │      │  (Compact)   │      │   State    │ │
│  └─────────────┘      └──────────────┘      └────────────┘ │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │           Zero-Knowledge Proof System                 │  │
│  │  (Proof Generation, Verification, Privacy Layer)     │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Core Layers

### 1. Frontend Layer (UI)

**Technology Stack:**
- React 19
- Vite
- TailwindCSS
- TypeScript

**Responsibilities:**
- User interface for message composition
- Message inbox/outbox management
- Wallet connection and management
- Real-time message updates
- Proof generation UI

**Key Components:**
- `MessageComposer`: Create and encrypt messages
- `MessageList`: Display received messages
- `ProofVerifier`: Verify message proofs
- `WalletConnector`: Manage wallet connections

### 2. Smart Contracts Layer

**Technology:** Compact Language

**Contracts:**

#### `zkmail.compact`
Main messaging contract handling:
- Message storage and retrieval
- Sender authentication
- Recipient verification
- Proof validation

#### `proof-verification.compact`
ZK proof verification logic:
- Verify message authenticity
- Validate sender identity
- Check encryption integrity

**State Management:**
- **Public State**: Message metadata, timestamps, proof hashes
- **Private State**: Encrypted message content, sender/recipient keys

### 3. Backend Services

**Technology:** Node.js + TypeScript

**Services:**

#### Providers
- `ProofProvider`: Generate and verify ZK proofs
- `StateProvider`: Manage private state
- `IndexerProvider`: Query blockchain data
- `WalletProvider`: Handle wallet operations

#### Utilities
- Encryption/Decryption helpers
- Key management
- Message formatting
- Proof generation

### 4. Midnight Network Integration

**Components:**
- **Ledger**: Public blockchain state
- **ZK Config**: Zero-knowledge proof configuration
- **Proof Server**: External proof generation service
- **Indexer**: Query and index blockchain data

## Data Flow

### Sending a Message

```
1. User composes message in UI
   │
   ▼
2. Frontend encrypts message content
   │
   ▼
3. Generate ZK proof of encryption
   │
   ▼
4. Submit transaction to contract
   │
   ▼
5. Contract validates proof
   │
   ▼
6. Store encrypted message on-chain
   │
   ▼
7. Emit event for recipient
```

### Receiving a Message

```
1. Indexer detects new message event
   │
   ▼
2. Frontend queries message metadata
   │
   ▼
3. Retrieve encrypted content
   │
   ▼
4. Decrypt with recipient's private key
   │
   ▼
5. Verify proof of authenticity
   │
   ▼
6. Display message in inbox
```

## Privacy Architecture

### Zero-Knowledge Proofs

ZKMail uses ZK-SNARKs to prove:
- **Message Authenticity**: Sender is who they claim to be
- **Encryption Integrity**: Message is properly encrypted
- **Recipient Validity**: Message is for the intended recipient

**Without revealing:**
- Message content
- Sender identity (optional)
- Metadata (timestamps, size, etc.)

### Encryption Scheme

```
Message Flow:
┌──────────────┐
│ Plain Text   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Encrypt with │
│ Recipient's  │──────┐
│ Public Key   │      │
└──────────────┘      │
                      │
                      ▼
              ┌──────────────┐
              │ Encrypted    │
              │ Message +    │───► On-Chain Storage
              │ ZK Proof     │
              └──────────────┘
```

## Security Model

### Threat Model

**Protected Against:**
- Eavesdropping on message content
- Message tampering
- Sender impersonation
- Replay attacks

**Assumptions:**
- Recipient's private key is secure
- Proof server is honest
- Midnight Network is secure

### Key Management

- **Wallet Keys**: Managed by Midnight wallet
- **Message Keys**: Ephemeral, generated per message
- **Proof Keys**: Derived from wallet, used for ZK proofs

## Scalability Considerations

- **Message Batching**: Group multiple messages in one transaction
- **Off-chain Storage**: Store large messages off-chain with on-chain proofs
- **State Channels**: Direct peer-to-peer channels for high-frequency messaging

## Extension Points

### For Developers

1. **Custom Message Types**: Extend message schema
2. **Multi-party Messaging**: Add group chat support
3. **File Attachments**: Integrate IPFS/Arweave
4. **Advanced Proofs**: Custom verification logic
5. **UI Themes**: Create custom UI components

### Integration APIs

```typescript
// Send message
await zkmail.sendMessage({
  recipient: 'midnight1...',
  content: 'Hello, private world!',
  metadata: { priority: 'high' }
})

// Receive messages
const messages = await zkmail.getMessages({
  filter: { unread: true },
  limit: 10
})

// Verify proof
const isValid = await zkmail.verifyProof(message.proof)
```

## Performance

- **Message Send Time**: ~2-3 seconds (including proof generation)
- **Proof Verification**: ~100ms
- **Message Retrieval**: ~500ms
- **UI Responsiveness**: 60fps target

## Future Enhancements

- [ ] Group messaging support
- [ ] File attachments via IPFS
- [ ] Message read receipts (private)
- [ ] Forward secrecy
- [ ] Mobile app support
- [ ] Cross-chain bridging
