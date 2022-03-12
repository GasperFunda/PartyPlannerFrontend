export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    attendanceStatus: number

    constructor(id: number, name: string, surname: string, email: string, attendanceStatus: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.attendanceStatus = attendanceStatus;
    }
}  