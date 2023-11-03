import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './create-registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @Get()
  async getregistration() {
    const registration = await this.registrationService.getregistration();
  }

  @Get(':registrationId')
  async getRegistration(@Param('registrationId') registrationId) {
    const registration =
      await this.registrationService.getRegistration(registrationId);
    return registration;
  }

  @Post()
  async addRegistration(@Body() CreateRegistrationDto: CreateRegistrationDto) {
    const registration = await this.registrationService.addRegistration(
      CreateRegistrationDto,
    );
    return registration;
  }

  @Delete()
  async deleteRegistration(@Query() query) {
    const registration = await this.registrationService.deleteRegistration(
      query.registrationId,
    );
    return registration;
  }
}
