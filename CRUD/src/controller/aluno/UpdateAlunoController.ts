import { Request, Response } from "express";
import { UpdateAlunoService } from "../../service/aluno/UpdateAlunoService";
import { IAlunoInterface } from "../../interface/IAlunointerface";

class UpdateAlunoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, curso,  }: IAlunoInterface = request.body;
        const id = request.params.id;

        // Validação do ID
        if (!id) {
            return response.status(400).json({ error: "ID do Aluno é obrigatório." });
        }

        // Validação dos campos obrigatórios
        if (!name || !email || !curso) {
            return response.status(400).json({ error: "Os campos 'name', 'email' e 'curso' são obrigatórios." });
        }

        const updateAlunoService = new UpdateAlunoService();

        try {
            const updatedAluno = await updateAlunoService.execute({ id, name, email, curso});
            return response.status(200).json(updatedAluno); // Retorna 200 OK
        } catch (error) {
            console.error("Erro ao atualizar o Aluno:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao atualizar o Aluno." });
        }
    }
}

export { UpdateAlunoController };
