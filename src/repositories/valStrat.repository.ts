import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateValStratDto } from "src/model/createValStrat.dto";
import { ImageWithDescription } from "src/model/mapImage.schema";
import { ValStrat } from "src/model/valStrat.schema";

export class ValStratRepository {
    constructor(@InjectModel(ValStrat.name) private stratModel: Model<ValStrat>) {}

    private createImageWithDescriptionsFromCreateStratDto(createStratDto: CreateValStratDto) {
        let imagesWithDescriptions: ImageWithDescription[] = []; 
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

    async createStrat(createStratDto: CreateValStratDto) {
        let imagesWithDescriptions: ImageWithDescription[] = this.createImageWithDescriptionsFromCreateStratDto(createStratDto);
        let strat = new this.stratModel({
            name: createStratDto.name,
            notes: createStratDto.notes,
            map: createStratDto.map,
            agents: createStratDto.agents,
            imageWithDescription: imagesWithDescriptions,
        });
        const valStrat = await strat.save()
        return valStrat
    }
}