import * as Base from '../base/Base'
import { User } from './../entities/User';

export interface View extends Base.View {
    showSuccessMessage(message: string): void
    showErrorMessage(message: String): void
}

export interface Model extends Base.Model {
    saveUser(user: User): boolean
}

export interface Presenter extends Base.Presenter<View> {
    onUsernameChange(username: string): void
    onEmailChange(email: string): void
    onFullNameChange(name: string): void
    onPhoneChange(phone: number): void
    onSave(): void
}