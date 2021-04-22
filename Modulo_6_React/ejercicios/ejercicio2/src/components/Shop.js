import List from "./List";

export default function Shop() {
    
    const shop = {
        electronics: [
            {id: 27, name: "Televisor", brand: "LG", model: "XP7302", price:399},
            {id: 28, name: "Equipo Hi-Fi", brand: "Samsung", model: "VF235", price:179},
            {id: 29, name: "Televisor", brand: "Sony", model: "Bravia-173", price:489},
        ],
        groceries: [
            {id: 30, name: "Galletas", brand: "María", price:0.90},
            {id: 31, name: "Ensalada", brand: "Imizurra", price:1.30},
            {id: 32, name: "Patatas", brand: "McKain", price:0.90},
            {id: 33, name: "Pasta", brand: "Gallo", price:0.90},
        ],
        pets: [
            {id: 34, name: "Croquetas para gato", brand: "Purina", price:4.90},
            {id: 35, name: "Arena de gato", brand: "Limpior", price:1.10},
        ]
    };
    
    return (
        <div>
            <List category="electronics" products={shop.electronics}/>
            <List category="groceries" products={shop.groceries}/>
            <List category="pets" products={shop.pets}/>
        </div>
    )
}
