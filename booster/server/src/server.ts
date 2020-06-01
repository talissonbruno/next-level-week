import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');



    response.json([
        'Talisson',
        'Brunno',
        'Dhimerson',
        'joao',
        'Camila'
    ]);
});

app.listen(3333);

