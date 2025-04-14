import { EntityRepository, Repository } from "typeorm";
import { Emprestimo } from "../entities/emprestimo";

@EntityRepository(Emprestimo)
class EmprestimosRepositories extends Repository<Emprestimo> {
    // Adicionar métodos personalizados, se necessário

    async findByEmprestimoName(emprestimoName: string): Promise<Emprestimo[]> { 
        return this.createQueryBuilder("emprestimo")
            .where("emprestimo.name = :emprestimoName", { emprestimoName }) 
            .getMany();
    }
}

export { EmprestimosRepositories };
