import * as IAddUser from './IAddUser'
export class AddUserView implements IAddUser.View {

    presenter: IAddUser.Presenter

    constructor(userPresenter: IAddUser.Presenter) {
        this.presenter = userPresenter
        this.presenter.onMount(this)
    }

    showSuccessMessage(message: string): void {
        throw new Error('Method not implemented.');

    }
    showErrorMessage(message: String): void {
        throw new Error('Method not implemented.');
    }
    goback(): void {
        throw new Error('Method not implemented.');
    }

}