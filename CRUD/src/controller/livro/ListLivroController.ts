import { Request, Response } from "express";
import { ListLivroService } from "../../service/livro/ListLivroService";
import { ILivroInterface } from "../../interface/ILivrointerface";

class ListLivroController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listLivroService = new ListLivroService();
        try {
            const livros: ILivroInterface[] = await listLivroService.execute();
            return response.json(livros);
        } catch (error) {
            console.error("Erro ao listar livros:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao listar os livros." });
        }
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const id = request.params.id;
        const listLivroService = new ListLivroService(); // Corrigido para usar ListLivroService
        try {
            const livro = await listLivroService.findById(id); // Corrigido para usar findById do serviço de livros
            if (!livro) {
                return response.status(404).json({ error: "Livro não encontrado." }); 
            }
            return response.json(livro);
        } catch (error) {
            console.error("Erro ao encontrar o livro:", error); 
            return response.status(500).json({ error: "Ocorreu um erro ao encontrar o livro." }); 
        }
    }
}

export { ListLivroController };
