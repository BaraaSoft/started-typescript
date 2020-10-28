
interface IUser {
    uuid: string;
    log(): void
}

class Customer implements IUser {
    constructor(public id: string, public name: string, public age: number) { }
    uuid: string
    log(): void {
        console.log(`>> ${name}: ${this.uuid}`)
    }
}


let arr: Customer[] = [new Customer("123", "baraa", 28)];


let res = arr.map((user: Customer): string => {
    return user.name
})

let tub: (string | string | boolean)[] = ['ds', 'sd', true]
console.log(res)

