import { Request, Response } from "express";
import { CreateLivroService } from "../../service/livro/CreateLivroService";

class CreateLivroController {
    async handle(request: Request, response: Response) {
        const { titulo, autor, categoria } = request.body;

        // Verificação de campos obrigatórios
        if (!titulo || !autor || !categoria) {
            return response.status(400).json({ error: "Título, autor e categoria são obrigatórios." }); // Corrigido para incluir "autor"
        }

        // Verificação de campos não vazios
        if (titulo.trim() === "" || autor.trim() === "" || categoria.trim() === "") {
            return response.status(400).json({ error: "Título, autor e categoria não podem ser vazios." });
        }

        const livro = {
            titulo,
            autor,
            categoria
        };

        const createLivroService = new CreateLivroService();

        try {
            const ret = await createLivroService.execute(livro);
            return response.status(201).json(ret); // Retorna 201 Created
        } catch (error) {
            console.error("Erro ao criar o Livro:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao criar o Livro." });
        }
    }
}

export { CreateLivroController };
