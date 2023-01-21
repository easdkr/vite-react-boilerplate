import { Button, Typography } from '@mui/material'
import { history } from 'src/settings/history'

const toHome = () => history.replace('*')

export default function Hi() {
  return (
    <div>
      <Typography color="HighlightText">Hi</Typography>
      <Button onClick={toHome}>To Home</Button>
    </div>
  )
}
