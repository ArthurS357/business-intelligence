import { LivrosRepositories } from "../../repositories/livroRepositories";
import { Livro } from "../../entities/livro";
import { getCustomRepository } from "typeorm";

const ERROR_MESSAGES = {
  LIVRO_NOT_FOUND: "Livro not found",
};

class ListLivroService {
  private livrosRepository = getCustomRepository(LivrosRepositories);

  async execute(): Promise<Livro[]> {
    try {
      const livros = await this.livrosRepository
        .createQueryBuilder("livro")
        .getMany();
      return livros;
    } catch (error) {
      console.error("Erro ao listar livros:", error);
      throw new Error("Ocorreu um erro ao listar os livros. Tente novamente mais tarde.");
    }
  }

  async findById(id: string) {
    this.validateInput(id);

    const livrosRepository = getCustomRepository(LivrosRepositories);
    const livro = await livrosRepository.findOne({ id });

    if (!livro) {
      throw new Error(ERROR_MESSAGES.LIVRO_NOT_FOUND);
    }

    return livro;
  }

  private validateInput(id: string | undefined) {
    if (!id) {
      throw new Error("Id is required");
    }
  }
}

export { ListLivroService };