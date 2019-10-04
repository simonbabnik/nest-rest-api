import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller()
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // dobi vse produkte
    @Get('products')
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    // dobi točno določen proukt (glede na id)
    @Get('product/:id')
    async findOne(@Res() res, @Param('id') id): Promise<Product> {
        const product = await this.productsService.findOne(id);
        if (!product) {
            throw new NotFoundException('This product does not exist.');
        }
        return res.status(HttpStatus.OK).json(product);
    }

    // ustvari nov produkt
    @Post('product')
    async create(@Res() res, @Body() createProductDto: CreateProductDto): Promise <Product> {
        const product = await this.productsService.create(createProductDto);
        return res.status(HttpStatus.OK).json({
            message: 'Product successfully created',
            product,
        });

    }

    // odstrani produkt (glede na id)
    @Delete('product/:id')
    async delete(@Res() res, @Param('id') id): Promise <Product> {
        const product = await this.productsService.delete(id);
        if (!product) {
            throw new NotFoundException('This product does not exist.');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Product successfully deleted',
            product,
        });
    }

    // posodobi produkt (glede na id)
    @Put('product/:id')
    async update(@Res() res, @Body() updateProductDto: CreateProductDto, @Param('id') id): Promise <Product> {
        const product = await this.productsService.update(id, updateProductDto);
        if (!product) {
            throw new NotFoundException('This product does not exist.');
        }

        return res.status(HttpStatus.OK).json({message: 'Product updated successfully.',
        product,
        });

    }

}
