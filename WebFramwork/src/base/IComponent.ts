export interface IComponent {
    rootview?: HTMLElement;
    childview?: HTMLTemplateElement | undefined;
    registerEvents(): void
    mount(): void
    unmount(): void
}