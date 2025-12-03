# Getting Started with ZKMail

This guide will help you set up and run ZKMail on your local machine.

## Prerequisites

- **Node.js**: Version 22.0.0 or higher
- **Docker**: For running the proof server
- **Git**: For version control

## Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd zkmail
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
WALLET_SEED=<your-wallet-seed>
MIDNIGHT_NETWORK=testnet
PROOF_SERVER_URL=http://localhost:6300
CONTRACT_NAME=zkmail
```

### 4. Setup and Deploy

This command will compile contracts, build the project, and deploy to testnet:

```bash
npm run setup
```

## Running the Project

### Backend (Contracts & CLI)

```bash
# Start proof server (in a separate terminal)
npm run proof-server

# Run the CLI
npm run cli
```

### Frontend (UI)

```bash
# Start development server
npm run dev:ui
```

The UI will open at `http://localhost:3000`

## Getting Testnet Tokens

1. Deploy your contract to see your wallet address:
   ```bash
   npm run deploy
   ```

2. Visit the [Midnight Faucet](https://midnight.network/test-faucet)

3. Enter your wallet address to receive test tokens

## Verifying Your Setup

Check your wallet balance:

```bash
npm run check-balance
```

Check network health:

```bash
npm run health-check
```

## Next Steps

- **Send a Message**: Follow the [Send Message Tutorial](./tutorials/01-send-message.md)
- **Understand Architecture**: Read the [Architecture Overview](./02-architecture.md)
- **Explore Contracts**: Check out the [Contracts Guide](./03-contracts.md)

## Troubleshooting

### Proof Server Issues

If the proof server fails to start:

```bash
# Check Docker is running
docker ps

# Restart proof server
npm run proof-server
```

### Compilation Errors

If contract compilation fails:

```bash
# Clean and rebuild
npm run clean
npm run setup
```

### Network Connection Issues

Ensure you're connected to the correct network:

```bash
npm run health-check
```

## Getting Help

- Check [Midnight Documentation](https://docs.midnight.network)
- Open an issue on GitHub
- Join the Midnight Discord community
