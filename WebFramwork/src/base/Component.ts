import { IComponent } from './IComponent';

export abstract class ComponentView implements IComponent {

    rootview?: HTMLElement = document.querySelector('#root') as HTMLElement
    childview?: HTMLTemplateElement


    eventMap: { [key: string]: (e: Event) => void } = {}



    abstract render(): string;
    public addEvent<K extends keyof DocumentEventMap>(eventType: K, docId: string, event: (e: Event) => void): void {
        this.eventMap[eventType + ':' + docId] = event;
    }

    registerEvents(): void {
        for (let eventName in this.eventMap) {
            const [eventType, docId] = eventName.split(':')
            document.querySelector(docId)!.addEventListener(eventType, this.eventMap[eventName])
        }
    }
    mount(): void {
        this.childview = document.createElement("template")
        this.childview.innerHTML = this.render()
        this.rootview?.appendChild(this.childview.content)
        this.registerEvents()
    }
    unmount(): void {
        this.rootview!.innerHTML = ""
    }

}
