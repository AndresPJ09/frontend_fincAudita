import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: any[] = [];
<<<<<<< HEAD
  country: any = { id: 0, name: '', description: '', code: '', state: false };
=======
  country: any = { id: 0, name: '', description: '', code: '', state: true };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  isModalOpen = false;

  private apiUrl = 'http://localhost:9191/api/Country';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (countries) => {
        this.countries = countries;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching countries:', error);
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
    if (this.country.id === 0) {
      this.http.post(this.apiUrl, this.country).subscribe(() => {
        this.getCountries();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'País creado con éxito.', 'success');
=======
        Swal.fire('Success', 'Country created successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    } else {
      this.http.put(this.apiUrl, this.country).subscribe(() => {
        this.getCountries();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'País actualizado con éxito.', 'success');
=======
        Swal.fire('Success', 'Country updated successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    }
  }

  editCountry(country: any): void {
    this.country = { ...country };
    this.openModal();
  }

  deleteCountry(id: number): void {
    Swal.fire({
<<<<<<< HEAD
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
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
          this.getCountries();
<<<<<<< HEAD
          Swal.fire('Eliminado', 'El país ha sido eliminado.', 'success');
=======
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
        });
      }
    });
  }

  resetForm(): void {
<<<<<<< HEAD
    this.country = { id: 0, name: '', description: '', code: '', state: false };
=======
    this.country = { id: 0, name: '', description: '', code: '', state: true };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }
}
