export class AgencyModel {
   id:number;
   representative:String;
   agency:String;
   email:String;
   phone_number:String;
   activity:String;
   description:String;
   password:String;
   country:String;
  image:File ;
  logo:String;
  imageToShow:Promise<String>;
   passwordConfirmation:String;
    isDropdownOpen:boolean;
   approved:boolean;

}
