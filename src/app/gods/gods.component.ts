import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {

  gods: any = [];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    this.api.getGods()
    .subscribe((data) => {
      this.gods = data;
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getGod(data) {
    this.router.navigate(['/gods', data.id]);
  }

}
