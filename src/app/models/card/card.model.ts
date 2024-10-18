export class CardItem {
  id:number=0;
  title?: string;
  price?: number;
  weight?: number;
  url?: string;
  description?: string;
  children?: CardItem[];
}
