import * as s from '@common/style/SearchBarStyle'
import { useRef, useState } from 'react'

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const searchInput = useRef<HTMLInputElement>()
  const goSearch = () => {
    if (searchKeyword.trim().length < 1) {
      alert('최소 1글자 이상 입력해주세요')
      if (searchInput.current) {
        searchInput.current.focus()
      }
      return
    } else {
      console.log('검색!!')
      return
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
