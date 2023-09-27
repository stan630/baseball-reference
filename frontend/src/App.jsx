import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roster from "./pages/Roster";
import Update from "./pages/Update";
import Add from "./pages/Add";
import FormInput from "./pages/FormInput";
import { useState } from "react";
import "./app.css"

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    position: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage: "Should be at least 3 characters",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,}$",
      required: true,
      
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Should be at least 3 characters",
      pattern: "^[A-Za-z0-9]{3,}$",
      label: "Last Name",
      required: true,
      
    },
    {
      id: 3,
      name: "age",
      type: "number",
      placeholder: "Age",
      errorMessage: "must be a number",
      label: "Age",
      required: true,
      
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Should be a valid email address",
      label: "Email",
      pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i",
      required: true,
      
    },
    {
      id: 5,
      name: "position",
      type: "text",
      placeholder: "Position",
      errorMessage: "",
      label: "Position",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Add a Player</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
    // <div>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path='/' element={<FormInput/>} />
    //             <Route path='/add' element={<Add/>} />
    //             <Route path='/update/id' element={<Update/>} />
    //         </Routes>
    //     </BrowserRouter>
    // </div>
  );
}

export default App;
