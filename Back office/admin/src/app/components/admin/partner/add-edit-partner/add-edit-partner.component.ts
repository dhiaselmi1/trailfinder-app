import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {PartnerService} from "../../../../_services/partner.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'ps-add-edit-partner',
  templateUrl: './add-edit-partner.component.html',
  styleUrls: ['./add-edit-partner.component.scss']
})
export class AddEditPartnerComponent implements OnInit{

  file:File;
partner:any;
  isCreatePartner = true;
  selectedType: string = "";
  constructor(private partnerService:PartnerService,private toastr:ToastrService,
              private activatedRoute:ActivatedRoute,    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.partner = this.activatedRoute.snapshot.data['Partner'];

    if (this.partner && this.partner.id > 0) {
this.selectedType = this.partner.category;
      this.isCreatePartner = false;
    }
  }

  getFile(event:any){
    this.file= event.target.files[0];
     this.partner.image = this.file;}


  savePartner()
  {
if(this.isCreatePartner) {
  this.partner.category = this.selectedType;
  this.partnerService.save(this.partner).subscribe(() => {
        this.partner = {
          id: 0,
          name: "",
          description: "",
          email: "",
          phone_number: "",
          category: "",
          logo: "",
          image: null
        };
        this.toastr.success('Votre partenaire a été ajouté avec succés');
        this.router.navigate(["/partenaires/list"]);
      },
      (err: HttpErrorResponse) => {
        console.log(err);

      },
      () => {
      }
  );
}
else
{this.partner.category = this.selectedType;
    console.log(this.selectedType);
  this.partnerService.update(this.partner).subscribe(() => {

        this.partner = {
          id: 0,
          name: "",
          description: "",
          email: "",
          phone_number: "",
          category: "",
          logo: "",
          image: null
        };
        this.toastr.success('Votre partenaire a été modifié avec succés');
        this.router.navigate(["/partenaires/list"]);
      },
      (err: HttpErrorResponse) => {
        this.toastr.error('Échec de modification');
        console.log(err);

      },
      () => {
      }
  );
}
  }

resetPartner()
{
  this.partner = {
    id:0,
    name:"",
    description:"",
    email:"",
    phone_number:"",
    category:"",
    logo:"",
    image:null
  };
  this.selectedType ="";
}
}