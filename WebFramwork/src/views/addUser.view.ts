
type Callback = () => void

export class AddUserView {

    events: { [key: string]: Callback[] }

    constructor() {
        let elm = document.getElementById('title')
        elm.innerHTML = "Add user View"
    }

    on(eventName: string, callback: Callback): void {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(callback)
    }

}

