import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-authors-form',
  templateUrl: './authors-form.component.html',
  styleUrls: ['./authors-form.component.scss']
})
export class AuthorsFormComponent {
  authorsNumber = 0;
  authors = [];
  authorsCreated = [];

  constructor(private http: HttpClient) { }

  changeAuthors(number: number) {
    this.authors = []
    for(let i = 0; i < number; i++) {
      this.authors.push({ name: ""}); 
    }
  }

  sendAuthors() {
    this.http.post<any>("http://localhost:3000/authors/create_bulk",
      { authors: this.authors }
    ).subscribe(
      (authors) => {
        this.authorsCreated = authors;
      },
      response => {
        console.log("Request errors", response);
      }
    )
  }
}
