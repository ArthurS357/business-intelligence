import { getCustomRepository } from "typeorm";
import { LivrosRepositories } from "../../repositories/livroRepositories";

const ERROR_MESSAGES = {
  ID_REQUIRED: "ID é obrigatório.",
  LIVRO_NOT_FOUND: "Livro não existe.",
  DELETE_ERROR: "Ocorreu um erro ao deletar o livro.",
};

class DeleteLivroService {
  async execute(id: string) {
    this.validateInput(id);

    const livrosRepository = getCustomRepository(LivrosRepositories);
    const livroAlreadyExists = await livrosRepository.findOne({ id });

    if (!livroAlreadyExists) {
      throw new Error(ERROR_MESSAGES.LIVRO_NOT_FOUND);
    }

    try {
      await livrosRepository.delete(id);
    } catch (error) {
      console.error("Erro ao deletar livro:", error); 
      throw new Error(ERROR_MESSAGES.DELETE_ERROR);
    }

    return { message: "Livro deletado com sucesso." }; 
  }

  private validateInput(id: string | undefined) {
    if (!id) {
      throw new Error(ERROR_MESSAGES.ID_REQUIRED);
    }
  }
}

export { DeleteLivroService };
