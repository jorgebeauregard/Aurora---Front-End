
export class Enduser {
    constructor(

        public firstName: string,
        public lastName: string,
        public password: string,
        public email: string,
        public id?: number,
        public remainingHours?: number,
    ) { }
}
