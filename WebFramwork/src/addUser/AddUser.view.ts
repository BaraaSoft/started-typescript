import * as AddUserMVP from './AddUserMVP'

type Callback = () => void
export class AddUserView implements AddUserMVP.View {

    presenter: AddUserMVP.Presenter
    events: { [key: string]: Callback[] }
    successModal: M.Modal

    constructor(userPresenter: AddUserMVP.Presenter) {
        this.presenter = userPresenter
        this.presenter.onMount(this)
        // Init birthdate picker
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {});

        // Init success modal
        var elems = document.querySelectorAll('.modal');
        this.successModal = M.Modal.init(elems, { dismissible: true })[0]

        // register create new user
        let createUserBtn = document.querySelector(".main-btn :first-child")
        console.log(createUserBtn)
        createUserBtn.addEventListener('click', (e) => {
            this.presenter.onSave()
            this.successModal.open()
        })

    }

    showSuccessMessage(message: string): void {
        this.successModal.open()
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