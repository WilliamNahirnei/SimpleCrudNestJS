import { Meet } from "src/meet/entities/meet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Meet, (meet) => meet.creature)
    meets: Meet[]
}
