import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farm',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NgbTypeaheadModule],
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  farms: any[] = [];
<<<<<<< HEAD
  farm: any = { id: 0, name: '', cityId: 0, userId: 0, cropId: 0, addres: '', dimension: 0, state: false };
  cities: any[] = [];
  users: any[] = [];
  crops: any[] = [];
  isModalOpen = false;

  private apiUrl = 'http://localhost:9191/api/Farm';
  private citiesUrl = 'http://localhost:9191/api/City';
  private usersUrl = 'http://localhost:9191/api/User';
  private cropsUrl = 'http://localhost:9191/api/Lot';


  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  searchCities = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? [] : this.cities
        .filter(city => city.name?.toLowerCase().includes(term.toLowerCase())).slice(0, 10))
=======
  farm: any = { id: 0, name: '', departamentId: 0, userId: 0, state: false };
  departments: any[] = [];
  users: any[] = [];
  isModalOpen = false;

  private apiUrl = 'https://localhost:44312/api/Farm';
  private departmentsUrl = 'https://localhost:44312/api/Departament';  
  private usersUrl = 'https://localhost:44312/api/User';  

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  searchDepartments = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.departments.filter(departament => departament.name?.toLowerCase().includes(term.toLowerCase())).slice(0, 10))
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
    );

  searchUsers = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
<<<<<<< HEAD
      map(term => term.length < 1 ? [] : this.users
        .filter(user => user.username?.toLowerCase().includes(term.toLowerCase())).slice(0, 10))
    );

  searchCrops = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? [] : this.crops
        .filter(crop => crop.name?.toLowerCase().includes(term.toLowerCase())).slice(0, 10))
    );

  formatCity = (city: any) => city.name;
  formatUser = (user: any) => user.username;
  formatCrop = (crop: any) => crop.name;

  onCitySelect(event: any): void {
    const selectedCity = event.item;
    this.farm.cityId = selectedCity.id;
=======
      map(term => term.length < 1 ? []
        : this.users.filter(user => user.username?.toLowerCase().includes(term.toLowerCase())).slice(0, 10))
    );

  formatDepartment = (departament: any) => departament.name;
  formatUser = (user: any) => user.username;

  onDepartmentSelect(event: any): void {
    const selectedDepartment = event.item;
    this.farm.departamentId = selectedDepartment.id;
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }

  onUserSelect(event: any): void {
    const selectedUser = event.item;
    this.farm.userId = selectedUser.id;
  }

<<<<<<< HEAD
  onCropSelect(event: any): void {
    const selectedCrop = event.item;
    this.farm.cropId = selectedCrop.id;
  }

  ngOnInit(): void {
    this.getFarms();
    this.getCities();
    this.getUsers();
    this.getCrops();
=======
  ngOnInit(): void {
    this.getFarms();
    this.getDepartments();
    this.getUsers();
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }

  getFarms(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (farms) => {
<<<<<<< HEAD
        this.farms = farms.map(farm => ({
          ...farm,
          cropName: farm.lots.length > 0 ? farm.lots[0].cultivo : 'No especificado' // Extraer el cultivo
        }));
        console.log('Farms loaded:', this.farms);
=======
        this.farms = farms;
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching farms:', error);
      }
    );
  }
<<<<<<< HEAD
  

  getCities(): void {
    this.http.get<any[]>(this.citiesUrl).subscribe(
      (cities) => {
        this.cities = cities;
      },
      (error) => {
        console.error('Error fetching cities:', error);
=======

  getDepartments(): void {
    this.http.get<any[]>(this.departmentsUrl).subscribe(
      (departments) => {
        this.departments = departments;
      },
      (error) => {
        console.error('Error fetching departments:', error);
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
      }
    );
  }

  getUsers(): void {
    this.http.get<any[]>(this.usersUrl).subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

<<<<<<< HEAD
  getCrops(): void {
    this.http.get<any[]>(this.cropsUrl).subscribe(
      (crops) => {
        this.crops = crops;
      },
      (error) => {
        console.error('Error fetching crops:', error);
      }
    );
  }

=======
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  onSubmit(form: NgForm): void {
<<<<<<< HEAD
    if (!this.farm.cityId || !this.farm.userId) {
      Swal.fire('Error', 'Debe seleccionar una ciudad y un usuario válidos.', 'error');
      return;
    }

    if (!this.farm.cropId) {
      Swal.fire('Error', 'Debe seleccionar un cultivo válido.', 'error');
      return;
    }

=======
    if (!this.farm.departamentId || !this.farm.userId) {
      Swal.fire('Error', 'Debe seleccionar un departamento y un usuario válidos.', 'error');
      return;
    }
  
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
    if (this.farm.id === 0) {
      this.http.post(this.apiUrl, this.farm).subscribe(() => {
        this.getFarms();
        this.closeModal();
        Swal.fire('Success', 'Farm created successfully!', 'success');
      });
    } else {
      this.http.put(this.apiUrl, this.farm).subscribe(() => {
        this.getFarms();
        this.closeModal();
        Swal.fire('Success', 'Farm updated successfully!', 'success');
      });
    }
  }

  editFarm(farm: any): void {
    this.farm = { ...farm };
    this.openModal();
  }

  deleteFarm(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
          this.getFarms();
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        });
      }
    });
  }

<<<<<<< HEAD
  getCityName(id: number): string {
    const city = this.cities.find(c => c.id === id);
    return city ? city.name : 'Desconocido';
=======
  getDepartmentName(id: number): string {
    const department = this.departments.find(d => d.id === id);
    return department ? department.name : '';
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }

  getUserName(id: number): string {
    const user = this.users.find(u => u.id === id);
<<<<<<< HEAD
    return user ? user.username : 'Desconocido';
  }

  getCropName(id: number): string {
    const crop = this.crops.find(c => c.id === id);
    return crop ? crop.name : 'Desconocido';
  }

  resetForm(): void {
    this.farm = { id: 0, name: '', cityId: 0, userId: 0, cropId: 0, addres: '', dimension: 0, state: false };
=======
    return user ? user.username : '';
  }

  resetForm(): void {
    this.farm = { id: 0, name: '', departamentId: 0, userId: 0, state: false };
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  }
}
