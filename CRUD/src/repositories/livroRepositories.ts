import { EntityRepository, Repository } from "typeorm";
import { Livro } from "../entities/livro";

@EntityRepository(Livro)
class LivrosRepositories extends Repository<Livro> {
    // Adicionar métodos personalizados, se necessário

    async findByLivroName(livroName: string): Promise<Livro[]> { 
        return this.createQueryBuilder("livro")
            .where("livro.name = :livroName", { livroName }) 
            .getMany();
    }
}

export { LivrosRepositories };
