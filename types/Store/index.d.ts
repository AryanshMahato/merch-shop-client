interface IProduct {
  name: string;
  sold: number;
  _id: string;
  description: string;
  price: number;
  category: ICategory;
  imageName: string;
}

interface ICategory {
  _id: string;
  name: string;
}

export { IProduct };
