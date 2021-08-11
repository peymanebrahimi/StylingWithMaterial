import { Note } from "./note";

export class User {
    constructor(public id: number,
        public birthDate: Date,
        public name: string,
        public avater: string,
        public bio: string,
        public notes: Note[]
    ) { }
}

