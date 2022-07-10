import { useState, Fragment } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { Link } from "react-router-dom";

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  lineHeight: 2.5,
  color: '#fff',
  textAlign: 'center'
});


export default function App() {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <Fragment>
      <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Box sx={{height: '100%', width: 200, display: 'flex', flexDirection: 'column'}}>
          <Link to='/'>
            <Typography sx={{ textAlign: 'start', padding:2, cursor: 'pointer' }} variant="h4" component="h4" color="textPrimary">
              Wrapped
            </Typography>
          </Link>
          <Link to='/'>
            <Typography sx={{ textAlign: 'start', padding:2, cursor: 'pointer' }} variant="h5" component="h4" color="textPrimary">
              Feed
            </Typography>
          </Link>
          <Link to='/profile'>
            <Typography sx={{ textAlign: 'start', padding:2, cursor: 'pointer' }} variant="h5" component="h4" color="textPrimary">
              Profile
            </Typography>
          </Link>
        </Box>
        <Box sx={{width: '100%', height: '100%', marginBottom: '60px'}}>
          <Outlet />
        </Box>
      </Box>
      <Box sx={{
        bottom: 0, 
        position: 'fixed', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly', //flex-start
        backgroundColor: '#1E1E1E',
        height: 60
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor='#BA85FB' />
          </IconButton>
          <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayArrowRounded
              fontSize="large"
                htmlColor='#BA85FB'
              />
            ) : (
              <PauseRounded fontSize="large" htmlColor='#BA85FB' />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor='#BA85FB' />
          </IconButton>
        </Box>
        <Box sx={{width: '60%', display: 'flex', flexDirection: 'row'}}>
          <TinyText>{formatDuration(position)}</TinyText>
          <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value as number)}
              sx={{
                marginLeft: 0.5,
                marginRight: 0.5,
                height: 4,
                '& .MuiSlider-thumb': {
                  width: 8,
                  height: 8,
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&:before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px ${
                      theme.palette.mode === 'dark'
                        ? 'rgb(255 255 255 / 16%)'
                        : 'rgb(0 0 0 / 16%)'
                    }`,
                  },
                  '&.Mui-active': {
                    width: 20,
                    height: 20,
                  },
                },
                '& .MuiSlider-rail': {
                  opacity: 0.28,
                },
              }}
            />
            <TinyText>-{formatDuration(duration - position)}</TinyText>
            
        </Box>
        <Box sx={{width: '15%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <VolumeDownRounded htmlColor='#BA85FB' />
          <Slider
            aria-label="Volume"
            defaultValue={20}
            valueLabelDisplay="auto"
            sx={{
              marginLeft: 0.5,
              marginRight: 0.5,
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 14,
                height: 14,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor='#BA85FB' />
        </Box>
      </Box>
    </Fragment>
  );
}
