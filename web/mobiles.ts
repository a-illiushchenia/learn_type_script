export interface Device{
    model: string;
    company: string;
    displayInfo(): void;
}

export class Smartphone implements Device{
    model: string;
    company: string;

    displayInfo(): void {
        console.log("Smartphone. Model: " + this.model + " company: " + this.company);
    }

}

export class Tablet implements Device{
    model: string;
    company: string;

    displayInfo(): void {
        console.log("Tablet. Model: " + this.model + " company: " + this.company);
    }
}

// второй синтаксис экспорта (можно задать псевдоним для Smartphone)
//export {Device, Tablet, Smartphone as Phone};