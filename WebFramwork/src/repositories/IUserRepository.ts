
import { User } from './../entities/User';
export interface IUserRepository {
    update(user: User, newUser: User): Boolean
    remove(id: String): void
    add(user: User): Boolean
    all(page: Number): User[]
}