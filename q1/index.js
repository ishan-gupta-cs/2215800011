const express = require('express');
const axios = require('axios');

port = 8080;

const app = express();

const headers = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3MzkzLCJpYXQiOjE3NDQ5NTcwOTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImVmOTllN2U1LTZhNDgtNDIzNC1hYmJjLTZmZWQwYjllMGVhNiIsInN1YiI6ImlzaGFuLmd1cHRhX2NzLmgyMkBnbGEuYWMuaW4ifSwiZW1haWwiOiJpc2hhbi5ndXB0YV9jcy5oMjJAZ2xhLmFjLmluIiwibmFtZSI6ImlzaGFuIGd1cHRhIiwicm9sbE5vIjoiMjIxNTgwMDAxMSIsImFjY2Vzc0NvZGUiOiJDTm5lR1QiLCJjbGllbnRJRCI6ImVmOTllN2U1LTZhNDgtNDIzNC1hYmJjLTZmZWQwYjllMGVhNiIsImNsaWVudFNlY3JldCI6ImR3d1htSm5TeU5FYXhScmYifQ.0lG40yaC7mcbbDOETV8uCvx1Tb3PN-zNoJRmgUU6bLg'
    }
};

app.get("/numbers/:numberid", async (req, res) => {
    const id = req.params.numberid;
    try {
        const even = "http://20.244.56.144/evaluation-service/even";
        const prime = "http://20.244.56.144/evaluation-service/primes";
        const fib = "http://20.244.56.144/evaluation-service/fibo";
        const rand = "http://20.244.56.144/evaluation-service/rand";

        if (id === "e") {
            const getData = await axios.get(even,headers);
            const data = getData.numbers;
            console.log(data);
            res.json(data);
        }
        else if (id === "p") {
            const getData = await axios.get(prime,headers);
            const data = getData.numbers;
            console.log(data);
            res.json(data);
        }
        else if (id === "f") {
            const getData = await axios.get(fib,headers);
            const data = getData.numbers;
            console.log(data);
            res.json(data);
        }
        else {
            const getData = await axios.get(rand,headers);
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