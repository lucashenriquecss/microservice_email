import  { Request, Response } from 'express';
import { ServiceRepository } from '../repository/serviceRepository'; // Substitua pelo caminho correto
import { IService } from '../models/Service';

 const repository = new ServiceRepository()
export class ServiceController  {

    async getAll(req: Request, res: Response): Promise<void> {
        try {
          const users = await repository.getAll();
          res.json(users);
        } catch (error) {
          res.status(500).json({ error });
        }
    }

  async create(req: Request, res: Response): Promise<void> {
    const service: IService = req.body;
    try {
      console.log(service);
      const users = await repository.create(service);
      res.json(users);
    } catch (error) { 
      res.status(500).json({ error });
    }
  }
}