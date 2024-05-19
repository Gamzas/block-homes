import React, { useEffect } from 'react'
import { Box, Modal } from '@mui/material'
import * as s from './style/SpecialContractStyle'
import { CustomButtonStyle } from '@/common/style/CustomButtonStyle'
import ContractDetail from './ContractDetail'
import { fetchProvision } from '@apis/chatApi'
import { useAtom } from 'jotai/index'
import {
  provisionIsCancelAtomFamily,
  provisionsAtomFamily,
} from '@stores/atoms/chat'
import { publicRequest } from '@hooks/requestMethods'
import { userAtom } from '@stores/atoms/userStore'
import { useParams } from 'react-router-dom'

interface SpecialContractProps {
  open: boolean
  handleClose: () => void
}

const SpecialContract: React.FC<SpecialContractProps> = ({
  open,
  handleClose,
}) => {
  const { chatRoomNo } = useParams()
  const [provisions, setProvisions] = useAtom(
    provisionsAtomFamily(Number(chatRoomNo)),
  )
  const [user] = useAtom(userAtom)
  const [, setIsCancel] = useAtom(
    provisionIsCancelAtomFamily(Number(chatRoomNo)),
  )

  useEffect(() => {
    if (open && Number(chatRoomNo) !== 0) {
      fetchProvision(Number(chatRoomNo))
        .then(data => {
          console.log(data)
          console.log(data.specialPreovisionList)
          if (data) {
            const newProvisions = [...provisions]
            data.specialPreovisionList?.forEach(index => {
              if (index - 1 >= 0 && index - 1 < newProvisions.length) {
                newProvisions[index - 1] = true
              }
            })
            console.log(newProvisions)
            setProvisions(newProvisions)
          }
        })
        .catch(error => {
          console.error('Error fetching provisions:', error)
        })
    }
  }, [open, chatRoomNo])

  const handleSubmit = () => {
    console.log(provisions)
    const selectedIndices = provisions
      .map((value, index) => (value ? index + 1 : null))
      .filter(index => index !== null)

    console.log(selectedIndices)

    const postProvisionProps = {
      chatRoomNo: Number(chatRoomNo),
      provisionList: selectedIndices,
      walletAddress: user.walletAddress,
    }
    publicRequest
      .post('/chatrooms/provision', postProvisionProps)
      .then(() => {
        handleClose()
      })
      .catch(error => {
        console.error('Error posting provisions:', error)
      })
  }

  const handleCancel = () => {
    setIsCancel(true)
    handleClose()
  }

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
              isSelect={provisions[0]}
              content={'잔금일까지 해당 주택에 근저당 추가 설정하지 않는다.'}
              index={0}
            />
            <ContractDetail
              isSelect={provisions[1]}
              content={
                '임차기간 중 시설물 등 노후나 하자로 인한 고장 수선비는 임대인이 부담한다.'
              }
              index={1}
            />
            <ContractDetail
              isSelect={provisions[2]}
              content={
                '계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다.'
              }
              index={2}
            />
            <ContractDetail
              isSelect={provisions[3]}
              content={
                '반려동물을 허용하고 반려동물로 인한 훼손 등은 임차인이 수리한다.'
              }
              index={3}
            />
            <ContractDetail
              isSelect={provisions[4]}
              content={
                '만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다.'
              }
              index={4}
            />
            <ContractDetail
              isSelect={provisions[5]}
              content={'월세 2개월 이상 연체 시 계약을 해지 한다.'}
              index={5}
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
              onClick={handleCancel}
            >
              취소
            </CustomButtonStyle>

            <CustomButtonStyle
              style={{ height: '2.4rem', width: '14rem' }}
              onClick={handleSubmit}
            >
              완료
            </CustomButtonStyle>
          </s.ContractFooter>
        </s.SpecialContractContainer>
      </Box>
    </Modal>
  )
}

export default SpecialContract
