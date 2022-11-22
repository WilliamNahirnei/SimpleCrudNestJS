import { Module } from '@nestjs/common';
import { CreatureService } from './creature.service';
import { CreatureController } from './creature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Creature } from './entities/creature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Creature])],
  controllers: [CreatureController],
  providers: [CreatureService]
})
export class CreatureModule {}
