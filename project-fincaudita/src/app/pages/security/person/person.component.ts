import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, NgForm } from '@angular/forms';
=======
import { FormsModule, NgForm } from '@angular/forms';  // Importa el módulo aquí
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NgbTypeaheadModule],
  templateUrl: './person.component.html',
<<<<<<< HEAD
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: any[] = [];
  person: any = { id: 0, first_name: '', last_name: '', email: '', type_document: '', document: '', addres: '', phone: 0, birth_of_date: new Date().toISOString().slice(0, 10), cityId: 0, state: false };
  citys: any[] = [];  // Lista de ciudades
  isModalOpen = false;

  private apiUrl = 'http://localhost:9191/api/Person';
  private citysUrl = 'http://localhost:9191/api/City';
=======
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  persons: any[] = [];
  person: any = { id: 0, first_name: '', last_name: '', email: '', type_document: '', document: '', addres: '', phone: 0, birth_of_date: new Date().toISOString().slice(0, 10), cityId: 0, state: true };
  citys: any[] = [];  // Lista de módulos
  isModalOpen = false;

  private apiUrl = 'http://localhost:9191/api/Person';
  private citysUrl = 'http://localhost:9191/api/City'; 
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  searchCitys = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
<<<<<<< HEAD
      map(term => term.length < 1 ? []
        : this.citys.filter(city => city.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  formatCity = (city: any) => city.name;

  onCitySelect(event: any): void {
    const selectedCity = event.item;
    this.person.cityId = selectedCity.id;  // Asigna el ID de la ciudad seleccionada
  }

  ngOnInit(): void {
    this.getPersons();
    this.getCitys();  // Cargar las ciudades al iniciar
=======
      map(term => term.length < 1? []
        : this.citys.filter(city => city.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

    formatCity = (city: any) => city.name;

    onCitySelect(event: any): void {
      const selectedCity = event.item;
      this.person.cityId = selectedCity.id;  // Asigna el ID del módulo seleccionado
    }


  ngOnInit(): void {
    this.getPersons();
    this.getCitys();  // Cargar los módulos al iniciar
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }

  getPersons(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (persons) => {
        this.persons = persons;
        this.cdr.detectChanges();
      },
      (error) => {
<<<<<<< HEAD
        console.error('Error fetching persons:', error);
=======
        console.error('Error fetching views:', error);
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      }
    );
  }

  getCitys(): void {
    this.http.get<any[]>(this.citysUrl).subscribe(
      (citys) => {
        this.citys = citys;
      },
      (error) => {
<<<<<<< HEAD
        console.error('Error fetching cities:', error);
=======
        console.error('Error fetching modulos:', error);
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
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
    if (!this.person.cityId) {
<<<<<<< HEAD
      Swal.fire('Error', 'Debe seleccionar una ciudad válida.', 'error');
      return;
    }

    // Convert birth_of_date to ISO format before sending it to the server
=======
      Swal.fire('Error', 'Debe seleccionar un ciudad válido.', 'error');
      return;
    }

      // Convert birth_of_date to ISO format before sending it to the server
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
    this.person.birth_of_date = new Date(this.person.birth_of_date).toISOString();

    if (this.person.id === 0) {
      this.http.post(this.apiUrl, this.person).subscribe(() => {
        this.getPersons();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'Persona creada exitosamente.', 'success');
=======
        Swal.fire('Success', 'person created successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    } else {
      this.http.put(this.apiUrl, this.person).subscribe(() => {
        this.getPersons();
        this.closeModal();
<<<<<<< HEAD
        Swal.fire('Éxito', 'Persona actualizada exitosamente.', 'success');
=======
        Swal.fire('Success', 'person updated successfully!', 'success');
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      });
    }
  }

  editPersons(person: any): void {
<<<<<<< HEAD
    this.person = { ...person, birth_of_date: new Date(person.birth_of_date).toISOString().slice(0, 10) };
=======
    this.person = { ...person,  birth_of_date: new Date(person.birth_of_date).toISOString().slice(0, 10) };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
    this.openModal();
  }

  deletePersons(id: number): void {
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
          this.getPersons();
          Swal.fire(
<<<<<<< HEAD
            '¡Eliminado!',
            'La persona ha sido eliminada.',
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
    this.person = { id: 0, first_name: '', last_name: '', email: '', type_document: '', document: '', addres: '', phone: 0, birth_of_date: new Date().toISOString().slice(0, 10), cityId: 0, state: false };
  }

  getCityName(cityId: number): string {
    const city = this.citys.find(cit => cit.id === cityId);
    return city ? city.name : 'Desconocida';
  }
}
=======
    this.person = { id: 0, first_name: '', last_name: '', email: '', type_document: '', document: '', addres: '', phone: 0, birth_of_date: new Date().toISOString().slice(0, 10), cityId: 0, state: true };
  }
  getCityName(cityId: number): string {
    const city = this.citys.find(cit => cit.id === cityId);
    return city ? city.name : 'Unknown';
  }
}

>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
