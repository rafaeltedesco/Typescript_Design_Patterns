interface IProduct {
  name: string;
}

interface Buyable extends IProduct {
  price: number;
  quantity: number;
}

export { IProduct, Buyable };
