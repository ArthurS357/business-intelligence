import { IAlunoInterface } from "../../interface/IAlunointerface";
import { AlunosRepositories } from "../../repositories/alunosRepositories";
import { getCustomRepository } from "typeorm";

class CreateAlunoService {
    async execute({ name, email, curso }: IAlunoInterface) {
        // Verifica se os campos obrigatórios estão presentes
        if (!name || !email || !curso) {
            throw new Error("Nome, email e curso são obrigatórios.");
        }

        const alunosRepository = getCustomRepository(AlunosRepositories);
        
        // Cria um novo aluno com a chave estrangeira para o curso
        const aluno = alunosRepository.create({
            name,
            email,
            curso
        });

        try {
            // Salva o aluno no repositório
            await alunosRepository.save(aluno);
        } catch (error) {
            console.error("Erro ao salvar o aluno:", error);
            throw new Error("Ocorreu um erro ao criar o aluno: " + error.message);
        }

        return aluno;
    }
}

export { CreateAlunoService };
