import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

@Schema()
export class ValStrat extends Document {
   @Prop({required: true})
   name: string;
   @Prop({})
   notes: string;
   @Prop({required: true, lowercase: true, trim: true})
   map: string;
   @Prop({type: [String], default: [], lowercase: true, trim: true})
   agents: string[];
   @Prop({required: true, type: [{filename: String, description: String}], default: []})
   imageWithDescription: {filename: String, description: String}[];
}
export const ValStratSchema = SchemaFactory.createForClass(ValStrat);