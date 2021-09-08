import React from "react";
import "./LoginPage.css";


const LoginPage = (props) => {

  let name = "HariKrishna";
  let pass = "1234";
  let username = "",
    password = "";


  const handleSubmit = (input) => {
    input.preventDefault();
    if (username === name && pass === password) {
      console.log("working");
      // setdisablebtn(true)
    }
  };

  const userNameHandler = (val) => {
    username = val.target.value;
  };
  const userpasswordHandler = (val) => {
    password = val.target.value;
  };

  return (
    <div>
      <div className="wrapper">
        <form className="login" onSubmit={handleSubmit}>
          <p className="title">Log in</p>
          <input
            type="text"
            name="username"
            onChange={userNameHandler}
            autoFocus
          />
          <i className="fa fa-user"></i>
          <input type="text" name="password" onChange={userpasswordHandler} />
          <i className="fa fa-key"></i>
          <button >
            <i className="spinner"></i>
            <span className="state">Log in</span>
          </button>
        </form>
        
      </div>
    </div>
  );
};

// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return {
//     value,
//     onChange: handleChange,
//   };
// };

export default LoginPage;
