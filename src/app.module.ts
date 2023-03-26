import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ValStratModule } from './modules/valStrat.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017', {dbName: 'valorantdb'}), ValStratModule],
})
export class AppModule {}
