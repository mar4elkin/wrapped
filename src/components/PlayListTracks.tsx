import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

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

export default function PlayListTracks() {
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
      <List sx={style} component="div" aria-label="track-list">
        {[...Array(8)].map((elevation) => (
          <Fragment>
            <ListItem button sx={{justifyContent: 'space-between'}} >
              <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{
                  background: `url('https://avatars.yandex.net/get-music-content/176019/551e35ad.a.8504281-1/50x50')`,
                  width: 50,
                  height: 50
                  }}
                >
                </Box>
                <ListItemText primary="Культ тела " secondary="Буерак" sx={{color: '#fff', paddingLeft: 2}} />
              </Box>
              <ListItemText primary="2:40" sx={{color: '#fff', maxWidth: 100}} />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  )
}