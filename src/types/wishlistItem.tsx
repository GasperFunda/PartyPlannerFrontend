export class WishlistItem {
    id: number;
    description: string;
    icon: string;
    quantity: number;

    constructor(id: number, description: string, icon: string, quantity: number) {
        this.id = id
        this.description = description
        this.icon = icon
        this.quantity = quantity
    }
}  