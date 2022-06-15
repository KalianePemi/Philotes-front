import { Sexo } from './ISexo.model';

export interface Usuario {
  id: number
  nome: string
  sobrenome: string
  username: string
  email: string
  celular: string
  foto: string
  sexo: Sexo
  nascimento: Date
}
