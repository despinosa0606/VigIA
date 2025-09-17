import { Component } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  searchProveedor: string = '';
  searchNIT: string = '';
  searchFecha: string = '';

  solicitudes = [
    {
      id: '#1023',
      proveedor: 'Proveedor A',
      fecha: new Date('2025-09-16'),
      estado: {
        economica: 'pending',
        social: 'done',
        ambiental: 'pending',
        general: 'En proceso'
      }
    },
    {
      id: '#1022',
      proveedor: 'Proveedor B',
      fecha: new Date('2025-09-15'),
      estado: {
        economica: 'done',
        social: 'done',
        ambiental: 'done',
        general: 'Finalizado'
      }
    }
  ];

  searchSolicitudes() {
    // Implementa aquí la lógica de búsqueda si lo deseas
  }

  verInforme(id: string) {
    // Implementa aquí la lógica para ver el informe
  }
}