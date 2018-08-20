import { Component, OnInit } from '@angular/core';

    declare var $: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  title = 'Cadastro';
dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
  	$('.ui.dropdown').dropdown();
  	    this.dtOptions = {
      		pagingType: 'full_numbers',

			}

  }

}
