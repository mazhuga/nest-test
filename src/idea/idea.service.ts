import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IdeaDTO } from './idea.dto';

import { IdeaEntity } from './idea.entity';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
  ) {}

  isFound(idea) {
    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async showAll() {
    return await this.ideaRepository.find();
  }

  async create(data: IdeaDTO) {
    const idea = await this.ideaRepository.create(data);
    await this.ideaRepository.save(idea);
    return idea;
  }

  async read(id: string) {
    const idea = await this.ideaRepository.findOne({ where: { id } });
    this.isFound(idea);
    return await this.ideaRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<IdeaDTO>) {
    const idea = await this.ideaRepository.findOne({ where: { id } });
    this.isFound(idea);
    await this.ideaRepository.update({ id }, data);
    return await this.ideaRepository.findOne({ where: { id } });
  }

  async destroy(id: string) {
    const idea = await this.ideaRepository.findOne({ where: { id } });
    this.isFound(idea);
    await this.ideaRepository.delete({ id });
    return await this.ideaRepository.findOne({ where: { id } });
  }
}
