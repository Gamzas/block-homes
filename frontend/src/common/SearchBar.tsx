import * as s from '@common/style/SearchBarStyle'

const SearchBar = () => {
  return (
    <s.SearchBarContainer>
      <input className="input-box" />
      <img
        alt="검색"
        className="icon-find"
        src="/icon/icon_reading_glass.png"
      />
    </s.SearchBarContainer>
  )
}

export default SearchBar
