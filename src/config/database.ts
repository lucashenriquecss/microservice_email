require('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Service } from "../models/Service"


import * as fs from 'fs';
import * as path from 'path';

const modelsDir: string = path.join(__dirname, '../models');
const files: string[] = fs.readdirSync(modelsDir);
const tsFiles: string[] = files.filter(file => file.endsWith('.ts'));

const enty: any[] = tsFiles.map(file => {
  const modulePath: string = path.join(modelsDir, file);
  const moduleName: string = path.parse(modulePath).name;
  const entity: any = require(modulePath)[moduleName];
  return entity;
});

export const Connection = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    database: process.env.DB_NAME,
    entities: enty

})

