import { Injectable } from '@nestjs/common';
import { CreateStratsDto } from 'src/model/createStrats.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  uploadStrat(createStratsDto: CreateStratsDto): string {
    return 'TODO';
  }
}
