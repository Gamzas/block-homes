const InfoSafeList = () => {
  const InfoSafeContents = [
    {
      title: '스마트컨트랙트를 활용한 거래 자동화 시스템 구축',
      content:
        '거래가 정해진 조건을 <span class="bold-text">만족</span>할 때 (거래자 양측이 모두<br />' +
        '서명했을 경우)에만 실행되도록 설계되어있습니다.<br />' +
        '계약이 완료될 경우 매수자에게 모든 권한이 <span class="bold-text">위임 </span>되고<br />' +
        '이는  <span class="bold-text">블록체인 </span>에 기록 됩니다.',
    },
    {
      title: '신원 인증 및 디지털 신원 확인 (DID)',
      content:
        '모든 사용자는 가입 후 <span class="bold-text">디지털 신원 확인 절차</span>를 거쳐야<br />' +
        '합니다. 이 과정을 통해, 신원을 <span class="bold-text">명확</span>하게 확인하고<br /> ' +
        '거래 기록을 블록체인에 안전하게 저장하여 <span class="bold-text">허위 신원</span>을 <br />' +
        '이용한 사기를 방지합니다. <br /><br />' +
        '또한, 신원 정보는 DID 기술을 통해 <span class="bold-text">분산 관리</span>되므로,<br />' +
        ' 사용자의 개인 정보를 <span class="bold-text">보호</span>하고 <span class="bold-text">신뢰성</span>을 제공합니다. <br />',
    },
    {
      title: '부동산 고유 식별자 등록',
      content:
        '모든 부동산 매물은 <span class="bold-text">고유 식별자</span>와 함께 등록되며,<br />' +
        '이 식별자는 해당 부동산의 위치, 크기, 법적 상태 등<br />' +
        '<span class="bold-text">상세 정보</span>를 포함합니다.<br />' +
        '이 정보는 블록체인에 기록되어 <span class="bold-text">정확성</span>과 <span class="bold-text">투명성을</span> <br />' +
        '보증하며, <span class="bold-text">거짓된 정보</span>가 없도록 매물을 관리합니다.',
    },
    {
      title: '부동산 소유권 증명',
      content:
        '부동산의 소유권은 <span class="bold-text">검증 가능한</span> 크리덴셜(VC)을 \n' +
        '사용하여 디지털 형태로 증명됩니다. \n' +
        '이 크리덴셜은 소유자의 신원과 함께 블록체인에 \n' +
        '안전하게 저장되어, 소유권 이전이 <span class="bold-text">명확</span>하고 \n' +
        '검증 가능하게 이루어집니다. \n' +
        '이러한 방식은 거래의 <span class="bold-text">투명성</span>을 높이고, \n' +
        '<span class="bold-text">소유권 관련 분쟁</span>을 최소화하는 데 기여합니다.',
    },
  ]

  return (
    <>
      {InfoSafeContents.map((InfoSafeContent, index) => (
        <InfoSafeComponent {...InfoSafeContent} index={index} />
      ))}
    </>
  )
}

export default InfoSafeList
