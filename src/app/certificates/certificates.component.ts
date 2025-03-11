import { Component } from '@angular/core';

type Item = { title: string; content: string; active?: boolean }

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'] 
})
export class CertificatesComponent {
  courses: Item[] = [
    {
      title: "Certified In Python",
      content: `<ul>
      <li>Certified In Python</li>
        <li>Certifying Authority: Internpe</li>
        <li>Demonstrating expertise in fundamental concepts such as syntax, data types, control structures, and functions.</li>
        <li>Utilizing Python for various applications in web development and data analysis using libraries like Matplotlib, NumPy, Pandas</li>
      </ul>`,
    },
    {
      title: "Certified In SQL",
      content: `<ul>
      <li>Certified In SQL</li>
        <li>Certifying Authority: IBM</li>
        <li>Demonstrated expertise in data modeling, queries, and database design.</li>
        <li>Utilized SQL for managing relational databases, ensuring data integrity and optimal performance</li>
      </ul>`
    },
  ];
  selected:Item=this.courses[0];
 toogle(item:Item){
  this.selected=item

  }
}
