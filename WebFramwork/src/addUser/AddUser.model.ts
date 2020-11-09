import { User } from '../entities/User';
import * as IAddUser from './IAddUser'

class AddUserModel implements IAddUser.Model {
    saveUser(user: User): boolean {
        throw new Error('Method not implemented.');
    }
}