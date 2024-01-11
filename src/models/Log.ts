import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm"
export interface ILog {
    id: number;
    description: string;
    process_id: string;
    status: string;
    body: string;
    response: string;
}
@Entity("logs")
export class Log {
    @PrimaryGeneratedColumn()
    id?: number
    @Column()
    description?: string
    @Column()
    process_id?: string
    @Column()
    body?: string
    @Column()
    response?: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at?: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at?: Date;
}