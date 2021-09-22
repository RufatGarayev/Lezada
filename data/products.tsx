export interface IProducts {
    id: number;
    img: string;
    title: string;
    price: number;
    label: string;
    rating: string;
    category: string;
    group?: string;
    hasDiscount: boolean;
    isNew: boolean;
    count: number;
    isInCart: boolean;
    previousPrice?: number;
};

export interface IProductProps {
    product: IProducts;
};

export const products: IProducts[] = [
    {
        id: 1,
        img: "/images/products/glass.jpg",
        title: "Glass",
        price: 15.00,
        label: "",
        rating: "★★★★★",
        category: "Decor",
        group: "Popular",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 2,
        img: "/images/products/wooden-table.jpg",
        title: "Wooden Table",
        previousPrice: 17.00,
        price: 15.30,
        label: "-10%",
        rating: "★★★★★",
        category: "Furniture",
        group: "Sale",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 3,
        img: "/images/products/shelf.jpg",
        title: "Shelf",
        price: 17.60,
        label: "new",
        rating: "★★★★★",
        category: "Furniture",
        group: "New",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false,
    },
    {
        id: 4,
        img: "/images/products/wooden-chair.jpg",
        title: "Wooden Chair",
        price: 17.60,
        label: "",
        rating: "★★★★★",
        category: "Furniture",
        group: "Popular",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 5,
        img: "/images/products/sofa.jpg",
        title: "Sofa",
        price: 317.60,
        label: "new",
        rating: "★★★★★",
        category: "Furniture",
        group: "New",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false,
    },
    {
        id: 6,
        img: "/images/products/arm-chair.jpg",
        title: "Arm Chair",
        price: 215.20,
        label: "new",
        rating: "★★★★★",
        category: "Furniture",
        group: "New",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false,
    },
    {
        id: 7,
        img: "/images/products/sunglass.jpg",
        title: "Sunglasses",
        price: 7.50,
        label: "",
        rating: "★★★★★",
        category: "Fashion",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 8,
        img: "/images/products/shorts.jpg",
        title: "Shorts",
        previousPrice: 17.00,
        price: 15.30,
        label: "-10%",
        rating: "★★★★★",
        category: "Fashion",
        group: "Sale",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 9,
        img: "/images/products/tshirt.jpg",
        title: "Tshirt",
        previousPrice: 10.00,
        price: 7.50,
        label: "-25%",
        rating: "★★★★★",
        category: "Fashion",
        group: "Sale",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 10,
        img: "/images/products/trousers.jpg",
        title: "Trousers",
        price: 28.50,
        label: "",
        rating: "★★★★★",
        category: "Fashion",
        group: "Popular",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 11,
        img: "/images/products/shoes.jpg",
        title: "Shoes",
        price: 21.60,
        label: "",
        rating: "★★★★★",
        category: "Fashion",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 12,
        img: "/images/products/backpack.jpg",
        title: "Backpack",
        price: 15.30,
        label: "new",
        rating: "★★★★★",
        category: "Fashion",
        group: "New",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false,
    },
    {
        id: 13,
        img: "/images/products/black-bag.jpg",
        title: "Black Bag",
        price: 13.00,
        label: "new",
        rating: "★★★★★",
        category: "Fashion",
        group: "New",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false,
    },
    {
        id: 14,
        img: "/images/products/blue-clay.jpg",
        title: "Blue Clay",
        previousPrice: 18.00,
        price: 15.84,
        label: "-12%",
        rating: "★★★★★",
        category: "Cosmetics",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 15,
        img: "/images/products/cream-bottle.jpg",
        title: "Cream Bottle Mock Up",
        price: 27.00,
        label: "",
        rating: "★★★★★",
        category: "Cosmetics",
        group: "Popular",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 16,
        img: "/images/products/cream-tube.jpg",
        title: "Cream Tube",
        price: 30.00,
        label: "",
        rating: "★★★★★",
        category: "Cosmetics",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 17,
        img: "/images/products/verk-black.jpg",
        title: "Verk Black Watch",
        price: 21.60,
        label: "",
        rating: "★★★★★",
        category: "Cosmetics",
        group: "Popular",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
    },
    {
        id: 18,
        img: "/images/products/verk-white.jpg",
        title: "Verk White Watch",
        previousPrice: 17.00,
        price: 14.45,
        label: "-15%",
        rating: "★★★★★",
        category: "Cosmetics",
        group: "Sale",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false,
    }
];