import { Component, OnInit } from '@angular/core';
import { QueryParamBuilder, QueryParam } from '@ngqp/core';

import { HttpService } from '../http.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  
  letters: string;
  letterResults: Object;
  results: string;
  clicked: boolean = false;
  searchText;
  
  constructor(private _http: HttpService) { }

  ngOnInit(){};

  onClickMe(letters)
  {
    this.results = letters;
    console.log("Results: " + this.results);
    this.sendResults(this.results);
  }

  sendResults(results) {
    this._http.getResults(results).subscribe((data) => {
      this.letterResults = data;
      console.log(this.letterResults);
    });
  }

}
