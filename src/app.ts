import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => { 
  const hello = { hello: "World!"};
  res.json(hello)});
app.post("/", (req, res) => { 
    const name = req.body.name || "anonymous";
    const hello = { hello: name }
    res.json(hello);
});

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Hello app listening at http://localhost:${port}`)
);

