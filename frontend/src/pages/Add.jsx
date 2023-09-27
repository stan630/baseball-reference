import { useState } from "react";
import { useForm} from 'react-hook-form'
import '../App.css'

const Add = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors}
  } = useForm()

  return (
    <div>
      <h2>Add a Player</h2>
        <form className="app">
            <select name="position" id="position">
                <option value={"Pitcher"}>Pitcher</option>
                <option value={"Catcher"}>Catcher</option>
                <option value={"First"}>First</option>
                <option value={"Second"}>Second</option>
                <option value={"Third"}>Third</option>
                <option value={"Shortstop"}>Shortstop</option>
                <option value={"Outfield"}>Outfield</option>
            </select>
        </form>
    </div>
  );
};

export default Add;
