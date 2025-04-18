const express = require('express');
const axios = require('axios');

port = 8080;

const app = express();

app.get("/numbers/:numberid", async (req, res) => {
    const id = req.params.numberid;
    try {
        const even = "http://20.244.56.144/evaluation-service/even";
        const prime = "http://20.244.56.144/evaluation-service/primes";
        const fib = "http://20.244.56.144/evaluation-service/fibo";
        const rand = "http://20.244.56.144/evaluation-service/rand";

        if (id === "e") {
            const getData = await axios.get(even);
            const data = getData.numbers;
            console.log(data);
            res.json(data);
        }
        else if (id === "p") {
            const getData = await axios.get(prime);
            const data = getData.numbers;
            console.log(data);
            res.json(data);
        }
        else if (id === "f") {
            const getData = await axios.get(fib);
            const data = getData.numbers;
            console.log(data);
            res.json(data);
        }
        else {
            const getData = await axios.get(rand);
            const data = getData.numbers;
            console.log(data);
            res.json(data);
        }
    }
    catch (e) {
        console.log("error");
    }
});

app.listen(port, (req, res) => {
    console.log("listening at port", port);
});