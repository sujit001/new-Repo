import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['position', 'name', 'age',];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  position: number;
  age: number;
  
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'A', age: 11, },
  {position: 2, name: 'B', age: 12, },
  {position: 3, name: 'C', age: 6, },
  {position: 4, name: 'D', age: 9, },
  {position: 5, name: 'E', age: 23, },
  {position: 6, name: 'F', age: 65, },
  {position: 7, name: 'G', age: 45, },
  {position: 8, name: 'H', age: 89, },
  {position: 9, name: 'I', age: 18, },
  {position: 10, name: 'J', age: 20, },
  
];



