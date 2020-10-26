import { Empresa } from '../empresa/empresa.model';

export interface Funcionario{
    id?: number
    nome: string
    cpf: string
    dataContratacao?: Date,
    idEmpresa?: number
    empresa?: Empresa
}