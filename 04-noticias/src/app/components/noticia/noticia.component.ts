import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../pages/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/dataLocalService.service';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() index: number;
  @Input() enFavoritos;

  constructor(
    private readonly iab: InAppBrowser,
    public readonly actionSheetController: ActionSheetController,
    private readonly socialSharing: SocialSharing,
    private readonly dataService: DataLocalService
  ) {}

  ngOnInit() {
    console.log('favoritos', this.enFavoritos);
  }

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {
    let guardarBorrarBtn;
    if (this.enFavoritos) {
      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash-outline',
        cssClass: 'action-dark',
        handler: () => {
          this.dataService.BorrarNoticia(this.noticia);
        },
      };
    } else {
      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'star-outline',
        cssClass: 'action-dark',
        handler: () => {
          this.dataService.guardarNoticia(this.noticia);
        },
      };
    }
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share-social-outline',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              '',
              this.noticia.url
            );
          },
        },
        guardarBorrarBtn,
        {
          text: 'Cancelar',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
