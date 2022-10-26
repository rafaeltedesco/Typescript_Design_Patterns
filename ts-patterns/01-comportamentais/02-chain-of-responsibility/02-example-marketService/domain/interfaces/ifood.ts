interface IFood {
  name: string;
  price: number;
  quantity: number;
  isHealthy: boolean;
  sell(): void;
  hasInStock(): boolean;
}

export default IFood;
