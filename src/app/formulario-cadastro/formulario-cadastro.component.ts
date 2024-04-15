import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrl: './formulario-cadastro.component.css',
})
export class FormularioCadastroComponent {
  nome: string = '';
  telefone: string = '';
  aceitouJesus: boolean = false;
  mensagem: string = '';

  handleSubmit(): void {
    // Aqui você pode adicionar a lógica para enviar os dados para o backend ou fazer o que for necessário
    console.log('Nome:', this.nome);
    console.log('Telefone:', this.telefone);
    console.log('Aceitou Jesus:', this.aceitouJesus);

    // Limpa os campos do formulário
    this.nome = '';
    this.telefone = '';
    this.aceitouJesus = false;

    this.mensagem = 'Cadastro realizado com sucesso!';
  }
}
