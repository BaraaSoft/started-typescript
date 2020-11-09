import { User } from '../entities/User';
import * as IAddUser from './IAddUser'
export class AddUserPresenter implements IAddUser.Presenter {
    user: User = {}
    view: IAddUser.View


    onFirstnameChange(name: string): void {
        this.user.firstname = name
    }
    onLastnameChange(lname: string): void {
        this.user.lastname = lname
    }
    onEmailChange(email: string): void {
        this.user.email = email
    }
    onBirthdate(date: string): void {
        this.user.birthdate = date
    }
    onSave(): void {
        throw new Error('Method not implemented.');
    }
    refresh?(): void {
        throw new Error('Method not implemented.');
    }
    onMount(view: IAddUser.View): void {
        this.view = view
    }
    onUnmount(): void {
        throw new Error('Method not implemented.');
    }
}