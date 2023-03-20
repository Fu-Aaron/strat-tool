import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017', {dbName: 'valorantdb'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
