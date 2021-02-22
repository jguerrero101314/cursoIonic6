import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-seacrh',
  templateUrl: './seacrh.page.html',
  styleUrls: ['./seacrh.page.scss'],
})
export class SeacrhPage implements OnInit {

  albunes:any[] = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbunes().subscribe( albunes => {
        console.log(albunes);
        this.albunes = albunes;
    })
  }

  onSearchChange( event ){
    console.log(event);
  }
}
