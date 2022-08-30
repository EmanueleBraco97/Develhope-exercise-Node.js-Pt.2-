import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { data: string } {
    return { data: 'Ciao, sto creando un server con NestJs' };
  }
}
