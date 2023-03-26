import { Body, Controller, Get, HttpStatus, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateValStratDto } from 'src/model/createValStrat.dto';
import { ValStratService } from '../service/valStrat.service';

@Controller('valstrats')
export class ValStratController {
  constructor(private stratService: ValStratService) {}

  @Get()
  getHello(): string {
    return this.stratService.getHello();
  }

  @Post('/upload')
  async uploadStrat(@Body(new ValidationPipe({transform: true})) createValStratDto: CreateValStratDto, @Res() res: any) {
    console.log("controller: " + createValStratDto.agents)
    const responseBody = await this.stratService.uploadStrat(createValStratDto);
    return res.status(HttpStatus.OK).send(responseBody);
  }
}
