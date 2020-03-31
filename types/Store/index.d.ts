interface IProduct {
  name: string;
  sold: number;
  _id: string;
  description: string;
  price: number;
  category: ICategory;
  image: any;
  imageExtension: any;
}

interface ICategory {
  _id: string;
  name: string;
}

export { IProduct };
