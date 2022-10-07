import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDataMahasiswa , handlePost ,handleDelete } from "../../redux/action";
import Counter from "../Counter/Counter";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Home({ counter, getDataMahasiswa, mahasiswa , handlePostMahaiswa , handleDelete }) {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [prodi, setProdi] = useState("");

  useEffect(() => {
    getDataMahasiswa();
  }, [getDataMahasiswa]);

  // console.log(mahasiswa)
  return (
    <>
      {/* <div>Nilai {counter}</div> */}
      <form>
        <input placeholder="nama" onChange={(e) => setNama(e.target.value)} />
        <br />
        <input placeholder="nim" onChange={(e) => setNim(e.target.value)} />
        <br />
        <input placeholder="prodi" onChange={(e) => setProdi(e.target.value)} />
        <br />
        <button type="button" onClick={() => handlePostMahaiswa(nim ,nama , prodi , getDataMahasiswa)}>
          Kirim
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nim</th>
            <th>Prodi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
            {mahasiswa.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.nama}</td>
                  <td>{data.nim}</td>
                  <td>{data.prodi}</td>
                  <td>
                    <button onClick={() => handleDelete(data.id , getDataMahasiswa)}>hapus</button>
                    <button onClick={() => navigate(`/edit/${data.id}/${data.nama}/${data.nim}/${data.prodi}`)}>edit</button>
                  </td>
                  </tr>
              );
            })}
         
        </tbody>
      </table>
      {/* <Counter /> */}
    </>
  );
}

const reduxState = (state) => ({
  counter: state.reducer.counter,
  mahasiswa: state.reducer.data,
});

const reduxDispatch = () => (dispatch) => {
  return {
    getDataMahasiswa: () => dispatch(getDataMahasiswa()),
    handlePostMahaiswa : (nim , nama , prodi , getDataMahasiswa) => dispatch(handlePost(nim , nama , prodi ,getDataMahasiswa)),
    handleDelete : (id , getDataMahasiswa) => dispatch(handleDelete(id , getDataMahasiswa))
    
  };
};
export default connect(reduxState, reduxDispatch)(Home);
