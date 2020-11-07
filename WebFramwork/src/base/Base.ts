
export interface Presenter<T> {
    refresh?(): void
    load(view: T): void
    destroy(): void
}
export interface View {
    goback(): void;
}
export interface Model {

}