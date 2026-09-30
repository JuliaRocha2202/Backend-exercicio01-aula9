import { PessoaFisica } from "./PessoaFisica.js";
import { EstagiarioProps } from "../interface/PessoaFisicaProps.js";

// Passamos ClienteProps para o Generic da classe mãe
export class Estagiario extends PessoaFisica<EstagiarioProps>{

    constructor(props: EstagiarioProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

 public get getinstituicaoEnsino(): string { return this.props.instituicaoEnsino; }
 public get getbolsaAuxilio(): number { return this.props.bolsaAuxilio; }

        public set setinstituicaoEnsino(novoinstituicaoEnsino: string) {
        if (novoinstituicaoEnsino.trim().length === 0) {
            console.log("\n ERRO: O campo nãnovoinstituicaoEnsinoinstituicaoEnsinoo pode ser vazio!");
            return;
        }
        this.props.instituicaoEnsino = novoinstituicaoEnsino;
    }
        public setbolsaAuxilio(novobolsaAuxilio: number) {
        if (novobolsaAuxilio === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.bolsaAuxilio = novobolsaAuxilio;
    }
}
