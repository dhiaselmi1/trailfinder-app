export class ProductModel
{
    id:number;
    name:String;
    status:String;
    stock:number;
    price:number;
    description:String;
    image1:File ;
    image:String;
    imageToShow:Promise<String>;

}
