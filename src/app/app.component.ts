import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/people')
      .valueChanges()
      .subscribe(people => {
        this.people = people;
        console.log(this.people);
      });
  }
}
