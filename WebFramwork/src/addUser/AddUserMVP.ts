import * as Base from '../base/IBase'
import { User } from '../entities/User';

export interface View extends Base.View {
    showSuccessMessage(message: string): void
    showErrorMessage(message: String): void
}

export interface Model extends Base.Model {
    saveUser(user: User): boolean
}

export interface Presenter extends Base.Presenter<View> {
    onFirstnameChange(name: string): void
    onLastnameChange(lname: string): void
    onEmailChange(email: string): void
    onBirthdate(date: string): void
    onSave(): void
}