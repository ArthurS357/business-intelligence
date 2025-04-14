import { Request, Response } from "express";
import { DeleteLivroService } from "../../service/livro/DeleteLivroService";

class DeleteLivroController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        // Verificação se o ID foi fornecido
        if (!id) {
            return response.status(400).json({ error: "ID do Livro é obrigatório." });
        }

        const deleteLivroService = new DeleteLivroService();

        try {
            await deleteLivroService.execute(id);
            return response.status(200).json({ message: "Livro deletado com sucesso." });
        } catch (error) {
            console.error("Erro ao deletar o Livro:", error); // Corrigido para "Livro"
            return response.status(500).json({ error: "Ocorreu um erro ao deletar o Livro." }); // Corrigido para "Livro"
        }
    }
}

export { DeleteLivroController };
