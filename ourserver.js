const express = require('express'); // Импорт библиотеки
const { join } = require('path');

const app = express(); // Создали класс сервера

const port = 52029; // Задали номер порта

// app.get('/hellostudents', ((req, res) => {
//     res.send('Hello, my dear students!');
// })); // Прописали логику работы сервера

app.get('/hellostudents', ((req, res) => {
    res.sendFile(join(__dirname, "lectionlive.html"));
})); // Прописали логику работы сервера

app.listen(port, () => {
    console.log("Our simple server is running!")
}) // Запустили сервер



