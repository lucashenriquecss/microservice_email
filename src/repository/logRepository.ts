import { getRepository, Repository } from 'typeorm';
import {ILog,Log} from '../models/Log';



export class LogRepository implements IRepository<ILog> {
  private repository: Repository<ILog>;

  constructor() {
    this.repository = getRepository(Log);
  }

  async getAll(): Promise<ILog[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<ILog | null> {
    return this.repository.findOne(id);
  }

  async create(data: ILog): Promise<ILog> {
    const newService = this.repository.create(data);
    return this.repository.save(newService);
  }

  async update(id: number, data: Partial<ILog>): Promise<ILog | null> {
    await this.repository.update(id, data);
    return this.repository.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected === 1;
  }
}
