export interface IProduct {
    id: number;
    name: string;
    price: number;
    image_url: string;
    description: string;
    category: string;
    quantity?: number;
}

export interface IBasketState {
    items: IProduct[];
    total: number;
}

export interface IProductState {
    items: IProduct[];
    loading: boolean;
    error: string;
    temp: IProduct[];
    notfound: boolean;
}

export interface IProductAction {
    payload: IProduct;
    type: string;
}

export interface ICategory {
    id: number;
    name: string;
    base?: string;
}

export interface ICategoryState {
    items: ICategory[];
    loading: boolean;
    error: string;
}

export interface IThemeState {
    theme: string;
}

export interface ISortBy {
    id: number;
    name: string;
    nameSpace: string;
    isReverse: boolean;
}