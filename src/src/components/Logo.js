import AdbIcon from '@mui/icons-material/Adb'
import Typography from '@mui/material/Typography'

export default function Logo () {
  return (
    <>
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        component="a"
        href="/"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>
    </>
  )
}