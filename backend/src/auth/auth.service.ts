import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  // Validate the user credentials
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Exclude password from the result
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  // Generate and return the JWT token with user data
  async login(user: any) {
    const payload = { email: user.email, role: user.role };
    const access_token = this.jwtService.sign(payload); // Generate the access token

    // Return the access token and user data
    return {
      access_token,
      user, // Return the user data (without the password)
    };
  }
}
