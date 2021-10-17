export interface IProducts {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
};

export interface IProductProps {
    product: IProducts;
};