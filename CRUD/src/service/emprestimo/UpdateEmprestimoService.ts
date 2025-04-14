import { IEmprestimoInterface } from "../../interface/IEmprestimointerface"; // Importando a interface de Emprestimos
import { EmprestimosRepositories } from "../../repositories/emprestimoRepositories"; // Importando o repositório de Emprestimos
import { AlunosRepositories } from "../../repositories/alunosRepositories"; // Importando o repositório de Alunos
import { LivrosRepositories } from "../../repositories/livroRepositories"; // Importando o repositório de Livros
import { getCustomRepository } from "typeorm"; 

class UpdateEmprestimoService {
  async execute({ id, aluno, livro, dtEmprestimo, dtDevolucao }: IEmprestimoInterface) {
    // Verifica se o ID da emprestimo é fornecido
    if (!id || id.trim() === "") {
        throw new Error("ID do emprestimo é obrigatório."); 
    }

    const emprestimoRepository = getCustomRepository(EmprestimosRepositories); 
    const alunoRepository = getCustomRepository(AlunosRepositories);
    const livroRepository = getCustomRepository(LivrosRepositories);

    // Verifica se o emprestimo existe
    const emprestimoAlreadyExists = await emprestimoRepository.findOne(id);
    if (!emprestimoAlreadyExists) {
        throw new Error("Venda não encontrada.");
    }

    // Busca aluno e livro em paralelo
    const [alu, livr] = await Promise.all([
        alunoRepository.findOne(aluno.id),
        livroRepository.findOne(livro.id),
    ]);

    // Verifica se o aluno e livro existem
    if (!alu) {
        throw new Error("Aluno não encontrado.");
    }
    if (!livr) {
        throw new Error("livro não encontrado.");
    }

    // Atualiza as propriedades de emprestimo
    emprestimoAlreadyExists.aluno = alu;
    emprestimoAlreadyExists.livro = livr;

    // Salva o emprestimo atualizada
    const updatedEmprestimo = await emprestimoRepository.save(emprestimoAlreadyExists);
    return updatedEmprestimo; 
}
}

export { UpdateEmprestimoService };
