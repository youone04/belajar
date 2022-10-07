
import axios from "axios";

export const counterPlus = (nilai)  => (dispatch) => {
    dispatch({type: "COUNTER_PLUS" , value : nilai})
}

export const counterMinus = (nilai)  => (dispatch) => {
    dispatch({type: "COUNTER_MINUS" , value : nilai})
}
export const getDataMahasiswa = () => async (dispatch) => {
    try{

        const data  = await fetch("http://localhost:8800/read",{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }});

        const hasil = await data.json();
        dispatch({type: "GET_DATA_MAHASISWA" , value: hasil.values})

    }catch(error){
        console.log(error)

    }
}

export const getDataMahasiswaSinggle = (id) => async (dispatch) => {
    try{

        const data  = await fetch(`http://localhost:8800/read/${id}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }});

        const hasil = await data.json();
        dispatch({type: "GET_DATA_MAHASISWA_SINGGLE" , value: hasil.values})

    }catch(error){
        console.log(error)

    }
}

export const  handlePost =  (nim , nama , prodi , getDataMahasiswa) => async() => {
    const dataSend = {
      nama,
      nim,
      prodi,
    };

    try {
      const data = await axios.post("http://localhost:8800/create", dataSend);
      getDataMahasiswa()
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  export const  handleDelete =  (id , getDataMahasiswa) => async() => {

    try {
      const data = await axios.delete(`http://localhost:8800/delete/${id}`,);
      getDataMahasiswa()
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  export const  handleEdit =  (id ,nama, nim , prodi) => async() => {
    const dataSend = {
        nama,
        nim, 
        prodi
    }

    try {
      const data = await axios.put(`http://localhost:8800/update/${id}`,dataSend);
      alert('update berhasil')
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

