import { Component} from '@angular/core';
import { user }from './user.model';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user:user = new user();
  submit()
  {
    console.log(this.user);
  }
}
