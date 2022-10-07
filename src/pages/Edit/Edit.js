import React, { useEffect, useState } from "react";
import { getDataMahasiswaSinggle, handleEdit } from "../../redux/action";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";


const Edit = ({getDataMahasiswaSinggle , mahasiswa , handleEdit}) => {
    const data = useParams();
    const [nama, setNama] = useState(data.nama);
    const [nim, setNim] = useState(data.nim);
    const [prodi, setProdi] = useState(data.prodi);
    const lokasi = useLocation();

    return(
        <>
        <h1>Edit Data</h1>
        {
            lokasi.pathname === '/edit/18'?'edit 18':''
        }
        <form>
        <input value={nama} placeholder="nama" onChange={(e) => setNama(e.target.value)} />
        <br />
        <input value={nim} placeholder="nim" onChange={(e) => setNim(e.target.value)} />
        <br />
        <input value={prodi} placeholder="prodi" onChange={(e) => setProdi(e.target.value)} />
        <br />
        <button type="button" onClick={() => handleEdit(data.id ,nama , nim , prodi , getDataMahasiswaSinggle)}>
          Edit
        </button>
      </form>
        </>
    )
}
const reduxState = (state) => ({
    mahasiswa: state.reducer.datasinggle,
  });
  
  const reduxDispatch = () => (dispatch) => {
    return {
      handleEdit : (id , nama , nim , prodi , getDataMahasiswaSinggle) => dispatch(handleEdit(id, nama , nim , prodi , getDataMahasiswaSinggle))
    };
  };
  export default connect(reduxState, reduxDispatch)(Edit);