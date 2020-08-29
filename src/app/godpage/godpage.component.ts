import { map } from 'rxjs/operators';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-godpage',
  templateUrl: './godpage.component.html',
  styleUrls: ['./godpage.component.css']
})
export class GodpageComponent implements OnInit {
  data: any = {};
  private param: any;
  private localPath = '../../assets/gods.json';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private api: ApiService) {
    this.route.paramMap
    .subscribe((el) => {
      console.log(el);
      let god: string = el.params.god;
      this.param = god[0].toUpperCase() + god.substr(1).toLowerCase();
    });

  }

  // tslint:disable-next-line: typedef
  hasNumber(myString) {
    return /\d/.test(myString);
  }

  ngOnInit(): void {
    if (this.hasNumber(this.param)) {
      this.godThroughHttp();
    } else {
      this.godThroughLocal();
    }
  }

  // tslint:disable-next-line: typedef
  async godThroughLocal(){
    console.log('getting local data');
    await this.api.getGodIdByName(this.param)
    .subscribe((res) => {
      res.map((el) => {
        if (el.Name === this.param) {
          this.api.getRecommendedGodItems(el.id)
          .subscribe((resp) => {
            console.log('resp', resp);
            this.data = resp;
          });
        }
      });
    });
  }

  // tslint:disable-next-line: typedef
  godThroughHttp() {
    console.log('getting http data');
    this.api.getRecommendedGodItems(this.param)
    .subscribe((el) => {
      this.data = el;
    });
  }
}
