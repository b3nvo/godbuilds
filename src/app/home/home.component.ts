import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
      this.searchForm = this.formBuilder.group({
        username: ''
      });
   }

  ngOnInit(): void {

  }

  onSubmit(data) {
    this.api.getMatchHistory(data.username);
  }
}
