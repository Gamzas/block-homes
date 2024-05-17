// CustomPasswordModal.tsx
import React, { useState } from 'react'
import { Modal, Box, Button, TextField } from '@mui/material'
import { CustomButtonStyle } from '@/common/style/CustomButtonStyle'

const CustomPasswordModal = ({ open, handleClose, handleConfirm }) => {
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    handleConfirm(password)
    setPassword('')
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 320,
          bgcolor: 'background.paper',
          borderRadius: '1rem',
          boxShadow: 24,
          p: 4,
        }}
      >
        <div>지갑 비밀번호를 입력해주세요</div>
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <CustomButtonStyle
            $secondary={true}
            style={{ width: '5rem', height: '2.3rem', marginRight: '1rem' }}
            onClick={handleClose}
            color="secondary"
          >
            닫기
          </CustomButtonStyle>
          <CustomButtonStyle
            style={{ width: '5rem', height: '2.3rem' }}
            onClick={handleSubmit}
            color="primary"
          >
            확인
          </CustomButtonStyle>
        </div>
      </Box>
    </Modal>
  )
}

export default CustomPasswordModal
