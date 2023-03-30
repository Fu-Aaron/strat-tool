import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateValStratDto } from 'src/model/dto/createValStrat.dto';
import { ImageWithDescriptionDto } from 'src/model/dto/imageWithDescription.dto';
import { ValStrat } from 'src/model/valStrat.schema';

@Injectable()
export class ValStratService {
  constructor(@InjectModel(ValStrat.name) private stratModel: Model<ValStrat>) {}
  getHello(): string {
    return 'Hello World!';
  }

  async uploadStrat(createValStratDto: CreateValStratDto): Promise<string> {
    let imagesWithDescriptions: ImageWithDescriptionDto[] = this.createImageWithDescriptionsFromCreateStratDto(createValStratDto);
        let strat = new this.stratModel({
            name: createValStratDto.name,
            notes: createValStratDto.notes,
            map: createValStratDto.map,
            agents: createValStratDto.agents,
            imageWithDescription: imagesWithDescriptions,
        });
        const valStrat = await strat.save()
        return JSON.stringify(valStrat)
  }

  private createImageWithDescriptionsFromCreateStratDto(createStratDto: CreateValStratDto) {
    let imagesWithDescriptions: ImageWithDescriptionDto[] = []; 
    for (let i = 0; i < createStratDto.mapFileNames.length; i++) {
        const filename = createStratDto.mapFileNames[i]
        let description;
        if (i < createStratDto.mapDescriptions.length) {
            description = createStratDto.mapDescriptions[i]
        }
        imagesWithDescriptions.push({filename, description})
    }
    return imagesWithDescriptions;
  }
}
