/**
 * Type definitions for ZKMail application
 */

export interface Message {
  id: string
  sender: string
  recipient: string
  encryptedContent: string
  proof: ZKProof
  timestamp: number
  metadata?: MessageMetadata
}

export interface MessageMetadata {
  subject?: string
  priority?: 'low' | 'medium' | 'high'
  tags?: string[]
}

export interface ZKProof {
  proofData: string
  publicInputs: string[]
  verified: boolean
}

export interface WalletState {
  address: string | null
  balance: bigint
  connected: boolean
}

export interface SendMessageParams {
  to: string
  content: string
  metadata?: MessageMetadata
}

export interface MessageFilter {
  unread?: boolean
  sender?: string
  startDate?: Date
  endDate?: Date
}

export interface ZKMailConfig {
  walletSeed?: string
  network: 'testnet' | 'mainnet'
  proofServerUrl: string
}
