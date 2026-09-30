export interface PessoaFisicaProps {
    cpf: string;
    nome: string;
    telefone: string;
    email: string;
    dataNascimento: string;
}

export interface EstagiarioProps extends PessoaFisicaProps {
    instituicaoEnsino: string;
    bolsaAuxilio: number;
}