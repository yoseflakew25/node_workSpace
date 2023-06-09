const express = require("express");
const app = express()
const { products } = require("./data.js")

app.get("/", (req, res) => {
    res.send('<h1>Products</h1><a href="/api/products">products</a>')
})

app.get("/api/products", (req, res) => {

    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})



app.get("/api/products/:id", (req, res) => {

    const { id } = req.params
    const singleProduct = products.find((product) => product.id === Number(id))
    if (!singleProduct) {
        return res.status(404).send("Product not found")
    }
    res.json(singleProduct)
})

app.get('/api/products/:id/reviews', (req, res) => {
    console.log(req.params);
    res.send('hello world')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})