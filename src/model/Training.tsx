export class Training {
    id: number;
    name: string;
    type: string;
    days: string;
    active: boolean;


    constructor(id: number, name: string, type: string, days: string, active: boolean) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.days = days;
        this.active = active;
    }
}
