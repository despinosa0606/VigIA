import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  codigo: string = '';
  nit: string = '';
  proveedor: string = '';
  excelFile: File | null = null;
  anexos: File[] = [];
  selectedFiles: File[] = [];

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.excelFile = input.files[0];
    }
  }

  handleAnexosInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.anexos = Array.from(input.files);
    }
  }

  submitForm(): void {
    // Logic to handle form submission, including file uploads
    console.log('Código:', this.codigo);
    console.log('NIT:', this.nit);
    console.log('Proveedor:', this.proveedor);
    console.log('Excel File:', this.excelFile);
    console.log('Anexos:', this.anexos);
  }

   onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files) {
      this.selectedFiles = Array.from(event.dataTransfer.files);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    // Opcional: puedes agregar lógica para resaltar el dropzone
  }

  onDragLeave(): void {
    // Opcional: puedes agregar lógica para quitar el resaltado del dropzone
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.excelFile = input.files[0];
    }
  }

  onSubmit(): void {
    // Lógica para manejar el envío del formulario
    this.submitForm();
  }
}