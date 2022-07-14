import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../Card';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function GridMod() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Material-UI Grid:
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={3}  xs={12}>
         <SimpleCard/>
        </Grid>
        <Grid item lg={3} xs={12}>
         <SimpleCard/>
        </Grid>
        <Grid item lg={3} xs={12}>
         <SimpleCard/>
        </Grid>
        <Grid item lg={3} xs={12}>
         <SimpleCard/>
        </Grid>
      </Grid>
    </div>
  );
}
