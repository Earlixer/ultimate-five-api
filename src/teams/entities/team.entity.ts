import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team{

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    userId: number;

    @Column()
    TeamName: string;

    @Column()
    Formation:string;
    
}
