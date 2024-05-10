import styled from 'styled-components'

const BoldText = styled.span`
  font-weight: bold;
`

const TextWithBold = ({ text }) => {
  const parts = text.split(/(\[\[|\]\])/)
  let inBold = false
  const output = []

  parts.forEach((part, index) => {
    if (part === '[[') {
      inBold = true
    } else if (part === ']]') {
      inBold = false
    } else {
      if (inBold) {
        output.push(<BoldText key={index}>{part}</BoldText>)
      } else {
        output.push(part)
      }
    }
  })

  return <>{output}</>
}

export default TextWithBold
