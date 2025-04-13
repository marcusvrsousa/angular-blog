import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input()
  contentImage: string = '';

  @Input()
  contentTitle: string = '';

  @Input()
  contentDescription: string = '';

  private id:string | null = '0';

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void{
    this.route.paramMap.subscribe(value => 
      this.id = value.get('id')
    )

    this.setValues(this.id)
  }

  setValues(id:string | null){
    const result = dataFake.filter(article => article.id == this.id)[0]
    console.log(result)
    this.contentImage = result.image;
    this.contentTitle = result.title;
    this.contentDescription = result.description;

  }

}
