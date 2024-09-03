import express from "express";

const PORT = 3002;

const app = express();

const data = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        date: '2023-09-01',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        date: '2023-09-02',
    },
    {
        id: 3,
        name: 'Jim Brown',
        email: 'jim.brown@example.com',
        date: '2023-09-03',
    },
    {
        id: 4,
        name: 'Jake White',
        email: 'jake.white@example.com',
        date: '2023-09-04',
    },
    {
        id: 5,
        name: 'Jill Green',
        email: 'jill.green@example.com',
        date: '2023-09-05',
    },
];

app.get('/get-data', (req, res) => {
    res.status(200).json(data);
})

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})