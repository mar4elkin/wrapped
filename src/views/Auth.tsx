import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Auth() {
  return (
    <Box sx={{ 
        p: 2, 
        flexGrow: 1, 
        justifyContent: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
      >
      <Typography sx={{ textAlign: 'center' }} variant="h1" component="h2" color="textPrimary">
        Wrapped
      </Typography>
      <Box 
        component="form"
        sx={{
          m: 2,
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Token" />
        {/* <TextField type="password" label="Password" /> */}
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Button sx={{margin: 1}} variant="contained">How to get token?</Button>
        <Button sx={{margin: 1}} variant="contained">Submit</Button>
      </Box>
    </Box>
  )
}