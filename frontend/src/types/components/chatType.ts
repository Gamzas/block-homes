import React from 'react'

export type MessageType = {
  chatNo: number
  chatRoomNo: number
  senderWalletAddress: string
  senderName: string
  messageType: number
  image: string
  contractStep: number
  message: string
}

export interface SendMessageInputPropsType {
  sendButtonClick: () => void
  message: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
