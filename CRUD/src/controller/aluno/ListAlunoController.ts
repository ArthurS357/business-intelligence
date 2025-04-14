import { Request, Response } from "express";
import { ListAlunoService } from "../../service/aluno/ListAlunoService";
import { IAlunoInterface } from "../../interface/IAlunointerface";

class ListAlunoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAlunoService = new ListAlunoService();
        try {
            const alunos: IAlunoInterface[] = await listAlunoService.execute();
            return response.json(alunos);
        } catch (error) {
            console.error("Erro ao listar alunos:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao listar os alunos." });
        }
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const id = request.params.id;
        const listAlunoService = new ListAlunoService();
        try {
            const aluno = await listAlunoService.findById(id);
            if (!aluno) {
                return response.status(404).json({ error: "Aluno não encontrado." }); 
            }
            return response.json(aluno);
        } catch (error) {
            console.error("Erro ao encontrar o aluno:", error); 
            return response.status(500).json({ error: "Ocorreu um erro ao encontrar o aluno." }); 
        }
    }
}

export { ListAlunoController };
