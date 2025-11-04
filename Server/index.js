import express from 'express'
import cors from 'cors'


const app = express();

app.use(cors());
app.use(express.json());



app.listen(process.env.DB_PORT || 5432, () => {
  console.log(`Server is running on port ${process.env.DB_PORT || 5432}`);
});
