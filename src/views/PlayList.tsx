import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PlayListTracks from '../components/PlayListTracks';

const Cover = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 220,
  width: 220,
  lineHeight: '120px',
  margin: 12,
  backgroundImage: `url('https://avatars.yandex.net/get-music-user-playlist/38125/r5l8zp5ysyYWqS/200x200')`,
  backgroundSize: 'cover'
}))

export default function PlayList() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
      <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <Cover></Cover>
        <Box sx={{padding:2}}>
          <Typography sx={{ textAlign: 'start'}} variant="h3" component="h4" color="textPrimary">
            Плейлист дна
          </Typography>
          <Typography sx={{ textAlign: 'start'}} variant="h5" component="h5" color="textPrimary">
            Каждый день — новый. Каждый день — ваш!
          </Typography>
          <Button sx={{marginTop: 2}} variant="contained">Listen</Button>
        </Box>
      </Box>

      </Box>
  )
}