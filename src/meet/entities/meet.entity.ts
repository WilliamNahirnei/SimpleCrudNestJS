import { Creature } from "src/creature/entities/creature.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";

@Entity()
export class Meet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    details: string
    
    @Column()
    coordinates: string

    @Column()
    meet: Date

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    @RelationId((meet: Meet) => meet.creature)
    creature_id: Number

    @ManyToOne((creature) => Creature)
    @JoinColumn({name: "creature_id"})
    creature: Creature
}

