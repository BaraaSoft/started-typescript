import { Component } from "materialize-css";
import { ComponentView } from '../base/Component'
export class ListUsers extends ComponentView {

    constructor() {
        super()
        super.addEvent('click', '#xtitle', this.onHover)
    }

    onHover = (e: Event) => {
        console.log(e)
        alert('Hover')
    }



    render(): string {

        return `
            <div id="xtitle">
                <h2> All Users</h2>
            </div>
        `;
    }
}