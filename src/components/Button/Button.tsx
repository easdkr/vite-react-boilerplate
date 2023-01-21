import { ButtonStyle } from 'src/components/Button/styles/Button.styles'
import { ButtonProps } from 'src/components/Button/types/Button.props'

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} style={ButtonStyle}>
      {text}
    </button>
  )
}
