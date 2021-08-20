import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/dashboard/backend.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: any = [];


  constructor(private service: BackendService) {
    service.getgallery().subscribe((data: any) => {
      this.images = data;
    });
  
  }

  ngOnInit() {
     
  }
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  displayBasic2: boolean = false;

}
