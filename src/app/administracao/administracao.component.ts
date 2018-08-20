import { Component, OnInit } from '@angular/core';
	declare var $: any;

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  	
  	$('.top.menu .item').tab();
  }

}
