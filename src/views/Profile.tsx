import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlayListViews from '../components/PlayListsView';

export default function Profile(){
  return (
    <Box>
      <Typography sx={{ textAlign: 'start', padding:2 }} variant="h2" component="h3" color="textPrimary">
        Profile
      </Typography>
      <Box sx={{
        display: 'flex', 
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        justifyContent: 'flex-start'
      }}
      >
        <PlayListViews link='/' />
      </Box>
    </Box>  
  )
}