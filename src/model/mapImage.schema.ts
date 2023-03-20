import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

@Schema()
export class ImageWithDescription extends Document {
  @Prop({ required: true })
  filename: string;

  @Prop()
  description: string;
}
export const ImageWithDescriptionSchema = SchemaFactory.createForClass(ImageWithDescription);