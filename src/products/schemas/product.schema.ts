import * as mongoose from 'mongoose';

// shema za mongoDB bazo
export const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    available: Boolean,
    dateCreated: Date,
});

// podatkovni tip Date v swaggerju ustvari nov model?
// če se spremeni v string, tega problema ni
