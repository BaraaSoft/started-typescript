import { IComponent } from './IComponent';

export abstract class ComponentView implements IComponent {

    rootview?: HTMLElement = document.querySelector('#root') as HTMLElement
    childview?: HTMLTemplateElement


    eventMap: { [key: string]: (e: Event) => void } = {}



    abstract render(): string;
    public addEvent<K extends keyof DocumentEventMap>(eventType: K, docId: string, event: (e: Event) => void): void {
        this.eventMap[eventType + ':' + docId] = event;
        console.log(this.eventMap)

    }

    registerEvents(): void {
        for (let eventObj in this.eventMap) {
            const [eventType, docId] = eventObj.split(':')
            console.log(eventType, docId, this.eventMap[eventType + ':' + docId])
            document.querySelector(docId)!.addEventListener(eventType, () => this.eventMap[eventType + ':' + docId](new Event("s")))
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
