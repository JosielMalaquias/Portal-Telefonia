  import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
    declare var $: any;

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})

export class EmpresasComponent {

	constructor(private toastr: ToastrService, private HttpClient: HttpClient){ }

  // Must be declared as "any", not as "DataTables.Settings"
  dtEmpresa: any = {};


  ngOnInit(): void {

    $('.menu.ui').tab();
    $('.dropdown.ui').dropdown();

        this.dtEmpresa = {
      //ajax: 'http://127.0.0.1/Portal%20Telefonia/adm/read-tipo-recurso.php',
      columns: [{
        title: '',
        data: null,
        defaultContent: ''
      },
      {
        title: 'Razão',
        data: 'id'
      }, {
        title: 'Nome Fantasia',
        data: 'tipo_recurso'
      },
     {
        title: 'CNPJ',
        data: 'tipo_recurso'
      },
     {
        title: 'Status',
        data: 'tipo_recurso'
      }
      ],
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
    }
}
}
