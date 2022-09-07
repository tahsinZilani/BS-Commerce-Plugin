import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PaymentService } from '../services/payment.service';
import { CreatePaymentDto } from '../dto/payment.create.dto';

@Controller('payment')
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@ApiTags('Payment API')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  
  @Post()
  createPayment(
    // @UserInfo() user: User,
    @Body() data: CreatePaymentDto,
    // @Res({ passthrough: true }) res: Response
  ): Promise<any> {
    return this.paymentService.createPayment(data);
  }

  @Get('/methods')
  getPaymentMethods() {
    return this.paymentService.getPaymentMethods();
  }
}
