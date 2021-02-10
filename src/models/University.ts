import { Column, Entity } from "typeorm";
import Identifier from "./Identifier";

@Entity()
class University {
    @Column(type => Identifier)
    identification: Identifier;

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;
}

export default University;