import React from 'react'
import { Box, Modal } from '@mui/material'
import * as s from './style/SpecialContractStyle'
import { CustomButtonStyle } from '@/common/style/CustomButtonStyle'
import ContractDetail from './ContractDetail'

interface SpecialContractProps {
  open: boolean
  handleClose: () => void
}

const SpecialContract: React.FC<SpecialContractProps> = ({
  open,
  handleClose,
}) => {
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
          width: 335,
          bgcolor: 'background.paper',
          borderRadius: '1rem',
          boxShadow: 24,
          p: 3,
        }}
      >
        <s.SpecialContractContainer>
          <s.ContractHeader> 특약 사항 작성</s.ContractHeader>
          <s.ContractMain>
            <ContractDetail
              isSelect={false}
              content={'잔금일까지 해당 주택에 근저당 추가 설정하지 않는다.'}
            />
            <ContractDetail
              isSelect={false}
              content={
                '임차기간 중 시설물 등 노후나 하자로 인한 고장 수선비는 임대인이 부담한다.'
              }
            />
            <ContractDetail
              isSelect={false}
              content={
                '계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다.'
              }
            />
            <ContractDetail
              isSelect={false}
              content={
                '반려동물을 허용하고 반려동물로 인한 훼손 등은 임차인이 수리한다.'
              }
            />
            <ContractDetail
              isSelect={false}
              content={
                '만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다.'
              }
            />
            <ContractDetail
              isSelect={false}
              content={'월세 2개월 이상 연체 시 계약을 해지 한다.'}
            />
          </s.ContractMain>
          <s.ContractFooter>
            <CustomButtonStyle
              $secondary={true}
              style={{
                height: '2.4rem',
                width: '14rem',
                marginBottom: '0.6rem',
              }}
              onClick={() => handleClose()}
            >
              취소
            </CustomButtonStyle>

            <CustomButtonStyle style={{ height: '2.4rem', width: '14rem' }}>
              {' '}
              완료
            </CustomButtonStyle>
          </s.ContractFooter>
        </s.SpecialContractContainer>
      </Box>
    </Modal>
  )
}

export default SpecialContract
