import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlayListViews from '../components/PlayListsView';
import { GenPlaylists } from '../interfaces/VFeed';

export default function Feed() {
  
  let GenPlaylistsObject: Array<GenPlaylists> = []
  const [getGenPlaylists, setGenPlaylists] = useState(GenPlaylistsObject)

  useEffect(() => {
    fetch('http://localhost:5000/feed/')
    .then(res => res.json())
    .then(data => {
      setGenPlaylists(data.generated_playlists)
    })
    .catch(err => console.warn(err))
  }, [])

  return (
    <Box>
      <Typography sx={{ textAlign: 'start', padding:2 }} variant="h2" component="h3" color="textPrimary">
        Feed
      </Typography>
      <Box sx={{
        display: 'flex', 
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        justifyContent: 'flex-start'
      }}
      >
        {getGenPlaylists.map((el: GenPlaylists, index: number) => {
          let img = `https://avatars.yandex.net${el.data.cover.dir}200x200` 
          return <PlayListViews key={index} link={`/playlist/${el.data.owner.login}/${el.data.kind}`} style={{
            background: `url(${img})`,
            backgroundSize: 'cover'
          }} />
        })}
      </Box>
    </Box>
  )
}