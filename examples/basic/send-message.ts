/**
 * Basic Example: Send a Private Message
 *
 * This example demonstrates how to send an encrypted message
 * with zero-knowledge proof verification.
 */

import dotenv from 'dotenv'
import chalk from 'chalk'

// Load environment variables
dotenv.config()

async function main() {
  console.log(chalk.blue('🚀 ZKMail - Send Message Example\n'))

  // TODO: Import and initialize ZKMail client
  // const zkmail = await ZKMail.create({
  //   walletSeed: process.env.WALLET_SEED!,
  //   network: 'testnet',
  //   proofServerUrl: process.env.PROOF_SERVER_URL
  // })

  // Example recipient (replace with actual address)
  const recipient = 'midnight1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  const message = 'Hello from ZKMail! This is a private message.'

  console.log(chalk.yellow('Preparing message...'))
  console.log(`To: ${chalk.cyan(recipient)}`)
  console.log(`Content: ${chalk.green(message)}\n`)

  try {
    // TODO: Implement message sending
    // console.log(chalk.yellow('Encrypting message...'))
    // const encrypted = await zkmail.encrypt(message, recipient)

    // console.log(chalk.yellow('Generating zero-knowledge proof...'))
    // const proof = await zkmail.generateProof(encrypted)

    // console.log(chalk.yellow('Sending to blockchain...'))
    // const txHash = await zkmail.sendMessage({
    //   to: recipient,
    //   content: encrypted,
    //   proof: proof
    // })

    // console.log(chalk.green('\n✅ Message sent successfully!'))
    // console.log(`Transaction: ${chalk.blue(txHash)}`)

    console.log(chalk.yellow('\n⚠️  This is a template. Implement ZKMail client to enable functionality.'))

  } catch (error) {
    console.error(chalk.red('\n❌ Error sending message:'), error)
    process.exit(1)
  }
}

main()
  .then(() => {
    console.log(chalk.green('\n✨ Example completed'))
    process.exit(0)
  })
  .catch((error) => {
    console.error(chalk.red('Fatal error:'), error)
    process.exit(1)
  })
