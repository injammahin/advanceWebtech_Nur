import { Injectable, HttpException } from '@nestjs/common';
import { REGISTRATION } from './registration.mock';

@Injectable()
export class RegistrationService {
  registration = REGISTRATION;
  getregistration(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.registration);
    });
  }

  getRegistration(registrationId): Promise<any> {
    let id = Number(registrationId);
    return new Promise((resolve) => {
      const registration = this.registration.find(
        (registration) => registration.id === id,
      );
      if (!registration) {
        throw new HttpException('Course does not exist', 404);
      }
      resolve(registration);
    });
  }
  addRegistration(registration): Promise<any> {
    return new Promise((resolve) => {
      this.registration.push(registration);
      resolve(this.registration);
    });
  }
  deleteRegistration(registrationId): Promise<any> {
    let id = Number(registrationId);
    return new Promise((resolve) => {
      let index = this.registration.findIndex((course) => course.id === id);
      if (index === -1) {
        throw new HttpException('Course does not exist', 404);
      }
      this.registration.splice(index, 1);
      resolve(this.registration);
    });
  }
}
