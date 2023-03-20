import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'
import { ImageWithDescription } from "./mapImage.schema";

@Schema()
export class Strat extends Document {
   @Prop({required: true})
   name: string;
   @Prop({required: true})
   notes: string;
   @Prop({required: true, lowercase: true, trim: true})
   map: string;
   @Prop({default: [], lowercase: true, trim: true})
   agents: string[];
   @Prop({required: true, type: ImageWithDescription, default: []})
   imageWithDescription: ImageWithDescription[];
}
export const StratSchema = SchemaFactory.createForClass(Strat);