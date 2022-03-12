import { User } from "./user";

export class Comment {
    id: number;
    user : User;
    comment: string;

    constructor(id: number, user: User, comment: string) {
        this.id = id;
        this.user = user;
        this.comment = comment;
    }
}  