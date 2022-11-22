import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { Creature } from './entities/creature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreatureService {
  
  constructor(
    @InjectRepository(Creature)
    private creaturesRepository: Repository<Creature>,
  ) {}

  async create(createCreatureDto: CreateCreatureDto) {
    return this.creaturesRepository.save(createCreatureDto)
  }

  findAll(): Promise<Creature[]> {
    return this.creaturesRepository.find();
  }

  findOne(id: number) {
    return this.creaturesRepository.findOneBy({id});
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.creaturesRepository.update(id,
      updateCreatureDto
      );
  }

  async remove(id: number) {
    return this.creaturesRepository.delete(id);
  }
}
