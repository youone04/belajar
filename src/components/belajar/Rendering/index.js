import { useState } from "react";

const Login = () => {
  return (
    <>
      <h5>Anda Sudah Login</h5>
    </>
  );
};

const LogOut = () => {
  return (
    <>
      <h5>Anda Sudah LogOut</h5>
    </>
  );
};

const Rendering = () => {
  // const[logIn , setLogIn] = useState(false);

  // let components;
  // const handleLogin = () => {
  //     setLogIn(true)
  // }
  // const handleLogout = () => {
  //     setLogIn(false)
  // }

//   if (false) {
//     return (
//       <>
//         <p>Rndering</p>
//         <Login />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <p>Rndering</p>
//         <LogOut />
//       </>
//     );
//   }

let loading = false;

return(
    <>
    {
        loading?
        <p>loading ...</p>:
        <h5>Hallo</h5>
    }
    </>
)
};
export default Rendering;
