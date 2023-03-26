import { Injectable } from '@nestjs/common';
import { CreateValStratDto } from 'src/model/createValStrat.dto';
import { ValStratRepository } from 'src/repositories/valStrat.repository';

@Injectable()
export class ValStratService {
  constructor(private valStratRepository: ValStratRepository) {}
  getHello(): string {
    return 'Hello World!';
  }

  async uploadStrat(createValStratDto: CreateValStratDto): Promise<string> {
    console.log("service:" + createValStratDto)
    const valStrat = await this.valStratRepository.createStrat(createValStratDto);
    console.log("hi")
    return valStrat.toJSON().toString();
  }
}
