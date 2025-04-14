import { EntityRepository, Repository } from "typeorm";
import { Aluno } from "../entities/aluno";

@EntityRepository(Aluno)
class AlunosRepositories extends Repository<Aluno> {
  //Adicionar métodos personalizados para manipulação de usuários, se necessário.

  /**
   * @param email - O email do usuário a ser encontrado.
   * @returns O usuário encontrado ou undefined se não existir.
   */
  async findByEmail(email: string): Promise<Aluno | undefined> {
    return this.findOne({ where: { email } });
  }
}

export { AlunosRepositories };

