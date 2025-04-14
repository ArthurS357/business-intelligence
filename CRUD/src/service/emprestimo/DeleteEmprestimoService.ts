import { getCustomRepository } from "typeorm";
import { EmprestimosRepositories } from "../../repositories/emprestimoRepositories";

const ERROR_MESSAGES = {
    ID_REQUIRED: "ID é obrigatório.",
    EMPRESTIMO_NOT_FOUND: "Empréstimo não existe.",
    DELETE_ERROR: "Ocorreu um erro ao deletar o Empréstimo.",
  };
  
  class DeleteEmprestimoService {
    async execute(id: string): Promise<{ message: string }> {
      this.validateInput(id);
  
      const emprestimosRepository = getCustomRepository(EmprestimosRepositories);
      
      // Verifique se o ID está no formato correto
      const emprestimoAlreadyExists = await emprestimosRepository.findOne({ where: { id } });
  
      if (!emprestimoAlreadyExists) {
        throw new Error(ERROR_MESSAGES.EMPRESTIMO_NOT_FOUND);
      }
  
      try {
        await emprestimosRepository.delete(id);
      } catch (error) {
        console.error("Erro ao deletar empréstimo:", error);
        throw new Error(ERROR_MESSAGES.DELETE_ERROR);
      }
  
      return { message: "Empréstimo deletado com sucesso." };
    }
  
    private validateInput(id: string | undefined) {
      if (!id) {
        throw new Error(ERROR_MESSAGES.ID_REQUIRED);
      }
    }
  }
  
  export { DeleteEmprestimoService };
