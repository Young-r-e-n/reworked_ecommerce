import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  createProduct(@Body() body: any) {
    return this.productsService.createProduct(body);
  }

  @Get()
  findAllProducts() {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  findProductById(@Param('id') id: string) {
    return this.productsService.findProductById(id);
  }

  // Full update
  @Put(':id')
  putProduct(@Param('id') id: string, @Body() body: any) {
    return this.productsService.updateProduct(id, body, true); // full = true
  }

  // Partial update
  @Patch(':id')
  patchProduct(@Param('id') id: string, @Body() body: any) {
    return this.productsService.updateProduct(id, body, false); // full = false
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
