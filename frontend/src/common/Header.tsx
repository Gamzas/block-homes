import React from 'react'
import * as h from '@common/style/HeaderStyle'
import { HeaderPropsType } from '@/types/header'

const Header: React.FC<HeaderPropsType> = HeaderProps => {
  return (
    <h.HeaderContainer>
      <img
        className="back-arrow"
        alt="뒤로가기"
        src="public/icon/icon_back_arrow.png"
      />
      {HeaderProps.isSearch ? (
        <div className="title">{HeaderProps.title}</div>
      ) : (
        <h.SearchContainer></h.SearchContainer>
      )}
      {HeaderProps.rightIconSrc && (
        <img
          className="right-icon"
          alt="오른쪽 아이콘"
          src={`${HeaderProps.rightIconSrc}`}
        />
      )}
    </h.HeaderContainer>
  )
}

export default Header
