import { Request, Response } from "express";
import { ListEmprestimoService } from "../../service/emprestimo/ListEmprestimoService";

class ListEmprestimoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listEmprestimoService = new ListEmprestimoService();
        try {
            const emprestimos = await listEmprestimoService.execute();
            return response.json(emprestimos);
        } catch (error) {
            console.error("Erro ao listar emprestimos:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao listar as emprestimos." });
        }
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const id = request.params.id;
        const listEmprestimoService = new ListEmprestimoService();
        try {
            // Validate ID format if necessary
            const emprestimo = await listEmprestimoService.findById(id);
            if (!emprestimo) {
                return response.status(404).json({ error: "Empréstimo não encontrado." }); 
            }
            return response.json(emprestimo);
        } catch (error) {
            console.error("Erro ao encontrar o empréstimo:", error); 
            return response.status(500).json({ error: "Ocorreu um erro ao encontrar o empréstimo." }); 
        }
    }
}

export { ListEmprestimoController };
