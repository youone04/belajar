import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import FormControl from "@material-ui/core/FormControl";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  margin: {
    margin: 4,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const nama = useRef();
  const nim = useRef();
  const prodi = useRef();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateData = async () => {
    try {
      const dataSend = {
        nama: nama.current.value,
        nim: nim.current.value,
        prodi: prodi.current.value,
        id : props.data.id
      };
      // console.log(dataSend);
      // return
      await fetch(`http://localhost:8800/update`, {
        method: "PUT",
        body: JSON.stringify(dataSend), // The data
        headers: {
          "Content-type": "application/json", // The type of data you're sending
        },
      });

      handleClose();
      swal("Success", "Berhasil", "success");
      props.getDataMahasiwa();
    } catch (err) {
      console.log(err);
      swal("Gagal", "Kesalahn", "error");
    }
  };

  console.log(props.data)
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        // style={{ margin: 5 }}
        onClick={handleClickOpen}
      >
        UPDATE
      </Button>
      {/* <Button variant="outlined" color="primary">
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Update data
            </Typography>
            <Button autoFocus color="inherit" onClick={handleUpdateData}>
              update
            </Button>
          </Toolbar>
        </AppBar>
        <FormControl className={classes.margin}>
          <input
            defaultValue={props.data.nama}
            type="text"
            ref={nama}
            placeholder="nama"
          />
        </FormControl>

        <FormControl className={classes.margin}>
          <input
            defaultValue={props.data.nim}
            type="text"
            ref={nim}
            placeholder="nim"
          />
        </FormControl>

        <FormControl className={classes.margin}>
          <input
            defaultValue={props.data.prodi}
            type="text"
            ref={prodi}
            placeholder="prodi"
          />
        </FormControl>
      </Dialog>
    </div>
  );
}
