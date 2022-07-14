import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FullScreenDialog from "./dialog";
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  margin: {
    margin: 4,
  },
});

const FetchtData = () => {
  const [mahasiswa, setMahasiswa] = useState({ data: [], loading: false , error: false });
  const nama = useRef();
  const nim = useRef();
  const prodi = useRef();

  const classes = useStyles();
  useEffect(() => {
    getDataMahasiwa();
  }, []);

  const getDataMahasiwa = async () => {
    setMahasiswa((prev) => ({
      ...prev,
      data: [],
      loading: true,
    }));

    try {
      const dataMahasiwa = await fetch("http://localhost:8800/read");
      const data = await dataMahasiwa.json();
      // console.log(data)
      if (data.status === 200) {
        setMahasiswa((prev) => ({
          ...prev,
          data: data.values,
          loading: false,
        }));
        // setMahasiswa(dataMahasiwa.data.values)
      }
    } catch (error) {
      setMahasiswa((prev) => ({
        ...prev,
        error: true,
        data: error.response && error.response.data.message ? error.response.data.message : error.message,
        loading: false,
      }));
    }
  };

  const handleDelete = (s) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await fetch(`http://localhost:8800/delete/${s}`, {
            method: "DELETE",
            // body: JSON.stringify({id:id}), // The data
            headers: {
              "Content-type": "application/json", // The type of data you're sending
            },
          });
          getDataMahasiwa();
        } catch (error) {
          console.log(error);
          swal("Gagal", "Kesalahn", "error");
        }
      }
    });
  };

  const handleInputData = async () => {
    try{
        const dataSend = {
            nama: nama.current.value,
            nim: nim.current.value,
            prodi: prodi.current.value,
          };
          await fetch(`http://localhost:8800/create`, {
            method: "POST",
            body: JSON.stringify(dataSend), // The data
            headers: {
              "Content-type": "application/json", // The type of data you're sending
            },
          });
     getDataMahasiwa();
    }catch(err){
        console.log(err)
        swal("Gagal", "Kesalahn", "error");
    }
  };

  
  console.log(mahasiswa)

  return (
    <>
      {mahasiswa.loading ? (
        <p>loading ..</p>
      ) : mahasiswa.error?
      <Alert severity="error">{mahasiswa.data}</Alert>:
      (
        <>
          <FormControl className={classes.margin}>
            <input type="text" ref={nama} placeholder="nama"/>
          </FormControl>

          <FormControl className={classes.margin}>
            <input type="text" ref={nim} placeholder="nim" />
          </FormControl>

          <FormControl className={classes.margin}>
            <input type="text" ref={prodi} placeholder="prodi"/>
          </FormControl>
          <FormControl>
            <Button
              onClick={() => handleInputData()}
              variant="contained"
              color="primary"
            >
              SUMBIT
            </Button>
          </FormControl>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>no</TableCell>
                  <TableCell align="right">Nama</TableCell>
                  <TableCell align="right">Nim</TableCell>
                  <TableCell align="right">Prodi</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mahasiswa.data.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell component="right" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell component="right" scope="row">
                      {row.nama}
                    </TableCell>
                    <TableCell align="right">{row.nim}</TableCell>
                    <TableCell align="right">{row.prodi}</TableCell>
                    <TableCell align="right">
                    <FullScreenDialog getDataMahasiwa={getDataMahasiwa} data={row} />
                      <Button
                        onClick={() => handleDelete(row.id)}
                        variant="contained"
                        color="secondary"
                      >
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
        </>
      )}
    </>
  );
};
export default FetchtData;
