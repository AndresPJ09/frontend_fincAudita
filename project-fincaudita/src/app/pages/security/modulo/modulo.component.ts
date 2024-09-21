import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import Swal from 'sweetalert2';
<<<<<<< HEAD
import { Config } from 'datatables.net';
=======
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, DataTablesModule],
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {
  modulos: any[] = [];
<<<<<<< HEAD
  modulo: any = { id: 0, name: '', description: '', position: 0, state: false };
  isModalOpen = false;
  dtoptions: Config = {};
  dttriger: Subject<any> = new Subject<any>();
=======
  modulo: any = { id: 0, name: '', description: '', position: 0, state: true };
  isModalOpen = false;
  dtOptions: any = {}; // Using `any` to avoid type issues
  dtTrigger: Subject<any> = new Subject<any>();
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c

  private apiUrl = 'http://localhost:9191/api/Modulo';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.dtoptions = {
      pagingType: 'full_numbers',
=======
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
    };
    this.getModulos();
  }

  getModulos(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (modulos) => {
        this.modulos = modulos;
<<<<<<< HEAD
        this.dttriger.next(null);
=======
        this.dtTrigger.next(null); // Triggers DataTables update
        this.cdr.detectChanges(); // Ensure changes are detected for DataTables
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      },
      (error) => {
        console.error('Error fetching modules:', error);
      }
    );
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  onSubmit(form: NgForm): void {
    if (this.modulo.id === 0) {
      this.http.post(this.apiUrl, this.modulo).subscribe(() => {
        this.getModulos();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', '¡Módulo creado exitosamente!', 'success');
=======
        Swal.fire('Success', 'Module created successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    } else {
      this.http.put(this.apiUrl, this.modulo).subscribe(() => {
        this.getModulos();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', '¡Módulo actualizado exitosamente!', 'success');
=======
        Swal.fire('Success', 'Module updated successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    }
  }

  editModulo(modulo: any): void {
    this.modulo = { ...modulo };
    this.openModal();
  }

  deleteModulo(id: number): void {
    Swal.fire({
<<<<<<< HEAD
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar',
=======
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
          this.getModulos();
<<<<<<< HEAD
          Swal.fire(
            '¡Eliminado!',
            'Tu módulo ha sido eliminado.',
            'success'
          );
=======
          Swal.fire('Deleted!', 'Your module has been deleted.', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
        });
      }
    });
  }

  resetForm(): void {
<<<<<<< HEAD
    this.modulo = { id: 0, name: '', description: '', position: 0, state: false };
=======
    this.modulo = { id: 0, name: '', description: '', position: 0, state: true };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }
}
