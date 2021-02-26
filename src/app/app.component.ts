import { Component } from '@angular/core';
import {faCalendar,faCoffee} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  colors= 'red'
  style1={'color':'green'}
  style2={'color':'red'}
  check='false'
  calender=faCalendar
  coffe=faCoffee
}
