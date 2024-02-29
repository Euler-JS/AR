import { Component, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewPage } from '../pages/view/view.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }

  async openAR() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ViewPage,
      // swipeToClose: true,
      // presentingElement: this.routerOutlet.nativeEl
    });
  
    return await modal.present();
  }

}
