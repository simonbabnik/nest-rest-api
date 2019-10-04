import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// delo z mongodb
@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

        // najdi vse
        async findAll(): Promise<Product[]> {
            return await this.productModel.find();
        }

        // najdi enega
        async findOne(id: string): Promise<Product> {
            return await this.productModel.findOne({_id: id});
        }

        // ustvari produkt
        async create(product: Product): Promise <Product> {
            const newProduct = new this.productModel(product);
            return await newProduct.save();
        }

        // izbriši produkt
        async delete(id: string): Promise <Product> {
            return await this.productModel.findByIdAndRemove(id);
        }

        // posodobi produkt
        async update(id: string, product: Product): Promise <Product> {
            return await this.productModel.findByIdAndUpdate(id, product, { new: true });
        }

}
