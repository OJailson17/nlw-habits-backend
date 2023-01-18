import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen(
	{
		port: 8082,
	},
	() => console.log('Server is running on port 8082'),
);
