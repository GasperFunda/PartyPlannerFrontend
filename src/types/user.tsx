export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    attendanceStatus: number
    picture: string

    constructor(id: number, name: string, surname: string, email: string, attendanceStatus: number, picture: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.attendanceStatus = attendanceStatus;
        this.picture = picture;
    }
}  