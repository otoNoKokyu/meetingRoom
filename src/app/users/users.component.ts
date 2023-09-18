import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {

  constructor(private userServiice: UserServiceService) { }
  userList: any[] = []
  @Input() Manager: boolean = false;
  @Input() Engineer: boolean = false;
  @Input() Designer: boolean = false;
  @Input() Analyst: boolean = false;
  @Input() Devloper: boolean = false;

  activeChanges: any = {};

  // filteredUser = this.userList
  filteredUserList: any = []
  ngOnInit(): void {
    this.userServiice.getUsers().subscribe(data => {
      this.userList = data
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Manager'] || changes['Engineer'] || changes['Designer'] || changes['Analyst'] || changes['Developer']) {
      this.filterUsers();
    }

      this.userList = this.userList.filter(e=>{
        if(this.activeChanges[e.role]) return true
        else return false
      })
      

  }
  filterUsers(): void {
    // Filter the userList based on the checkbox values
    this.filteredUserList = this.userList.filter(user => {
      return (
        (this.Manager && user.role === 'Manager') ||
        (this.Engineer && user.role === 'Engineer') ||
        (this.Designer && user.role === 'Designer') ||
        (this.Analyst && user.role === 'Analyst') ||
        (this.Devloper && user.role === 'Developer')
      );
    });
  }
}
