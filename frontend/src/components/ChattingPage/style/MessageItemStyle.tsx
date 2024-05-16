import styled from 'styled-components'

export const MessageItemContainer = styled.div`
  display: flex;
`

export const MessageItemWrap = styled.div<{ $me: boolean }>`
  display: flex;
  margin-left: ${props => props.$me && 'auto'};
  flex-direction: ${props => props.$me && 'row-reverse'};
  max-width: 100%;
  margin-bottom: 14px;

  span {
    font-size: 0.7em;
    margin-top: auto;
    padding-bottom: 2px;
    padding-left: ${props => props.$me && '30px'};
    padding-right: ${props => !props.$me && '30px'};
    margin-left: ${props => !props.$me && '4px'};
    margin-right: ${props => props.$me && '4px'};
    color: #555;
  }
`

export const MessageBox = styled.div<{ $me: boolean }>`
  display: flex;
  padding: 6px 10px;
  border-radius: 10px;
  background-color: ${props => (props.$me ? '#845BD3' : '#F2F3F6')};
  color: ${props => (props.$me ? '#fff' : '#000')};
  justify-content: center;
  word-break: break-word;
  line-height: 1.2;
  font-size: 0.9em;
`

export const NoticeMessageBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #e5f5fd;
  color: #00adff;
  line-height: 1.2;
  border-radius: 6px;
  font-size: 0.9em;

  b {
    font-weight: 500;
  }
`
