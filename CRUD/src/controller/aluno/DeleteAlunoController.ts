import { Request, Response } from "express";
import { DeleteAlunoService } from "../../service/aluno/DeleteAlunoService";

class DeleteAlunoController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        // Verificação se o ID foi fornecido
        if (!id) {
            return response.status(400).json({ error: "ID do aluno é obrigatório." }); // Corrigido para "aluno"
        }

        const deleteAlunoService = new DeleteAlunoService();

        try {
            await deleteAlunoService.execute(id);
            return response.status(200).json({ message: "Aluno deletado com sucesso." }); // Corrigido para "Aluno"
        } catch (error) {
            console.error("Erro ao deletar o aluno:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao deletar o aluno." }); // Corrigido para "aluno"
        }
    }
}

export { DeleteAlunoController };
