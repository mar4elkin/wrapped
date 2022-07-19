import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { PlayListsTracksProps } from '../interfaces/CPlayListTracks';

export default function PlayListTracks(props: PlayListsTracksProps) {
  return (
    <List sx={{width: '100%', bgcolor: 'background.paper'}} component="div" aria-label="track-list">
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
  )
}