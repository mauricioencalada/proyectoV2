export class FormModel {
    id?: number;
    name_proyect: string;
    members: string;
    group_leader: string;
    link: string;
    topic: string;
    description_proyect: string;
    scope: string;
    tools: string;
    objetive: string;
    level: string;
    area: string;
    state: string;


    constructor() {
        this.id = 0 ;
        this.name_proyect = '';
        this.members = '' ;
        this.group_leader = '';
        this.link = '';
        this.topic = '';
        this.description_proyect = '  ';
        this.scope = ' ';
        this.tools = ' ';
        this.objetive = ' ';
        this.level = ' ';
        this.area = ' ';
        this.state = ' ';
    }
    }
