import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//routes
import dataRouter from "./routes/data.js";
app.use('/data', dataRouter);


app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

export default app;
