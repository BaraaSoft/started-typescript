import { User } from '../entities/User';
import * as IAddUser from './AddUserMVP'
import { WebService } from './../util/WebService';
export class AddUserPresenter implements IAddUser.Presenter {
    user: User = { id: '' }
    view?: IAddUser.View | null = null

    constructor() {
        const webclient = new WebService<User>('http://localhost:3000')
        webclient.all('users').then(x => console.log(">> DATA:", x))
        webclient.fetch('users', 1).then(x => console.log(x))
    }


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