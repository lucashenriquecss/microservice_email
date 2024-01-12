import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm"

export interface IService {
    app: string;
    type: string;
    status: string;
    body: string;
    response: string;
}

@Entity("services")
export class Service {
    @PrimaryGeneratedColumn()
    id?: number
    @Column()
    app?: string
    @Column()
    type?: string
    @Column()
    status?: string
    @Column()
    body?: string
    @Column()
    response?: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at?: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at?: Date;
}

