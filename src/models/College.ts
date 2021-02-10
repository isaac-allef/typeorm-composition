import { Column, Entity } from "typeorm";
import Identifier from "./Identifier";

@Entity()
class College {
    @Column(type => Identifier)
    identification: Identifier;

    @Column()
    graduations: string;

    @Column()
    twoYearDegrees: string;
}

export default College;