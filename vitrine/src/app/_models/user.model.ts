export class UserModel {
    id:number;
    first_name:String;
    last_name:String;
    email:String;
    phone_number:String;
    password:String;
    passwordConfirmation:String;
    country:String;
    image:File ;
    photo:String;
    imageToShow:Promise<String>;
    isDropdownOpen:boolean;
    role_id:number


}