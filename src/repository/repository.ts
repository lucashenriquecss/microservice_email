interface IRepository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T | null>;
    create(data: T): Promise<T>;
    update(id: number, data: Partial<T>): Promise<T | null>;
    delete(id: number): Promise<boolean>;
}
  