export interface Task{
    id: string;
    title: string;
    done: boolean
}

export type TaskFilter = "all" | "todo" | "done";

export interface Item{
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface Product{
    id: string;
    name: string;
    price: number;
}