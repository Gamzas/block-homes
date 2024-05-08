import React from 'react'
import * as h from '@common/style/HeaderStyle'
import { HeaderPropsType } from '@/types/components/headerType'
import SearchBar from '@common/SearchBar'
import useDownloadPDF from '@/hooks/useDownloadPdf'
import { useAtom } from 'jotai'
import { mapAtom } from '@/stores/atoms/EstateListStore'
import { useNavigate } from 'react-router-dom'

//props로 title, isSearch(bool type) rightIconSrc를 넙깁니다.
// example
// <Header
//     title="목록"
//     isSearch={false}
//     rightIconSrc="public/icon/icon_map.png"
//     onModal={handleOpen} (선택)
// />
const Header: React.FC<HeaderPropsType> = HeaderProps => {
  const downloadPdf = useDownloadPDF()
  const [menu, setMenu] = useAtom(mapAtom)
  const navigate = useNavigate()
  return (
    <h.HeaderContainer>
      <h.HeaderLeftContainer>
        <img
          className="back-arrow"
          alt="뒤로가기"
          src="/icon/icon_back_arrow.png"
          onClick={() =>
            HeaderProps.onModal ? HeaderProps.onModal() : navigate(-1)
          }
        />

        {HeaderProps.isSearch ? (
          <SearchBar />
        ) : (
          <div className="title">{HeaderProps.title}</div>
        )}
      </h.HeaderLeftContainer>

      {HeaderProps.rightIconSrc && (
        <img
          className="right-icon"
          alt="오른쪽 아이콘"
          src={`${HeaderProps.rightIconSrc}`}
          onClick={() => {
            if (HeaderProps.rightIconSrc === '/icon/icon_download.png') {
              downloadPdf('paperContainer', 'contract.pdf')
            } else if (
              HeaderProps.rightIconSrc == '/icon/icon_map.png' ||
              HeaderProps.rightIconSrc == '/icon/icon_list.png'
            ) {
              setMenu(!menu)
            }
          }}
        />
      )}
    </h.HeaderContainer>
  )
}

export default Header
