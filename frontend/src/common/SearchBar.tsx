import LocationListModal from '@/components/EstateList/LocationListModal'
import useSearchLocation from '@/hooks/useSearchLocation'
import * as s from '@common/style/SearchBarStyle'
import { useRef, useState } from 'react'

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const searchInput = useRef<HTMLInputElement>()
  const {
    searchLocation,
    isModalOpen,
    locationList,
    handleSelectLocation,
    handleCloseModal,
  } = useSearchLocation()

  const goSearch = () => {
    if (searchKeyword.trim().length < 1) {
      alert('최소 1글자 이상 입력해주세요')
      searchInput.current?.focus()
    } else {
      searchLocation(searchKeyword)
      setSearchKeyword('') // 검색어 초기화
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  // 엔터 키 감지
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      // Enter 키를 감지
      searchLocation(event.target.value)
    }
  }
  return (
    <>
      <s.SearchBarContainer>
        <input
          type="text"
          className="input-box"
          value={searchKeyword}
          onChange={onChangeHandler}
          ref={searchInput}
          placeholder="지역 검색"
          onKeyDown={handleKeyDown}
        />
        <img
          alt="검색"
          className="icon-find"
          src="/icon/icon_reading_glass.png"
          onClick={goSearch}
        />
      </s.SearchBarContainer>
      {isModalOpen && (
        <LocationListModal
          locationList={locationList}
          onSelect={handleSelectLocation}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default SearchBar
