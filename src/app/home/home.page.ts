import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonLabel, IonInput, IonToggle,
  IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonToggle,
    IonList
  ],
})
export class HomePage {
  nombreUsuario: string = 'Adrian y DIEGO'; 
  colorDinamico: string = 'primary';
  contador: number = 0;
  textoDinamico: string = '';
  mostrarContenido: boolean = false;

  herramientas: string[] = [
    'Ionic Framework',
    'Angular Standalone',
    'TypeScript',
    'Tinkercad',
    'Arduino'
  ];

  constructor() {}

  aumentarNumero() {
    this.contador = this.contador + 1;
  }
}