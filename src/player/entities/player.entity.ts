import { Column, Entity, EntitySchemaOptions, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    UserId: number;

    @Column()
    Position: string;

    @Column()
    Role: string;

    @Column()
    Age: number;

    @Column()
    Speed: number;

    @Column()
    Strength: number;

    @Column()
    Skills: number;

    @Column()
    Vison: number;


}
