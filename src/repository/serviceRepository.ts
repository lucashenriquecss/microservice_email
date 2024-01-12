/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRepository, Repository } from 'typeorm';
import {IService,Service} from '../models/Service';
import { Connection } from "../config/database";


 
export class ServiceRepository  {


  async getAll() {
    return Connection.getRepository(Service).find();
  }

  async getById(id: number) {
    // return Connection.getRepository(Service).findOne(id);
  }

  async create(data: IService): Promise<void> {
    console.log(data);
    const newService = await Connection.getRepository(Service).create(data);
    await Connection.getRepository(Service).save(newService);
  
  }

  async update(id: number, data: Partial<IService>) {
    await Connection.getRepository(Service).update(id, data);
    // return Connection.getRepository(Service).findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await Connection.getRepository(Service).delete(id);
    return result.affected === 1;
  }
}

