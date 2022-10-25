interface IFood {
  name: string;
  price: number;
  quantity: number;
  isHealthy: boolean;
  sell(): void;
}

export default IFood;
