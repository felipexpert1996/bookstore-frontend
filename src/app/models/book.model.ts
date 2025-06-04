import { Author } from "./author.model";
import { Category } from "./category.model";

export class Book {
    id ?: number;
    name: string;
    isHighlight: boolean;
    price: string;
    cover: string;
    category: Category[];
    author: Author[];
    description: string;

    constructor(id: number, name: string, isHighlight: boolean, price: string, cover: string, description: string, category: Category[], author: Author[]){
        this.id = id;
        this.name = name;
        this.isHighlight = isHighlight;
        this.price = price;
        this.cover = cover;
        this.description = description;
        this.category = category;
        this.author = author;
    }
}
