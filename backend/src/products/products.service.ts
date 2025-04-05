import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: any) {
    return this.prisma.product.create({ data });
  }

  async findAllProducts() {
    return this.prisma.product.findMany();
  }

  async findProductById(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async updateProduct(id: string, data: any, isFullUpdate = false) {
    const existingProduct = await this.prisma.product.findUnique({ where: { id } });

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    // Optional: for PUT, enforce all required fields
    if (isFullUpdate) {
      const requiredFields = ['name', 'price']; // Example, customize this!
      for (const field of requiredFields) {
        if (!(field in data)) {
          throw new BadRequestException(`Missing required field: ${field}`);
        }
      }
    }

    return this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
