const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get('/api/fortune',(req,res) => {
const fortunes = ['error 404',
'run',
'enjoy youself while you can',
'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
'you will get rickrolled soon']

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex]

res.status(200).send(randomFortune)
})

app.post('/api/secret',(req,res) => {

})



app.listen(4000, () => console.log("Server running on 4000"));
