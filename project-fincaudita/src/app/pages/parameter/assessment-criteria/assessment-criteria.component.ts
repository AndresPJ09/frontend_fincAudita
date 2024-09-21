import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assessment-criteria',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NgbTypeaheadModule],
  templateUrl: './assessment-criteria.component.html',
<<<<<<< HEAD
  styleUrls: ['./assessment-criteria.component.css']
})
export class AssessmentCriteriaComponent implements OnInit {
  assesments: any[] = [];
  assesment: any = { id: 0, name: '', type_criterian: '', rating_range: 0, state: false };
=======
  styleUrl: './assessment-criteria.component.css'
})
export class AssessmentCriteriaComponent {
  assesments: any[] = [];
  assesment: any = { id: 0, name: '', type_criterian: '', rating_range: 0, state: true };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  isModalOpen = false;

  private apiUrl = 'http://localhost:9191/api/AssesmentCriteria';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getassesments();
  }

  getassesments(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (assesments) => {
        this.assesments = assesments;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching assesments:', error);
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
    if (this.assesment.id === 0) {
      this.http.post(this.apiUrl, this.assesment).subscribe(() => {
        this.getassesments();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'Criterio de evaluación creado con éxito.', 'success');
=======
        Swal.fire('Success', 'assesment created successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    } else {
      this.http.put(this.apiUrl, this.assesment).subscribe(() => {
        this.getassesments();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'Criterio de evaluación actualizado con éxito.', 'success');
=======
        Swal.fire('Success', 'assesment updated successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    }
  }

  editassesment(assesment: any): void {
    this.assesment = { ...assesment };
    this.openModal();
  }

  deleteassesment(id: number): void {
    Swal.fire({
<<<<<<< HEAD
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar'
=======
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
          this.getassesments();
<<<<<<< HEAD
          Swal.fire('Eliminado', 'El criterio de evaluación ha sido eliminado.', 'success');
=======
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
        });
      }
    });
  }

  resetForm(): void {
<<<<<<< HEAD
    this.assesment = { id: 0, name: '', type_criterian: '', rating_range: 0, state: false };
=======
    this.assesment = { id: 0, name: '', description: '', code: '', price: 0, state: true };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }
}
