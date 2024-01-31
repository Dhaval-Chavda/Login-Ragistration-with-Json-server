import { Component } from '@angular/core';
import { APiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  dataSource:any;

  constructor(private api:APiService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUser();

  }
  
  getUser()
  {
    this.api.getData().subscribe({
      next: (res:any) => {console.log(res);  
      this.dataSource = res},
      error: (err) => {console.log(err)}
    })
  }
}
