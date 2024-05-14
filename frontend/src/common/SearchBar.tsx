import useSearchLocation from '@/hooks/useSearchLocation'
import * as s from '@common/style/SearchBarStyle'
import { useRef, useState } from 'react'

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const searchInput = useRef<HTMLInputElement>()

  const { searchLocation } = useSearchLocation()

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
  return (
    <s.SearchBarContainer>
      <input
        className="input-box"
        value={searchKeyword}
        onChange={onChangeHandler}
        ref={searchInput}
        placeholder="지역 검색"
      />
      <img
        alt="검색"
        className="icon-find"
        src="/icon/icon_reading_glass.png"
        onClick={goSearch}
      />
    </s.SearchBarContainer>
  )
}

export default SearchBar
