import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecto:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecto: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecto: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'avatar',
      redirecto: '/avatar'
    },
    {
      icon: 'cog-outline',
      name: 'Tabs',
      redirecto: '/tabs'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirecto: '/button'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
