import { User } from '../entities/User';
import * as AddUserMVP from './AddUserMVP'

class AddUserModel implements AddUserMVP.Model {
    saveUser(user: User): boolean {
        throw new Error('Method not implemented.');
    }
}