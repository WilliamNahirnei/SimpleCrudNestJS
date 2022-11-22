import { Module } from '@nestjs/common';
import { CreatureModule } from './creature/creature.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MeetModule } from './meet/meet.module';
require('dotenv').config()


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "mysql",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        logging: true

      }
    ),
    CreatureModule,
    MeetModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
