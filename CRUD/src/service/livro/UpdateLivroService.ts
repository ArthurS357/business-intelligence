import { getCustomRepository } from "typeorm";
import { ILivroInterface } from "../../interface/ILivrointerface";
import { LivrosRepositories } from "../../repositories/livroRepositories";
import { Livro } from "../../entities/livro";

class UpdateLivroService {
  async execute({ id, titulo, autor, categoria}: ILivroInterface): Promise<Livro> {
    this.validateId(id);

    const livroRepository = getCustomRepository(LivrosRepositories);
    const livro = await livroRepository.findOne({ id });

    if (!livro) {
        throw new Error("livro não encontrado.");
    }
    livro.titulo = titulo ?? livro.titulo;
    livro.autor = autor ?? livro.autor;
    livro.categoria = categoria ?? livro.categoria;

    try {
        await livroRepository.save(livro);
    } catch (error) {
        console.error("Erro ao atualizar o livro:", error);
        throw new Error("Ocorreu um erro ao atualizar o livro. Tente novamente mais tarde.");
    }

    return livro; 
}
// - Verificar se o ID tem um formato válido
private validateId(id: string): void {
    if (!id) {
        throw new Error("ID é obrigatório.");
    }
}
  }
  
  export { UpdateLivroService };
  
