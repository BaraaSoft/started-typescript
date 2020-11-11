import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';
import { WebService } from './../util/WebService';
import { UserEndPoints } from '../util/UrlPoint';

export class RemoteUserRepository implements IUserRepository {

    constructor(private webService: WebService<User, UserEndPoints>) { }

    update(user: User, newUser: User): Boolean {
        throw new Error('Method not implemented.');
    }
    remove(id: String): void {
        throw new Error('Method not implemented.');
    }
    add(user: User): Boolean {

        this.webService.post('users', new User("2"))
        return true
    }
    all(page: Number): User[] {
        throw new Error('Method not implemented.');
    }
}