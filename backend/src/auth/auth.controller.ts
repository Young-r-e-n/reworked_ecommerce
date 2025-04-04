import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200) // Explicitly set to return a 200 OK status
  async login(@Body() body: { email: string; password: string }) {
    // Step 1: Validate the user credentials
    const user = await this.authService.validateUser(body.email, body.password);

    // Step 2: Generate the JWT token after successful validation
    return this.authService.login(user); // Return the token
  }
}
