import express from 'express';
import cors from 'cors';
import {env} from './config/envConfig';
import BenefRouter from './router/beneficiario.route';
import {connectDB} from './config/mongo';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/benefs', BenefRouter);

app.listen(env.PORT, async () => {
    await connectDB();
    console.log(`🚀 Server is running at http://localhost:${env.PORT}`);
});
