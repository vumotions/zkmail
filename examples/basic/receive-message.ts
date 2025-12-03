/**
 * Basic Example: Receive and Decrypt Messages
 *
 * This example demonstrates how to query and decrypt
 * messages sent to your address.
 */

import dotenv from 'dotenv'
import chalk from 'chalk'

dotenv.config()

async function main() {
  console.log(chalk.blue('📬 ZKMail - Receive Messages Example\n'))

  // TODO: Initialize ZKMail client
  // const zkmail = await ZKMail.create({
  //   walletSeed: process.env.WALLET_SEED!,
  //   network: 'testnet'
  // })

  try {
    console.log(chalk.yellow('Fetching messages...\n'))

    // TODO: Implement message retrieval
    // const messages = await zkmail.getMessages({
    //   filter: { unread: true },
    //   limit: 10
    // })

    // if (messages.length === 0) {
    //   console.log(chalk.gray('No messages found.'))
    //   return
    // }

    // console.log(chalk.green(`Found ${messages.length} message(s):\n`))

    // for (const [index, msg] of messages.entries()) {
    //   console.log(chalk.cyan(`Message ${index + 1}:`))
    //   console.log(`  From: ${chalk.yellow(msg.sender)}`)
    //   console.log(`  Time: ${chalk.gray(new Date(msg.timestamp).toLocaleString())}`)
    //
    //   // Decrypt message
    //   const decrypted = await zkmail.decrypt(msg.content)
    //   console.log(`  Content: ${chalk.green(decrypted)}`)
    //
    //   // Verify proof
    //   const isValid = await zkmail.verifyProof(msg.proof)
    //   console.log(`  Verified: ${isValid ? chalk.green('✓') : chalk.red('✗')}\n`)
    // }

    console.log(chalk.yellow('⚠️  This is a template. Implement ZKMail client to enable functionality.'))

  } catch (error) {
    console.error(chalk.red('\n❌ Error receiving messages:'), error)
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
