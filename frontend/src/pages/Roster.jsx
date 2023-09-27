import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Roster = () => {
  const [players, setplayers] = useState([]);

  useEffect(() => {
    const fetchAllplayers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/roster");
        setplayers(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllplayers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8000/roster/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(players);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Team Roster</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            
              <tr key={player.id}>
                <td>{player.user_id}</td>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>{player.age}</td>
                <td>{player.email}</td>
                <td>{player.position}</td>
              </tr>
            
          ))}
        </tbody>
      </Table>
      <div></div>
      <Button as="a" variant="secondary" size="sm" style = {{backgroundColor:"sienna"}}>
        Add a Player
      </Button>
    </div>
  );
};

export default Roster;
