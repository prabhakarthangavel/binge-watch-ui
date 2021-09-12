export class Users {
    firstName: string;
    id: number;
    lastName: string;
    userName: string;
    following: boolean;

    constructor(response: any, following: boolean) {
        this.firstName = response.firstName;
        this.id = response.id;
        this.lastName = response.lastName;
        this.userName = response.userName;
        this.following = following;
    }
}