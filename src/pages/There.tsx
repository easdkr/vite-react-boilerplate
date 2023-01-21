import { Button, Typography } from '@mui/material'
import { history } from 'src/settings/history'

const toHome = () => history.replace('*')

export default function There() {
  return (
    <div>
      <Typography color="HighlightText">There</Typography>
      <Button onClick={toHome}>To Home</Button>
    </div>
  )
}
