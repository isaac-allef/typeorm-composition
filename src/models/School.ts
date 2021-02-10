import { Column, Entity } from "typeorm";
import Identifier from "./Identifier";

@Entity()
class School {
    @Column(type => Identifier)
    identification: Identifier;
}

export default School;