const e = require('express');
const express = require('express')
const router = express.Router()

let elements = [
    {
        id: 0,
        name: "stair",
        width: 32
    }
    
]

router.route("/")
    .get((req, res) => {
        res.json(elements);
    })
    .post((req, res) => {
        const {name, height, width} = req.body;
        
        if (!name || typeof name !== "string") {
            return res.status(400).json({ message: "Invalid or missing name" });
        }
        if (typeof height !== "number" || height <= 0) {
            return res.status(400).json({ message: "Invalid or missing height" });
        }
        if (typeof width !== "number" || width <= 0) {
            return res.status(400).json({ message: "Invalid or missing width" });
        }

        const newElement = {
            id: elements.length,
            name: req.body.name,
            height: req.body.height,
            width: req.body.width,
            isValid: false
        };
        elements.push(newElement);

        res.status(201).json(newElement);
});

router.route("/:id")
    .get((req,res) => {
        const id = parseInt(req.params.id)
        res.json(elements[id])
    })

    .put((req, res) => {
        id = parseInt(req.params.id);
        const element = elements.find(el => el.id === id);

        if (element) {
            element.name = req.body.name || element.name;
            element.height = req.body.height || element.height;
            element.width = req.body.width || element.width;

            res.json(element);
        }else{
            res.status(404).json({message: "element not found"});
        }
    })

    .delete((req, res) => {
        const id = parseInt(req.params.id); // Extract the ID from the URL
        const index = elements.findIndex(el => el.id === id); // Find the index of the element
    
        if (index !== -1) {
            const deletedElement = elements.splice(index, 1); // Remove the element
            res.json(deletedElement); // Return the deleted element
        } else {
            res.status(404).json({ message: "Element not found" });
        }
    });
    


module.exports = router