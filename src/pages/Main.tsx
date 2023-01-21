import { Button } from '@mui/material'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()
  const handleRoute = useCallback(
    (routePath: string) => {
      navigate(routePath)
    },
    [navigate],
  )
  return (
    <div>
      <Button onClick={() => handleRoute('hi')}>Hi</Button>
      <Button onClick={() => handleRoute('there')}>There</Button>
    </div>
  )
}
