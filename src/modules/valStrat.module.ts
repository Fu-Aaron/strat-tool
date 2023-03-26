import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ValStratController } from "src/controller/valStrat.controller";
import { ValStrat, ValStratSchema } from "src/model/valStrat.schema";
import { ValStratRepository } from "src/repositories/valStrat.repository";
import { ValStratService } from "src/service/valStrat.service";

@Module({
    imports: [MongooseModule.forFeature([{name: ValStrat.name, schema: ValStratSchema}])],
    controllers: [ValStratController],
    providers: [ValStratService, ValStratRepository],
})
export class ValStratModule {}