import { Component } from "materialize-css";
import { ComponentView } from '../base/ComponentView'
export class ListUsers extends ComponentView {

    constructor() {
        super()
        super.addEvent('click', '#xtitle', this.onClick)
    }

    onClick = (e: Event) => {
        const elm = (e.target as HTMLElement)
        elm.classList.contains('color-full') ? elm.classList.remove('color-full') : elm.classList.add('color-full')
        history.pushState({ about: '1' }, 'about', '/users')
    }



    render(): string {
        return `
            <div id="xtitle">
                <h2> All Users</h2>
            </div>
        `;
    }
}