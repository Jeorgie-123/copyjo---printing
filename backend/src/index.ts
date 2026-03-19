import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}))

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
