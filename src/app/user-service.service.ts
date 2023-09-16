import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  Users = [
    {
      "name": "John Doe",
      "employeeId": "001",
      "role": "Manager",
      "email": "john.doe@example.com"
    },
    {
      "name": "Jane Smith",
      "employeeId": "002",
      "role": "Engineer",
      "email": "jane.smith@example.com"
    },
    {
      "name": "David Johnson",
      "employeeId": "003",
      "role": "Designer",
      "email": "david.johnson@example.com"
    },
    {
      "name": "Emily Davis",
      "employeeId": "004",
      "role": "Analyst",
      "email": "emily.davis@example.com"
    },
    {
      "name": "Michael Wilson",
      "employeeId": "005",
      "role": "Developer",
      "email": "michael.wilson@example.com"
    },
    {
      "name": "Sarah Brown",
      "employeeId": "006",
      "role": "Manager",
      "email": "sarah.brown@example.com"
    },
    {
      "name": "Daniel Lee",
      "employeeId": "007",
      "role": "Engineer",
      "email": "daniel.lee@example.com"
    },
    {
      "name": "Olivia Martinez",
      "employeeId": "008",
      "role": "Designer",
      "email": "olivia.martinez@example.com"
    },
    {
      "name": "William Anderson",
      "employeeId": "009",
      "role": "Analyst",
      "email": "william.anderson@example.com"
    },
    {
      "name": "Sophia Garcia",
      "employeeId": "010",
      "role": "Developer",
      "email": "sophia.garcia@example.com"
    },
    {
      "name": "James Hernandez",
      "employeeId": "011",
      "role": "Manager",
      "email": "james.hernandez@example.com"
    },
    {
      "name": "Ava Lopez",
      "employeeId": "012",
      "role": "Engineer",
      "email": "ava.lopez@example.com"
    },
    {
      "name": "Benjamin Gonzalez",
      "employeeId": "013",
      "role": "Designer",
      "email": "benjamin.gonzalez@example.com"
    },
    {
      "name": "Charlotte Adams",
      "employeeId": "014",
      "role": "Analyst",
      "email": "charlotte.adams@example.com"
    },
    {
      "name": "Henry Scott",
      "employeeId": "015",
      "role": "Developer",
      "email": "henry.scott@example.com"
    },
    {
      "name": "Mia Hall",
      "employeeId": "016",
      "role": "Manager",
      "email": "mia.hall@example.com"
    },
    {
      "name": "Elijah Turner",
      "employeeId": "017",
      "role": "Engineer",
      "email": "elijah.turner@example.com"
    },
    {
      "name": "Amelia Rodriguez",
      "employeeId": "018",
      "role": "Designer",
      "email": "amelia.rodriguez@example.com"
    },
    {
      "name": "Liam Lewis",
      "employeeId": "019",
      "role": "Analyst",
      "email": "liam.lewis@example.com"
    },
    {
      "name": "Isabella Hall",
      "employeeId": "020",
      "role": "Developer",
      "email": "isabella.hall@example.com"
    }
  ]

  getUsers(): Observable<any>{
    return of(this.Users)
  }

}
