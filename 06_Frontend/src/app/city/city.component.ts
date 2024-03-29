import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Component for selecting a city.
 */
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {
  /** Currently selected city. */
  selectedCity: string = '';

  /** Flag indicating whether to show error message or not. */
  showError: boolean = false;
  onSearch() {
    if (this.selectedCity === '') {
      console.log('Please select the city');
      this.showError = true
    } else {
      this.showError = false;
      console.log('Selected City:', this.selectedCity);
      this.router.navigate(['/home'],{queryParams:{city:this.selectedCity}})
      
    }

  }



  /** List of cities with their values and labels. */
  cities: any[] = [
    { value: '', label: 'Select a City' },
    { value: 'nagpur', label: 'Nagpur, Maharashtra' },
    { value: 'bangalore', label: 'Bangalore, Karnataka' },
    { value: 'hyderabad', label: 'Hyderabad, Telangana' },
  ];

  /** Constructor to initialize the CityComponent. */
  constructor(private router:Router) { }


  /**
   * Function to check the validation of the selected city.
   * Logs a message if the city is not selected and updates showError flag.
   * Logs the selected city if it is valid and resets showError flag.
   */
  // checkValidation(): void {
  //   if (this.selectedCity === '') {
  //     console.log('Please select the city');
  //   } else {
  //     this.showError = false;
  //     console.log('Selected City:', this.selectedCity);
  //   }
  // }
}