import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentImg:string = "";
  contentTitle:string = "";
  contentDescricao:string = "";
  private id:string | null = "0";
  constructor(private route:ActivatedRoute){ }

  ngOnInit():void{
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const resultado = dataFake.filter(artigo => artigo.id == id)[0]
    this.contentImg = resultado.imagen;
    this.contentTitle = resultado.title;
    this.contentDescricao = resultado.descricao;
  }

}
