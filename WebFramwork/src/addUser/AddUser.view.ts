import * as IAddUser from './IAddUser'

type Callback = () => void
export class AddUserView implements IAddUser.View {

    presenter: IAddUser.Presenter
    events: { [key: string]: Callback[] }

    constructor(userPresenter: IAddUser.Presenter) {
        this.presenter = userPresenter
        this.presenter.onMount(this)

        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {});


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

    on(eventName: string, callback: Callback): void {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(callback)
    }

}

document.addEventListener('DOMContentLoaded', function () {

});