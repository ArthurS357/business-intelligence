import { Request, Response } from "express";
import { DeleteEmprestimoService } from "../../service/emprestimo/DeleteEmprestimoService";

class DeleteEmprestimoController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        // Verificação se o ID foi fornecido
        if (!id) {
            return response.status(400).json({ error: "ID do Emprestimo é obrigatório." });
        }

        const deleteEmprestimoService = new DeleteEmprestimoService();

        try {
            await deleteEmprestimoService.execute(id);
            return response.status(200).json({ message: "Emprestimo deletado com sucesso." });
        } catch (error) {
            console.error("Erro ao deletar o Emprestimo:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao deletar o Emprestimo." });
        }
    }
}

export { DeleteEmprestimoController };
