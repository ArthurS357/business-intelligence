import { getCustomRepository } from "typeorm";
import { IEmprestimoInterface } from "../../interface/IEmprestimointerface";
import { EmprestimosRepositories } from "../../repositories/emprestimoRepositories";
import { AlunosRepositories } from "../../repositories/alunosRepositories"; // Importar o repositório de alunos
import { LivrosRepositories } from "../../repositories/livroRepositories";

class CreateEmprestimoService {
    async execute({ aluno: alunoId, livro: livroId, dtEmprestimo, dtDevolucao }: IEmprestimoInterface) {
        // Verifica se os campos obrigatórios estão presentes
        if (!alunoId || !livroId || !dtEmprestimo) {
            throw new Error("Aluno, livro e data de empréstimo são obrigatórios.");
        }

        const emprestimosRepository = getCustomRepository(EmprestimosRepositories);
        const alunosRepository = getCustomRepository(AlunosRepositories);
        const livrosRepository = getCustomRepository(LivrosRepositories);

        // Verifica se o aluno existe
        const alunoEntity = await alunosRepository.findOne(alunoId);
        if (!alunoEntity) {
            throw new Error("Aluno não encontrado.");
        }

        // Verifica se o livro existe
        const livro = await livrosRepository.findOne(livroId);
        if (!livro) {
            throw new Error("Livro não encontrado.");
        }

        // Cria um novo empréstimo
        const novoEmprestimo = emprestimosRepository.create({
            aluno: alunoEntity, // Referência ao objeto aluno
            livro: livro, // Referência ao objeto livro
            dtEmprestimo,
            dtDevolucao,
            status: 'pending' // or any default status value
        });

        try {
            // Salva o empréstimo no repositório
            await emprestimosRepository.save(novoEmprestimo);
        } catch (error) {
            console.error("Erro ao salvar o empréstimo:", error);
            throw new Error("Ocorreu um erro ao criar o empréstimo: " + error.message);
        }

        return novoEmprestimo;
    }
}

export { CreateEmprestimoService };
