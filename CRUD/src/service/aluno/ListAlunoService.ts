import { AlunosRepositories } from "../../repositories/alunosRepositories";
import { Aluno } from "../../entities/aluno";
import { getCustomRepository } from "typeorm";

const ERROR_MESSAGES = {
  ALUNO_NOT_FOUND: "Aluno not found",
};

class ListAlunoService {
  private alunosRepository = getCustomRepository(AlunosRepositories);

  async execute(): Promise<Aluno[]> {
    try {
      const alunos = await this.alunosRepository
        .createQueryBuilder("aluno")
        .getMany();
      return alunos;
    } catch (error) {
      console.error("Erro ao listar alunos:", error);
      throw new Error("Ocorreu um erro ao listar os alunos. Tente novamente mais tarde.");
    }
  }

  async findById(id: string) {
    this.validateInput(id);

    const alunosRepository = getCustomRepository(AlunosRepositories);
    const aluno = await alunosRepository.findOne({ id });

    if (!aluno) {
      throw new Error(ERROR_MESSAGES.ALUNO_NOT_FOUND);
    }

    return aluno;
  }

  private validateInput(id: string | undefined) {
    if (!id) {
      throw new Error("Id is required");
    }
  }
}

export { ListAlunoService };