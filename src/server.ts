import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async () => {
	const habits = await prisma.habit.findMany({
		where: {
			title: {
				startsWith: 'beber',
			},
		},
	});

	return habits;
});

app.listen(
	{
		port: 8082,
	},
	() => console.log('Server is running on port 8082'),
);
