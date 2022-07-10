import Paper from '@mui/material/Paper';
import { styled, SxProps } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface PlayListsViewProps {
  style?: SxProps;
  link: string;
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 220,
  width: 220,
  lineHeight: '120px',
  margin: 12,
}))

export default function PlayListView(props: PlayListsViewProps) {
  return (
    <Link to={props.link}>
      <Item sx={props.style}>
      </Item>
    </Link>
  )
}