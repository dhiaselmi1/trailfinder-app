export class PartnerModel
{
    id:number;
    name:String;
    email:String;
    phone_number:String;
    description:String;
    category:String;
    logo:String;
    image:File ;
    imageToShow:Promise<String>;

}