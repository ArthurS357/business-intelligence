import { Request, Response } from "express";
import { UpdateEmprestimoService } from "../../service/emprestimo/UpdateEmprestimoService";

class UpdateEmprestimoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { aluno, livro, dtEmprestimo, dtDevolucao } = request.body;
        const id = request.params.id; 

        // Verificação de ID obrigatório
        if (!id || id.trim() === "") {
            return response.status(400).json({ error: "ID de emprestimo é obrigatório." });
        }

        // Verificação de campos obrigatórios
        if (!aluno || !livro || !dtEmprestimo || !dtDevolucao) {
            return response.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const emprestimo = {
            id: id,
            aluno: aluno,
            livro: livro,
            dtEmprestimo: dtEmprestimo,
            dtDevolucao: dtDevolucao,
        };

        const updateEmprestimoService = new UpdateEmprestimoService();
        try {
            const updatedEmprestimo = await updateEmprestimoService.execute(emprestimo);
            return response.status(200).json(updatedEmprestimo);
        } catch (error) {
            console.error("Erro ao atualizar o empréstimo:", error); 
            return response.status(500).json({ error: "Ocorreu um erro ao atualizar o empréstimo." }); 
        }
    }
}

export { UpdateEmprestimoController };
