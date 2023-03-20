import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateStratsDto } from 'src/model/createStrats.dto';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/upload')
  uploadStrat(@Body() createStratsDto: CreateStratsDto, @Res() res: any) {
    return this.appService.uploadStrat(createStratsDto);
  }
}
