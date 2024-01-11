import { getRepository, Repository } from 'typeorm';
import {IService,Service} from '../models/Service';



export class ServiceRepository implements IRepository<IService> {
  private repository: Repository<IService>;

  constructor() {
    this.repository = getRepository(Service);
  }

  async getAll(): Promise<IService[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<IService | null> {
    return this.repository.findOne(id);
  }

  async create(data: IService): Promise<IService> {
    const newService = this.repository.create(data);
    return this.repository.save(newService);
  }

  async update(id: number, data: Partial<IService>): Promise<IService | null> {
    await this.repository.update(id, data);
    return this.repository.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected === 1;
  }
}
