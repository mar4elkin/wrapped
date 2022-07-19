import { SxProps } from '@mui/material/styles';

export interface PlayListsTracksProps {
  style?: SxProps;
  link: string;
  tracks: Array<object>;
}