import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-godpage',
  templateUrl: './godpage.component.html',
  styleUrls: ['./godpage.component.css']
})
export class GodpageComponent implements OnInit {
  private data:any = {};
  private gods:any = [];
  private param:any;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.paramMap
    .subscribe((el) => {
      this.param = el;
    });
  }

  ngOnInit(): void {
    this.getLocalData();
  }

  async getLocalData(){
    await this.http.get('../../assets/gods.json')
    .subscribe((el) => {
      el.map((item) => {
        if (item.Name === this.param.params.god) {
          console.log(item);
          this.data = item;
        }
      })
    });
  }
}
