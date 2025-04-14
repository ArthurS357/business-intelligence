import { Request, Response } from "express";
import { CreateEmprestimoService } from "../../service/emprestimo/CreateEmprestimoService";

class CreateEmprestimoController {
    async handle(request: Request, response: Response) {
        const { aluno_id, livro_id, dtEmprestimo, dtDevolucao } = request.body;

        // Verifica se os campos obrigatórios estão presentes
        if (!aluno_id || !livro_id || !dtEmprestimo) {
            return response.status(400).json({ error: "Aluno, livro e data de empréstimo são obrigatórios." });
        }

        const emprestimo = {
            aluno: aluno_id,
            livro: livro_id,
            dtEmprestimo,
            dtDevolucao
        };

        const createEmprestimoService = new CreateEmprestimoService();

        try {
            const ret = await createEmprestimoService.execute(emprestimo);
            return response.status(201).json(ret); // Retorna 201 Created
        } catch (error) {
            console.error("Erro ao criar o empréstimo:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao criar o empréstimo." });
        }
    }
}

export { CreateEmprestimoController };
