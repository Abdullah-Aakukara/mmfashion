export type BuyType = "than" | "cut_meter" | "both";
export type StockStatus = "in_stock" | "low_stock" | "out_of_stock";

export interface Fabric {
  id: string;
  name: string;
  slug: string;
  type: string;
  composition?: string;
  width_inches?: number;
  gsm?: number;
  weave?: string;
  buy_type: BuyType;
  moq: string;
  price_wholesale?: number;
  price_retail?: number;
  stock_status: StockStatus;
  images: string[];
  description?: string;
  active: boolean;
}

export interface FabricFilterOptions {
  searchQuery?: string;
  type?: string;
  buyType?: BuyType | "all";
  stockStatus?: StockStatus | "all";
  minPrice?: number;
  maxPrice?: number;
  width?: number;
}

