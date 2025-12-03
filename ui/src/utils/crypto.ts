/**
 * Cryptographic utilities for message encryption/decryption
 * Using TweetNaCl for encryption
 */

import nacl from 'tweetnacl'
import { decodeUTF8, encodeUTF8, encodeBase64, decodeBase64 } from 'tweetnacl-util'

/**
 * Generate a new keypair for encryption
 */
export function generateKeyPair() {
  return nacl.box.keyPair()
}

/**
 * Encrypt a message for a recipient
 */
export function encryptMessage(
  message: string,
  recipientPublicKey: Uint8Array,
  senderSecretKey: Uint8Array
): string {
  const nonce = nacl.randomBytes(nacl.box.nonceLength)
  const messageUint8 = decodeUTF8(message)

  const encrypted = nacl.box(
    messageUint8,
    nonce,
    recipientPublicKey,
    senderSecretKey
  )

  const fullMessage = new Uint8Array(nonce.length + encrypted.length)
  fullMessage.set(nonce)
  fullMessage.set(encrypted, nonce.length)

  return encodeBase64(fullMessage)
}

/**
 * Decrypt a message from a sender
 */
export function decryptMessage(
  encryptedMessage: string,
  senderPublicKey: Uint8Array,
  recipientSecretKey: Uint8Array
): string | null {
  const messageWithNonce = decodeBase64(encryptedMessage)
  const nonce = messageWithNonce.slice(0, nacl.box.nonceLength)
  const message = messageWithNonce.slice(nacl.box.nonceLength)

  const decrypted = nacl.box.open(
    message,
    nonce,
    senderPublicKey,
    recipientSecretKey
  )

  if (!decrypted) {
    return null
  }

  return encodeUTF8(decrypted)
}

/**
 * Hash a message for proof generation
 */
export function hashMessage(message: string): Uint8Array {
  // TODO: Replace with proper hash function from @noble/hashes
  const msgUint8 = decodeUTF8(message)
  return nacl.hash(msgUint8).slice(0, 32)
}

/**
 * Verify a signature
 */
export function verifySignature(
  message: Uint8Array,
  signature: Uint8Array,
  publicKey: Uint8Array
): boolean {
  return nacl.sign.detached.verify(message, signature, publicKey)
}
