import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    Password: string;

    @Column()
    Email: string;
}

