import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() onSearchChange: EventEmitter<string> = new EventEmitter();


  searchQuery:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(event: any): void{
    if(event.charCode === 13){
      console.log(this.searchQuery);
      this.onSearchChange.emit(this.searchQuery);
    }
  }
}
