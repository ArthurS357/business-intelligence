import { EmprestimosRepositories} from "../../repositories/emprestimoRepositories";
import { Emprestimo } from "../../entities/emprestimo";
import { getCustomRepository } from "typeorm";
 
const ERROR_MESSAGES = {
    EMPRESTIMO_NOT_FOUND: "Empréstimo not found",
    ID_REQUIRED: "Id is required",
  };
 
  class ListEmprestimoService {
    // Método para listar todas as emprestimos
    async execute(): Promise<Emprestimo[]> {
        const emprestimosRepository = getCustomRepository(EmprestimosRepositories);
        try {
            const emprestimos = await emprestimosRepository
                .createQueryBuilder("emprestimo")
                .leftJoinAndSelect("emprestimo.aluno", "aluno") // Junção com aluno
                .leftJoinAndSelect("emprestimo.livro", "livro") // Junção com livro
                .getMany();
            return emprestimos;
        } catch (error) {
            console.error("Erro ao listar emprestimos:", error);
            throw new Error("Ocorreu um erro ao listar as emprestimos.");
        }
    }
 
    // Método para encontrar um Emprestimo pelo ID
    async findById(id: string): Promise<Emprestimo | undefined> {
      // Verifica se o ID é fornecido e não é uma string vazia
      if (!id || id.trim() === "") {
          throw new Error("ID é obrigatório.");
      }

      const emprestimosRepository = getCustomRepository(EmprestimosRepositories);
      try {
          const emprestimo = await emprestimosRepository.findOne(id); // Busca a emprestimo pelo ID
          return emprestimo;
      } catch (error) {
          console.error("Erro ao encontrar a emprestimo:", error);
          throw new Error("Ocorreu um erro ao encontrar a emprestimo.");
      }
  }
  }

  export { ListEmprestimoService}