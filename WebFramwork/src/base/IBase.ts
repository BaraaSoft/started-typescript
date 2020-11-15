
export interface Presenter<T> {
    refresh?(): void
    onMount(view: T): void
    onUnmount(): void
}
export interface View {
    parent: HTMLElement | null
    template(): string;
    render(): void

}
export interface Model {

}