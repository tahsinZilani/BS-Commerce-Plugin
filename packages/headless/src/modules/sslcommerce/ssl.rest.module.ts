import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { authConfig } from "config/auth";
import { ResolveDatabaseDependency } from "src/database/database.resolver";
import { JwtStrategy } from "src/guards/jwt-strategy";
import { AuthController } from "../auth/rest";
import { AuthService } from "../auth/services";
import { UserRepository } from "../user/repositories";
import { IUserDatabase } from "../user/repositories/user.database.interface";
import { SSLPaymentGatewayController } from "./rest/ssl.controller";
import { SSLPaymentGatewayService } from './service';

@Module({
  imports: [HttpModule],
    controllers: [SSLPaymentGatewayController],
    providers:[SSLPaymentGatewayService]
  })
  export class SSLModule { }