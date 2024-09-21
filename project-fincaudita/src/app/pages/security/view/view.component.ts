import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { FormsModule, NgForm } from '@angular/forms';  // Importa el módulo aquí
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap'; 
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NgbTypeaheadModule],
  templateUrl: './view.component.html',
<<<<<<< HEAD
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  views: any[] = [];
  view: any = { id: 0, name: '', description: '', route: '', moduloId: 0, state: false };
=======
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  views: any[] = [];
  view: any = { id: 0, name: '', description: '',  route: '',  moduloId: 0, state: true };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  modulos: any[] = [];  // Lista de módulos
  isModalOpen = false;

  private apiUrl = 'http://localhost:9191/api/View';
  private modulosUrl = 'http://localhost:9191/api/Modulo';  // Endpoint para obtener módulos

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  searchModulos = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.modulos.filter(modulo => modulo.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  formatModulo = (modulo: any) => modulo.name;  // Formato de los resultados mostrados en el autocompletado

  onModuloSelect(event: any): void {
    const selectedModulo = event.item;
    this.view.moduloId = selectedModulo.id;  // Asigna el ID del módulo seleccionado
  }

  ngOnInit(): void {
    this.getViews();
    this.getModulos();  // Cargar los módulos al iniciar
  }

  getViews(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (views) => {
        this.views = views;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching views:', error);
      }
    );
  }

  getModulos(): void {
    this.http.get<any[]>(this.modulosUrl).subscribe(
      (modulos) => {
        this.modulos = modulos;
      },
      (error) => {
        console.error('Error fetching modulos:', error);
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
    if (!this.view.moduloId) {
      Swal.fire('Error', 'Debe seleccionar un módulo válido.', 'error');
      return;
    }
  
    if (this.view.id === 0) {
      this.http.post(this.apiUrl, this.view).subscribe(() => {
        this.getViews();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'Vista creada exitosamente.', 'success');
=======
        Swal.fire('Success', 'View created successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    } else {
      this.http.put(this.apiUrl, this.view).subscribe(() => {
        this.getViews();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'Vista actualizada exitosamente.', 'success');
=======
        Swal.fire('Success', 'View updated successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    }
  }
  
<<<<<<< HEAD
=======

>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  editView(view: any): void {
    this.view = { ...view };
    this.openModal();
  }

  deleteView(id: number): void {
    Swal.fire({
<<<<<<< HEAD
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, elimínalo',
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
          this.getViews();
          Swal.fire(
<<<<<<< HEAD
            '¡Eliminado!',
            'La vista ha sido eliminada.',
=======
            'Deleted!',
            'Your view has been deleted.',
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
            'success'
          );
        });
      }
    });
  }

  resetForm(): void {
<<<<<<< HEAD
    this.view = { id: 0, name: '', description: '', route: '', moduloId: 0, state: false };
=======
    this.view = { id: 0, name: '', description: '', route: '',  moduloId: 0, state: true };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }

  getModuloName(moduloId: number): string {
    const modulo = this.modulos.find(mod => mod.id === moduloId);
<<<<<<< HEAD
    return modulo ? modulo.name : 'Desconocido';
=======
    return modulo ? modulo.name : 'Unknown';
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }
}
