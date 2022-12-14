export interface ICategoryRequest {
  name: string;
  automatic: boolean;
  type: string;
  airConditioning?: boolean;
  directionType: string;
  powerWindows: boolean;
  pricePerDay: number;
  pricePerMouth: number;
  pricePeryear: number;
  isActive?: boolean;
  carsId?: string;
}
