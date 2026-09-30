import readLine from "readline-sync";
import { Estagiario } from "./src/models/Estagiario.js";

console.log("=== CADASTRO DE ESTAGIÁRIO ===");

const novoEstagiario = new Estagiario({
    cpf: "111.222.333-44",
    nome: "Carlos Silva",
    telefone: "11999999999",
    email: "carlos@email.com",
    dataNascimento: "2005-05-15",
    instituicaoEnsino: "SENAI",
    bolsaAuxilio: 800
});

console.log(`\nEstagiário cadastrado: ${novoEstagiario.getNome}`);
console.log(`Instituição de Ensino: ${novoEstagiario.getinstituicaoEnsino}`);

// Atualizando os dados
novoEstagiario.setNome = readLine.question(
    "\nDigite o nome atualizado do estagiário: "
);

novoEstagiario.setTelefone = readLine.question(
    "Digite o novo telefone: "
);

novoEstagiario.setinstituicaoEnsino = readLine.question(
    "Digite a nova instituição de ensino: "
);

novoEstagiario.setbolsaAuxilio(
    Number(readLine.question("Digite o novo valor da bolsa-auxílio: "))
);

// Exibindo todos os dados
console.log("\n================================================");
console.log("             DADOS DO ESTAGIÁRIO");
console.log("================================================");

console.log(`CPF:                   ${novoEstagiario.getCpf}`);
console.log(`Nome:                  ${novoEstagiario.getNome}`);
console.log(`Telefone:              ${novoEstagiario.getTelefone}`);
console.log(`E-mail:                ${novoEstagiario.getEmail}`);
console.log(`Data de Nascimento:    ${novoEstagiario.getDataNascimento}`);
console.log(`Instituição de Ensino: ${novoEstagiario.getinstituicaoEnsino}`);
console.log(`Bolsa-Auxílio:         R$ ${novoEstagiario.getbolsaAuxilio}`);

console.log("================================================");