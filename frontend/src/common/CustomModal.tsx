import React from 'react'
import { Modal, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CustomButtonStyle } from './style/CustomButtonStyle'

// <CustomModal open={모달상태}
// handleClose={모달닫기함수} title={모달제목}
// description={모달 세부설명} />

interface CustomModalProps {
  open: boolean
  handleClose: () => void
  title: string
  description: string
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  handleClose,
  title,
  description,
}) => {
  const navigate = useNavigate()
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 310,
          bgcolor: 'background.paper',
          borderRadius: '1rem',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="modal-modal-title" style={{ marginBottom: '0.5rem' }}>
          {title}
        </h2>
        <p id="modal-modal-description" style={{ marginBottom: '1rem' }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButtonStyle
            style={{ width: '5rem', height: '2.3rem', marginRight: '1rem' }}
            onClick={() => navigate(-1)}
          >
            네
          </CustomButtonStyle>
          <CustomButtonStyle
            $secondary={true}
            style={{ width: '5rem', height: '2.3rem' }}
            onClick={handleClose}
          >
            아니요
          </CustomButtonStyle>
        </div>
      </Box>
    </Modal>
  )
}

export default CustomModal
