export interface Product {
    id?: string;
    name: string;
    price: number;
    available: boolean;
    dateCreated: Date;
}

// id ni obvezen, ker ga generira mongoDB

// podatkovni tip Date v swaggerju ustvari nov model?
// če se spremeni v string, tega problema ni
