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
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirecto: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirecto: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      redirecto: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirecto: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirecto: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirecto: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirecto: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List-sliding',
      redirecto: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'List - Reorder',
      redirecto: '/list-reorder'
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirecto: '/loading'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
