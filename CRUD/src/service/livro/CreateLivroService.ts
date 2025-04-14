import { getCustomRepository } from "typeorm";
import { ILivroInterface } from "../../interface/ILivrointerface";
import { LivrosRepositories } from "../../repositories/livroRepositories";

class CreateLivroService {
    async execute({ titulo, autor, categoria }: ILivroInterface) {
        // Verificação de campos obrigatórios
        if (!titulo || !autor || !categoria) {
            throw new Error("Título, autor e categoria são obrigatórios."); 
        }

        // Verificação de campos não vazios
        if (titulo.trim() === "" || autor.trim() === "" || categoria.trim() === "") {
            throw new Error("Título, autor e categoria não podem ser vazios.");
        }

        const livrosRepository = getCustomRepository(LivrosRepositories);
        const livro = livrosRepository.create({
            titulo,
            autor,
            categoria,
        });

        try {
            await livrosRepository.save(livro);
        } catch (error) {
            console.error("Erro ao salvar o livro:", error); 
            throw new Error("Ocorreu um erro ao criar o livro."); 
        }

        return livro;
    }
}

export { CreateLivroService };
