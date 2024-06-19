const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "3de3b86d-2a69-40f0-afd3-b6b55c6f8d91"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e){
    return res.status(e.response.status).json(e.response.data)
  }
  
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);