import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private users$: Observable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    this.userService.loadDummyData();
  }

  createUser(user) {
    this.userService.createNewUser(user);
  }

  approveAll() {
    this.userService.approveAll();
  }
}
