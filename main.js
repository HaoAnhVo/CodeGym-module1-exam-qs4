class Mobile {
    constructor(name, codeItem, manufacturer, price) {
        this.codeItem = codeItem;
        this.name = name;
        this.manufacturer = manufacturer;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCodeItem() {
        return this.codeItem;
    }
    setCodeItem(codeItem) {
        this.codeItem = codeItem;
    }
    getManufacturer() {
        return this.manufacturer;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }

    toString = function () {
        return `${this.codeItem} - ${this.name} - ${this.manufacturer} - ${this.price}`;
    };
}

let nokia = new Mobile("Nokia", "141", "Nokia", 2000);
let iphone = new Mobile("Iphone", "149", "Apple", 4000);
let xiaomi = new Mobile("Xiaomi", "152", "Xiaomi", 3000);

const products = [xiaomi, nokia, iphone];

function displayProducts() {
    products.sort();
    const productList = document.getElementById("product-list");
    const html = products.map((product, index) => {
        return `
            <tr>
                <td>${product.name}</td>
                <td>${product.codeItem}</td>
                <td>${product.manufacturer}</td>
                <td>${product.price}</td>
            </tr>
        `;
    });
    productList.innerHTML = html;
}

function handleAdd() {
    const newProductName = document.getElementById("product-name");
    const name = newProductName.value.trim();
    const newProductCodeItem = document.getElementById("product-codeItem");
    const codeItem = newProductCodeItem.value.trim();
    const newProductManufacturer = document.getElementById("product-manufacturer");
    const manufacturer = newProductManufacturer.value.trim();
    const newProductPrice = document.getElementById("product-price");
    const price = newProductPrice.value.trim();
    const newProducts = {
        name,
        codeItem,
        manufacturer,
        price,
    };

    if (newProducts) {
        products.push(newProducts);
        products.sort();
        displayProducts();
    }
}

displayProducts();
