import { Component } from "materialize-css";
import { ComponentView } from '../base/Component'
export class ListUsers extends ComponentView {

    constructor() {
        super()
        super.addEvent('click', '#xtitle', this.onHover)
    }

    onHover = (e: Event) => {
        const elm = (e.target as HTMLElement)
        elm.classList.contains('color-full') ? elm.classList.remove('color-full') : elm.classList.add('color-full')
    }



    render(): string {
        return `
            <div id="xtitle">
                <h2> All Users</h2>
            </div>
        `;
    }
}