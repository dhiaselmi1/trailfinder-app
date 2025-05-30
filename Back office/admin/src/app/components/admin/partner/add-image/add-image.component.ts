import {Component, OnInit} from '@angular/core';
import {PartnerService} from "../../../../_services/partner.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import * as diagnostics_channel from "diagnostics_channel";
import {HttpErrorResponse} from "@angular/common/http";
import {ImageService} from "../../../../_services/image.service";
import {ImageModel} from "../../../../_models/image.model";

@Component({
  selector: 'ps-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements  OnInit{
    partner:any;
    constructor(private imageService:ImageService,private toastr:ToastrService,
                private activatedRoute:ActivatedRoute,    private router: Router
    ) {
    }
    file:File;
    file1:File;
    file2:File;
    images:ImageModel;
  ngOnInit(): void {
      this.partner = this.activatedRoute.snapshot.data['Partner'];
      console.log(this.partner);
 this.images = {
     logo:null,
     partner_id:0
 }
  }

  getFile(event:any){
    this.file= event.target.files[0];
  }
  getFile1(event:any){
    this.file1= event.target.files[0];

  }
  getFile2(event:any){
    this.file2= event.target.files[0];

  }

  cancel(fileToDelete: string) {
if(this.file!=undefined) {
    if (fileToDelete === this.file.name) {

        this.file = undefined; // Réinitialiser file1 à undefined
    }
}
    if (this.file1 != undefined) {
        if (fileToDelete === this.file1.name) {
            this.file1 = undefined;
        }
}
    if(this.file2 != undefined) {
        if (fileToDelete === this.file2.name)
        this.file2 = undefined;
    }


  }
save()
{
  this.images.logo=this.file
    this.images.partner_id=this.partner.id
    this.imageService.save(this.images).subscribe(() => {


        },
        (err: HttpErrorResponse) => {
            console.log(err);

        },
        () => {
        }
    );

    this.images.logo=this.file1
  this.imageService.save(this.images).subscribe(() => {


        },
        (err: HttpErrorResponse) => {
            console.log(err);

        },
        () => {
        }
    );
    this.images.logo=this.file2
  this.imageService.save(this.images).subscribe(() => {

          this.toastr.success('Vos images  ont  été ajouté avec succés');
          this.router.navigate(["/partenaires/list"]);
        },
        (err: HttpErrorResponse) => {
            console.log(err);

        },
        () => {
        }
    );
}

}
