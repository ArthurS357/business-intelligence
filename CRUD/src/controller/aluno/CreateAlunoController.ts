import { Request, Response } from "express";
import { CreateAlunoService } from "../../service/aluno/CreateAlunoService";

class CreateAlunoController {
    async handle(request: Request, response: Response) {
        const { name, email, curso } = request.body;

        // Verifica se os campos obrigatórios estão presentes
        if (!name || !email || !curso) {
            return response.status(400).json({ error: "Nome, email e curso são obrigatórios." });
        }

        const aluno = {
            name,
            email,
            curso
        };

        const createAlunoService = new CreateAlunoService();

        try {
            const ret = await createAlunoService.execute(aluno);
            return response.status(201).json(ret); // Retorna 201 Created
        } catch (error) {
            console.error("Erro ao criar o aluno:", error);
            return response.status(500).json({ error: "Ocorreu um erro ao criar o aluno." });
        }
    }
}

export { CreateAlunoController };
