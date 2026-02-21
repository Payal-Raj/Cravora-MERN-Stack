import foodModel from "../models/foodModels.js";
import fs from 'fs';

//add food

const addFood = async (req, res) =>{

    let image_filename = `${req.file.filename}`;
    // const image_filename = req.file ? req.file.filename : "default.png"; do this if you want to check the request on thunder

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"food Added"})
    }catch (error){
        console.log(error)
        res.json({success:false,message:"Erro"})
    }

}

export {addFood}
