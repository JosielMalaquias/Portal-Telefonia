import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homologados',
  templateUrl: './homologados.component.html',
  styleUrls: ['./homologados.component.css']
})
export class HomologadosComponent implements OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions_recurso: any = {};

  dtOptions_Homologados: any = {};

  constructor() { }

  ngOnInit(): void {

    this.dtOptions_recurso = {
      ajax: 'http://127.0.0.1/Portal%20Telefonia/adm/read-tipo-recurso.php',
      columns: [{
      	title: '',
      	data: null,
      	defaultContent: ''
      },
      {
        title: 'ID',
        data: 'id'
      }, {
        title: 'Tipo Recurso',
        data: 'tipo_recurso'
      }],
      // Configure the buttons
      // Declare the use of the extension in the dom parameter
      dom: "<'ui grid' <'eight wide column left aligned'B><'eight wide column right aligned'f><'sixteen wide column't><'eight wide column left aligned'i><'eight wide column right aligned'p>>",
      lengthChange: true,
      processing: true,

        buttons: [
        { extend: 'print', text: '<i class="fas fa-print"></i>', titleAttr: 'Imprimir' },
        { extend: 'excel', text: '<i class="far fa-file-excel"></i>', titleAttr: 'Excel' },
        {
          text: '<i class="fas fa-sync-alt"></i>',
          titleAttr: 'Atualizar',
          action: function ( e, dt, node, config ) {
              dt.ajax.reload();
          }
        },
        {
          text: '<i class="far fa-plus-square"></i>',
          titleAttr: 'Adicionar novo Recurso',
          key: '1',
          action: function (e, dt, node, config) {
            
          }
        }
        ]
    };
    this.dtOptions_Homologados = {
      ajax: '',
      columns: [{
      	title: '',
      	data: null,
      	defaultContent: ''
      },
     {
        title: 'ID',
        data: null
      }, 
     {
        title: 'Tipo Recurso',
        data: null
      }, 
     {
        title: 'Marca',
        data: null
      },
     {
        title: 'Modelo',
        data: null
      }, 
      {
        title: 'Status',
        data: null
      }],
      // Configure the buttons
      // Declare the use of the extension in the dom parameter
      dom: "<'ui grid' <'eight wide column left aligned'Bl><'eight wide column right aligned'f><'sixteen wide column't><'eight wide column left aligned'i><'eight wide column right aligned'p>>",
      lengthChange: true,
      buttons: [
        'print',
        'excel',
        {
          text: 'Some button',
          classname: 'basic',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
        ]
    };

  }
    

}

