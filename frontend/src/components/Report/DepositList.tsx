import { useState } from 'react'
import {
  DepositDetailContainer,
  DepositListContainer,
} from './style/DepositListStyle'

const DepositList = () => {
  const [isCharterVisible, setIsCharterVisible] = useState(true)
  const [isAuctionVisible, setIsAuctionVisible] = useState(true)

  return (
    <DepositListContainer>
      <div className="title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 27 27"
          fill="none"
        >
          <g clip-path="url(#clip0_323_1175)">
            <path
              d="M3.79687 19.222V16.1553L0.858993 5.88947C0.830742 5.79359 0.841161 5.69046 0.88802 5.60218C0.934879 5.51389 1.01445 5.44746 1.10969 5.41713L3.79687 4.60857V3.72754L0.866614 4.60922C0.559523 4.70422 0.301851 4.91571 0.148798 5.19838C-0.00425477 5.48105 -0.0405138 5.81243 0.0477888 6.12151L3.79687 19.222ZM26.1334 4.60922L23.2031 3.72754V4.60857L25.8903 5.41713C25.9855 5.44745 26.0651 5.51385 26.112 5.60212C26.1588 5.69039 26.1692 5.7935 26.141 5.88937L23.2031 16.1553V19.222L26.9522 6.12142C27.0405 5.81235 27.0042 5.48099 26.8512 5.19833C26.6981 4.91568 26.4405 4.7042 26.1334 4.60922ZM21.6063 22.887H20.2648V22.7858C20.2653 22.7229 20.2603 22.6601 20.25 22.5981C20.2419 22.423 20.1789 22.255 20.0698 22.1179C19.9608 21.9808 19.8112 21.8816 19.6425 21.8345C19.7369 21.2487 19.9279 20.6827 20.2078 20.1596L20.2162 20.1448C20.4652 19.8995 20.6627 19.6068 20.7971 19.2841C20.9315 18.9613 21.0001 18.615 20.9988 18.2654C20.9999 17.8233 20.891 17.3878 20.6818 16.9983C20.4726 16.6088 20.1698 16.2774 19.8006 16.0341C19.4314 15.7909 19.0075 15.6433 18.567 15.6047C18.1266 15.5662 17.6835 15.6378 17.2776 15.8133C16.8718 15.9887 16.516 16.2624 16.2423 16.6096C15.9686 16.9569 15.7857 17.3668 15.7099 17.8024C15.6342 18.238 15.6681 18.6856 15.8085 19.1048C15.9489 19.5241 16.1915 19.9018 16.5143 20.2039L16.5206 20.2145C16.7854 20.7224 16.9676 21.2692 17.0606 21.8345C16.6999 21.9019 16.4384 22.288 16.4384 22.7858V22.887H15.0968C14.8415 22.8872 14.5968 22.9885 14.4161 23.1688C14.2354 23.3491 14.1335 23.5937 14.1328 23.8489V25.1947C14.1322 25.3661 14.1781 25.5346 14.2657 25.682C14.3514 25.8262 14.473 25.9457 14.6187 26.0288C14.7643 26.112 14.9291 26.156 15.0968 26.1566H21.6063C21.8616 26.1564 22.1064 26.0551 22.287 25.8748C22.4677 25.6945 22.5696 25.4499 22.5703 25.1947V23.8489C22.5696 23.5937 22.4677 23.3491 22.287 23.1688C22.1064 22.9885 21.8616 22.8872 21.6063 22.887ZM21.7266 25.1947C21.7261 25.2263 21.7133 25.2564 21.6907 25.2785C21.6682 25.3006 21.6379 25.3129 21.6063 25.3128H15.0968C15.081 25.3129 15.0654 25.3098 15.0509 25.3036C15.0364 25.2974 15.0233 25.2884 15.0124 25.277C15.001 25.2665 14.9919 25.2538 14.9857 25.2396C14.9796 25.2255 14.9764 25.2102 14.9766 25.1947V23.8489C14.977 23.8173 14.9899 23.7872 15.0124 23.7651C15.0349 23.743 15.0652 23.7307 15.0968 23.7308H16.8602C16.972 23.7305 17.0791 23.6859 17.1582 23.6069C17.2372 23.5278 17.2818 23.4207 17.2821 23.3089V22.7858C17.2813 22.7459 17.2863 22.7061 17.2969 22.6677H17.5373C17.5962 22.6677 17.6545 22.6553 17.7083 22.6314C17.7621 22.6074 17.8102 22.5723 17.8495 22.5284C17.8894 22.4854 17.9196 22.4344 17.9382 22.3787C17.9568 22.323 17.9632 22.2641 17.9571 22.2057C17.8922 21.3837 17.6627 20.5831 17.2821 19.8516L17.2399 19.7652C17.2155 19.7127 17.1802 19.666 17.1366 19.6281C16.9096 19.4272 16.7366 19.1727 16.6332 18.8878C16.5299 18.6029 16.4995 18.2967 16.5449 17.997C16.5902 17.6974 16.7099 17.4138 16.893 17.1723C17.076 16.9307 17.3166 16.7389 17.5928 16.6142C17.8691 16.4895 18.1721 16.4359 18.4743 16.4584C18.7766 16.4809 19.0684 16.5786 19.3231 16.7428C19.5779 16.907 19.7875 17.1323 19.9328 17.3983C20.0781 17.6642 20.1545 17.9623 20.1551 18.2654C20.1562 18.5129 20.1057 18.758 20.007 18.985C19.9082 19.2119 19.7632 19.4159 19.5813 19.5838C19.544 19.6196 19.5133 19.6617 19.4906 19.7082L19.4505 19.7884C19.0535 20.5377 18.8137 21.3603 18.746 22.2057C18.7399 22.2641 18.7464 22.323 18.7649 22.3787C18.7835 22.4344 18.8137 22.4854 18.8536 22.5284C18.8929 22.5723 18.941 22.6074 18.9948 22.6314C19.0486 22.6553 19.1069 22.6677 19.1658 22.6677H19.4062C19.4168 22.7061 19.4218 22.7459 19.421 22.7858V23.3089C19.4213 23.4207 19.4659 23.5278 19.5449 23.6069C19.624 23.6859 19.7311 23.7305 19.8429 23.7308H21.6063C21.6379 23.7307 21.6682 23.743 21.6907 23.7651C21.7133 23.7872 21.7261 23.8173 21.7266 23.8489V25.1947Z"
              fill="#845BD3"
            />
            <path
              d="M5.90625 26.1562H13.5696C13.3865 25.8688 13.2892 25.5349 13.2891 25.1941V23.8489C13.2899 23.3698 13.4807 22.9106 13.8196 22.5721C14.1586 22.2335 14.618 22.0432 15.0971 22.043H15.7291C15.8142 21.8183 15.9439 21.6132 16.1104 21.4399C16.0326 21.1858 15.9345 20.9383 15.8168 20.7C15.1821 20.0485 14.8267 19.1752 14.826 18.2657C14.826 18.1523 14.8324 18.0404 14.8431 17.9297H8.4375C8.32561 17.9297 8.21831 17.8852 8.13919 17.8061C8.06007 17.727 8.01562 17.6197 8.01562 17.5078C8.01562 17.3959 8.06007 17.2886 8.13919 17.2095C8.21831 17.1304 8.32561 17.0859 8.4375 17.0859H15.0355C15.1436 16.7862 15.2923 16.5027 15.4774 16.2434L15.4758 16.2422H8.4375C8.32561 16.2422 8.21831 16.1977 8.13919 16.1186C8.06007 16.0395 8.01562 15.9322 8.01562 15.8203C8.01562 15.7084 8.06007 15.6011 8.13919 15.522C8.21831 15.4429 8.32561 15.3984 8.4375 15.3984H16.3284C17.0348 14.9011 17.9002 14.6825 18.758 14.7849C19.6159 14.8873 20.4056 15.3033 20.9751 15.9529C21.5446 16.6026 21.8537 17.4399 21.8429 18.3038C21.8321 19.1677 21.5022 19.997 20.9166 20.6322C20.7843 20.8906 20.6754 21.1603 20.5913 21.4382C20.7585 21.6118 20.8887 21.8176 20.9741 22.043H21.6063L21.6087 22.0431C21.6732 22.0433 21.7376 22.0469 21.8017 22.054C21.8086 22.0548 21.8153 22.0563 21.8222 22.0571C22.0081 22.0795 22.1894 22.1308 22.3594 22.2093V2.10938C22.3591 1.77379 22.2257 1.45203 21.9884 1.21474C21.7511 0.977444 21.4293 0.844016 21.0938 0.84375H5.90625C5.57067 0.844016 5.2489 0.977444 5.01161 1.21474C4.77432 1.45203 4.64089 1.77379 4.64062 2.10938V24.8906C4.64089 25.2262 4.77432 25.548 5.01161 25.7853C5.2489 26.0226 5.57067 26.156 5.90625 26.1562ZM8.4375 3.58594H18.5625C18.6744 3.58594 18.7817 3.63038 18.8608 3.7095C18.9399 3.78862 18.9844 3.89592 18.9844 4.00781C18.9844 4.1197 18.9399 4.22701 18.8608 4.30612C18.7817 4.38524 18.6744 4.42969 18.5625 4.42969H8.4375C8.32561 4.42969 8.21831 4.38524 8.13919 4.30612C8.06007 4.22701 8.01562 4.1197 8.01562 4.00781C8.01562 3.89592 8.06007 3.78862 8.13919 3.7095C8.21831 3.63038 8.32561 3.58594 8.4375 3.58594ZM8.4375 5.27344H18.5625C18.6744 5.27344 18.7817 5.31788 18.8608 5.397C18.9399 5.47612 18.9844 5.58342 18.9844 5.69531C18.9844 5.8072 18.9399 5.91451 18.8608 5.99362C18.7817 6.07274 18.6744 6.11719 18.5625 6.11719H8.4375C8.32561 6.11719 8.21831 6.07274 8.13919 5.99362C8.06007 5.91451 8.01562 5.8072 8.01562 5.69531C8.01562 5.58342 8.06007 5.47612 8.13919 5.397C8.21831 5.31788 8.32561 5.27344 8.4375 5.27344ZM8.4375 6.96094H18.5625C18.6744 6.96094 18.7817 7.00538 18.8608 7.0845C18.9399 7.16362 18.9844 7.27092 18.9844 7.38281C18.9844 7.4947 18.9399 7.60201 18.8608 7.68112C18.7817 7.76024 18.6744 7.80469 18.5625 7.80469H8.4375C8.32561 7.80469 8.21831 7.76024 8.13919 7.68112C8.06007 7.60201 8.01562 7.4947 8.01562 7.38281C8.01562 7.27092 8.06007 7.16362 8.13919 7.0845C8.21831 7.00538 8.32561 6.96094 8.4375 6.96094ZM8.4375 8.64844H18.5625C18.6744 8.64844 18.7817 8.69288 18.8608 8.772C18.9399 8.85112 18.9844 8.95842 18.9844 9.07031C18.9844 9.1822 18.9399 9.28951 18.8608 9.36862C18.7817 9.44774 18.6744 9.49219 18.5625 9.49219H8.4375C8.32561 9.49219 8.21831 9.44774 8.13919 9.36862C8.06007 9.28951 8.01562 9.1822 8.01562 9.07031C8.01562 8.95842 8.06007 8.85112 8.13919 8.772C8.21831 8.69288 8.32561 8.64844 8.4375 8.64844ZM8.4375 10.3359H18.5625C18.6744 10.3359 18.7817 10.3804 18.8608 10.4595C18.9399 10.5386 18.9844 10.6459 18.9844 10.7578C18.9844 10.8697 18.9399 10.977 18.8608 11.0561C18.7817 11.1352 18.6744 11.1797 18.5625 11.1797H8.4375C8.32561 11.1797 8.21831 11.1352 8.13919 11.0561C8.06007 10.977 8.01562 10.8697 8.01562 10.7578C8.01562 10.6459 8.06007 10.5386 8.13919 10.4595C8.21831 10.3804 8.32561 10.3359 8.4375 10.3359ZM8.4375 12.0234H18.5625C18.6744 12.0234 18.7817 12.0679 18.8608 12.147C18.9399 12.2261 18.9844 12.3334 18.9844 12.4453C18.9844 12.5572 18.9399 12.6645 18.8608 12.7436C18.7817 12.8227 18.6744 12.8672 18.5625 12.8672H8.4375C8.32561 12.8672 8.21831 12.8227 8.13919 12.7436C8.06007 12.6645 8.01562 12.5572 8.01562 12.4453C8.01562 12.3334 8.06007 12.2261 8.13919 12.147C8.21831 12.0679 8.32561 12.0234 8.4375 12.0234ZM8.4375 13.7109H18.5625C18.6744 13.7109 18.7817 13.7554 18.8608 13.8345C18.9399 13.9136 18.9844 14.0209 18.9844 14.1328C18.9844 14.2447 18.9399 14.352 18.8608 14.4311C18.7817 14.5102 18.6744 14.5547 18.5625 14.5547H8.4375C8.32561 14.5547 8.21831 14.5102 8.13919 14.4311C8.06007 14.352 8.01562 14.2447 8.01562 14.1328C8.01562 14.0209 8.06007 13.9136 8.13919 13.8345C8.21831 13.7554 8.32561 13.7109 8.4375 13.7109ZM8.11055 20.7394C8.13035 20.6877 8.16014 20.6405 8.19821 20.6003C8.23628 20.5602 8.28188 20.5279 8.33242 20.5054C8.38295 20.4828 8.43743 20.4705 8.49274 20.469C8.54805 20.4676 8.6031 20.477 8.65477 20.4968C8.70643 20.5166 8.75368 20.5464 8.79383 20.5845C8.83398 20.6225 8.86624 20.6681 8.88877 20.7187C8.91129 20.7692 8.92364 20.8237 8.92511 20.879C8.92659 20.9343 8.91715 20.9894 8.89734 21.041C8.70117 21.5557 8.59359 22.1885 8.67164 22.3594C8.69211 22.3596 8.71256 22.3582 8.73281 22.3552C9.07242 22.3024 9.24117 22.0008 9.47953 21.5093C9.69891 21.0516 9.94992 20.5348 10.53 20.4715C11.2514 20.3955 11.4581 21.098 11.5678 21.4777C11.5805 21.522 11.5973 21.5768 11.6121 21.6295C11.7784 21.3484 11.9061 21.0461 11.9918 20.7309C12.1816 20.153 12.3609 19.6087 12.8102 19.4484C12.9271 19.4086 13.0518 19.3972 13.1739 19.4152C13.2961 19.4331 13.4122 19.48 13.5127 19.5518C13.6062 19.6103 13.673 19.7031 13.6988 19.8104C13.7247 19.9176 13.7075 20.0307 13.6509 20.1254C13.5943 20.2201 13.5028 20.2888 13.3962 20.3168C13.2895 20.3449 13.1761 20.33 13.0802 20.2753C12.9604 20.5047 12.8643 20.7457 12.7934 20.9946C12.6035 21.5684 12.4095 22.1611 11.9644 22.4353C11.8699 22.5036 11.7604 22.548 11.6451 22.5649C11.5298 22.5818 11.4121 22.5706 11.302 22.5323C10.9561 22.3995 10.8506 22.0345 10.7578 21.7139C10.7244 21.575 10.6748 21.4405 10.6101 21.3131C10.492 21.3532 10.3507 21.6422 10.2389 21.8763C9.99632 22.3784 9.66304 23.0681 8.85936 23.1884C8.80011 23.1983 8.74014 23.2032 8.68007 23.2031C8.5547 23.2073 8.43007 23.1824 8.3159 23.1305C8.20174 23.0785 8.10113 23.0009 8.02194 22.9036C7.55367 22.3214 7.97133 21.1001 8.11055 20.7394Z"
              fill="#845BD3"
            />
          </g>
          <defs>
            <clipPath id="clip0_323_1175">
              <rect width="27" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
        &nbsp;&nbsp;해당 매물의 보증금은 적절할까요?
      </div>
      <DepositDetailContainer>
        <div className="deposit-text">
          <div className='deposit-text-box' >
            선순위 채권 없이 <span style={{color:'#00B2B8'}}>2.57억원 이하</span>의 보증금으로
            <br /> 전세계약을 권유드립니다.
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            className={isCharterVisible ? 'rotate-arrow' : ''}
            onClick={() => {
              setIsCharterVisible(!isCharterVisible)
            }}
          >
            <path
              d="M0.738332 9.045C0.93758 9.25591 1.20778 9.37439 1.48952 9.37439C1.77126 9.37439 2.04146 9.25591 2.24071 9.045L7.50008 3.47625L12.7595 9.045C12.9598 9.24993 13.2282 9.36332 13.5068 9.36076C13.7854 9.3582 14.0519 9.23988 14.2489 9.0313C14.4459 8.82271 14.5576 8.54055 14.56 8.24558C14.5625 7.95061 14.4554 7.66643 14.2618 7.45425L8.25127 1.09013C8.05202 0.879222 7.78182 0.760742 7.50008 0.760742C7.21834 0.760742 6.94814 0.879222 6.74889 1.09013L0.738332 7.45425C0.539144 7.66522 0.427246 7.95132 0.427246 8.24963C0.427246 8.54794 0.539144 8.83403 0.738332 9.045Z"
              fill="#808080"
            />
          </svg>
        </div>
        <div
          className={`deposit-explain ${isCharterVisible ? `` : 'isVisible'}`}
        >
          <div className='text-top'>매매시세 평균 <span style={{color:'#00B2B8'}}>3.63 억원</span></div>
          <div className='text-middle'>x</div>
          <div className='text-bottom'>해당 지역 전세가율 <span style={{color:'#00B2B8'}}>70.7% 기준</span></div>
        </div>
      </DepositDetailContainer>
      <DepositDetailContainer>
        <div className="line"></div>
        <div className="deposit-text">
          <div className='deposit-text-box'>
            보증금이 <span style={{color:' #FE754E'}}>3.06억원을 초과</span>하는 경우
            <br /> 경매발생 시 보증금 회수가 어려울 수 있습니다.
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            onClick={() => {
              setIsAuctionVisible(!isAuctionVisible)
            }}
            className={isAuctionVisible ? 'rotate-arrow':''}
          >
            <path
              d="M0.738332 9.045C0.93758 9.25591 1.20778 9.37439 1.48952 9.37439C1.77126 9.37439 2.04146 9.25591 2.24071 9.045L7.50008 3.47625L12.7595 9.045C12.9598 9.24993 13.2282 9.36332 13.5068 9.36076C13.7854 9.3582 14.0519 9.23988 14.2489 9.0313C14.4459 8.82271 14.5576 8.54055 14.56 8.24558C14.5625 7.95061 14.4554 7.66643 14.2618 7.45425L8.25127 1.09013C8.05202 0.879222 7.78182 0.760742 7.50008 0.760742C7.21834 0.760742 6.94814 0.879222 6.74889 1.09013L0.738332 7.45425C0.539144 7.66522 0.427246 7.95132 0.427246 8.24963C0.427246 8.54794 0.539144 8.83403 0.738332 9.045Z"
              fill="#808080"
            />
          </svg>
        </div>
        <div
          className={`deposit-explain ${isAuctionVisible ? `` : 'isVisible'}`}
        >
          <div className='text-top'>매매시세 평균 <span style={{color:'#FE754E'}}>3.63 억원</span></div>
          <div className='text-middle'>x</div>
          <div className='text-bottom'>해당 경매낙찰가율 <span style={{color:' #FE754E'}}>84.2% 기준</span></div>
        </div>
      </DepositDetailContainer>
    </DepositListContainer>
  )
}

export default DepositList
