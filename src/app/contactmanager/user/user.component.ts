import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<User> = of(new User(0, new Date(), '', '', '', []));

  constructor(private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap
      .pipe(
        switchMap(p => {
          const id = p.get('id');
          const bnm = this.userService.users
            .pipe(
              map(data => {
                const usr = data.find(x => x.id == +id!)!;
                // console.info("user: ", usr?.notes)
                return usr
              }),
            )

          return bnm;
        })
      )
  }

}
