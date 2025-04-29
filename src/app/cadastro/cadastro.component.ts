import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  standalone: false,
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  erro: string | null = null;
  sucesso: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const novoUsuario = this.cadastroForm.value;
      this.authService.register(novoUsuario).subscribe({
        next: () => {
          this.sucesso = 'Usuário cadastrado com sucesso!';
          this.erro = null;
          this.cadastroForm.reset();
        },
        error: (err) => {
          this.erro = 'Erro ao cadastrar usuário';
          this.sucesso = null;
        }
      });
    }
  }
}
