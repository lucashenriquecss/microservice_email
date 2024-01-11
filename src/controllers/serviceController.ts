import { getRepository, Repository } from 'typeorm';
import express, { Request, Response } from 'express';
import { ServiceRepository } from '../repository/serviceRepository'; // Substitua pelo caminho correto
import { IService } from '../models/Service';

 const repository = new ServiceRepository()
export class ServiceController  {

    async getAll(req: Request, res: Response): Promise<void> {
        try {
          const users = await repository.getAll();
          res.json(users);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao obter servicos.' });
        }
      }
}