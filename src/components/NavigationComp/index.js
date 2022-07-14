import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useNavigate} from 'react-router-dom';
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

 function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleRoute =(route) => {
    if(route === 'home'){
        navigate('/')
    }else if(route === 'belajar'){
        navigate('/belajar')
    }
    
  }

  return (
    <>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={() => handleRoute('home')} label="Home" icon={<RestoreIcon />} />
      <BottomNavigationAction onClick={() => handleRoute('belajar')} label="Belajar" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Kontak" icon={<LocationOnIcon />} />
    </BottomNavigation>
    {props.footer}
    </>
  );
}
const reduxState = (state) => ({
  footer: state.reducer.counter,
});

export default connect(reduxState, null)(SimpleBottomNavigation)