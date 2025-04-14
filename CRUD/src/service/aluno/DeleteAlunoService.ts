import { AlunosRepositories } from "../../repositories/alunosRepositories";
import { getCustomRepository } from "typeorm";

const ERROR_MESSAGES = {
  ID_REQUIRED: "Id is required",
  ALUNO_NOT_FOUND: "Aluno does not exist",
  DELETE_ERROR: "An error occurred while deleting the aluno.",
};

class DeleteAlunoService {
  async execute(id: string) {
    this.validateInput(id);

    const alunosRepository = getCustomRepository(AlunosRepositories);
    const alunoAlreadyExists = await alunosRepository.findOne({ id });

    if (!alunoAlreadyExists) {
      throw new Error(ERROR_MESSAGES.ALUNO_NOT_FOUND);
    }

    try {
      await alunosRepository.delete(id);
    } catch (error) {
      console.error("Error deleting Aluno:", error);
      throw new Error(ERROR_MESSAGES.DELETE_ERROR);
    }

    return { message: "Aluno successfully deleted." };
  }

  private validateInput(id: string | undefined) {
    if (!id) {
      throw new Error(ERROR_MESSAGES.ID_REQUIRED);
    }
  }
}

export { DeleteAlunoService };