import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';

export class RemoteUserRepository implements IUserRepository {

    update(user: User, newUser: User): Boolean {
        throw new Error('Method not implemented.');
    }
    remove(id: String): void {
        throw new Error('Method not implemented.');
    }
    add(user: User): Boolean {
        throw new Error('Method not implemented.');
    }
    all(page: Number): User[] {
        throw new Error('Method not implemented.');
    }
}