import { useState } from 'react'
import { ContractDetailContainer } from './style/ContractDetailStyle'

type Props = { isSelect: boolean; content: string }

const ContractDetail = (props: Props) => {
  const [isSelect, setIsSelect] = useState(props.isSelect)
  const iconColor = isSelect ? '#43C259' : '#D9D9D9';
  const handleSelect =()=>{
    setIsSelect(!isSelect)
  }

  return (
    <ContractDetailContainer onClick={()=>handleSelect()}>
      <div className={`title ${isSelect ? 'select' : ''}`}>
        <div>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ marginRight: '0.5rem' }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM16.7071 6.70711C17.0976 6.31658 17.0976 5.68342 16.7071 5.29289C16.3166 4.90237 15.6834 4.90237 15.2929 5.29289L8 12.5858L4.70711 9.29289C4.31658 8.90237 3.68342 8.90237 3.29289 9.29289C2.90237 9.68342 2.90237 10.3166 3.29289 10.7071L7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L16.7071 6.70711Z"
                fill={iconColor}
              />
            </svg>
     
        </div>
        
        <div className="title-box">{props.content}</div>

      </div>
    </ContractDetailContainer>
  )
}

export default ContractDetail
