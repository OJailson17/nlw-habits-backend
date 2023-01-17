import Fastify from 'fastify';

const app = Fastify();

app.get('/', (req, res) => {
	return {
		message: 'Hello World',
	};
});

app.listen(
	{
		port: 8082,
	},
	() => console.log('Server is running on port 8082'),
);
