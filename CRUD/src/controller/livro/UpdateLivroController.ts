import { Request, Response } from "express";
import { UpdateLivroService } from "../../service/livro/UpdateLivroService";
import { ILivroInterface } from "../../interface/ILivrointerface";

class UpdateLivroController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { titulo, autor, categoria}: ILivroInterface = request.body;
        const id = request.params.id;

        // Validação do ID
        if (!id) {
            return response.status(400).json({ error: "ID do Livro é obrigatório." });
        }

        // Validação dos campos obrigatórios
        if (!titulo || !autor || !categoria) {
            return response.status(400).json({ error: "Os campos 'titulo', 'autor' e 'categoria' são obrigatórios." });
        }

        const updateLivroService = new UpdateLivroService();

        try {
            const updatedLivro = await updateLivroService.execute({ id, titulo, autor, categoria});
            return response.status(200).json(updatedLivro); // Retorna 200 OK
        } catch (error) {
            console.error("Erro ao atualizar o Livro:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao atualizar o Livro." });
        }
    }
}

export { UpdateLivroController };