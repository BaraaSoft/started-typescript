
export interface Presenter<T> {
    refresh?(): void
    onMount(view: T): void
    onUnmount(): void
}
export interface View {
    goback(): void;
}
export interface Model {

}