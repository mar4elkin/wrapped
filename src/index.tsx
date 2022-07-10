import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { store } from './app/store';
import { Provider } from 'react-redux';

import App from './App';
import Auth from './views/Auth';
import Feed from './views/Feed';
import Profile from './views/Profile';
import PlayListTracks from './components/PlayListTracks';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BA85FB',
    },
    secondary: {
      main: '#03DAC6',
    },
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Feed />} />
              <Route path='profile' element={<Profile />} />
              <Route path='playlist' element={<PlayListTracks />} />
            </Route>
          <Route path="auth" element={<Auth />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

