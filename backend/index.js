import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: '',
    database: "redsox"
})

app.use = (express.json())

app.get ('/', (req,res) => {
    res.json("hello, this is the backend")
})

app.get('/roster', (req,res) => {
    const query = "SELECT * FROM roster"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/roster', (req,res)=> {
   const query = "INSERT INTO roster(`first_name`, `last_name`, `age`, `email`, `position`l) VALUES (?)"
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.age,
        req.body.email,
        req.body.position,
    ]
    db.query(query,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("A player has been added")
    })
})

app.delete('/roster/:id', (req,res) => {
    const rosterID = req.params.id
    const query = "DELETE from roster WHERE user_id = ?"

    db.query(query,[rosterID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Player has been deleted")
    })
})

app.listen(8000, () => {
    console.log("Connected to backend")
})

