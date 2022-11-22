import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeetDto } from './dto/create-meet.dto';
import { UpdateMeetDto } from './dto/update-meet.dto';
import { Meet } from './entities/meet.entity';

@Injectable()
export class MeetService {

  constructor(
    @InjectRepository(Meet)
    private meetsRepository: Repository<Meet>,
  ) {}


  async create(createMeetDto: CreateMeetDto) {
    return this.meetsRepository.save(createMeetDto)
  }

  findAll(relations: Array<string>, where: Object): Promise<Meet[]> {
    console.log(where)
    return this.meetsRepository.find(
      {
        relations,
        where,
      }
    );
  }

  findOne(id: number, relations: Array<string>) {

    return this.meetsRepository.findOne({
      relations,
      where: {
        id
      }
    });
  }

  update(id: number, updateMeetDto: UpdateMeetDto) {
    return this.meetsRepository.update(id,
        updateMeetDto
      );
  }

  async remove(id: number) {
    return this.meetsRepository.delete(id);
  }
}
