import { Component } from '@angular/core';import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  componentes:Observable<Componente[]>;

  constructor(private dataService:DataService) {
    this.initializeApp();
  }

  initializeApp(){
    this.componentes = this.dataService.getMenuOpts();
  }


}
