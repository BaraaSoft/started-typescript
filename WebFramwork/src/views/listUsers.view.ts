type Callback = () => void
export class ListUsersView {
    events: { [key: string]: Callback[] }
    constructor() {
        let elm = document.getElementById('title')
        elm.innerHTML = "List Users View"
    }

    on(eventName: string, callback: Callback): void {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callback)
    }

}

