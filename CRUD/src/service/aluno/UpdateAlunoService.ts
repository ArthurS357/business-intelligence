import { IAlunoInterface } from "../../interface/IAlunointerface";
import { AlunosRepositories } from "../../repositories/alunosRepositories";
import { getCustomRepository } from "typeorm";
import { Aluno } from "../../entities/aluno";

class UpdateAlunoService {
    async execute({ id, name, email, curso}: IAlunoInterface): Promise<Aluno> {
        this.validateId(id);
    
        const alunoRepository = getCustomRepository(AlunosRepositories);
        const aluno = await alunoRepository.findOne({ id });
    
        if (!aluno) {
            throw new Error("Aluno não encontrado.");
        }
        aluno.name = name ?? aluno.name;
        aluno.email = email ?? aluno.email;
        aluno.curso = curso ?? aluno.curso;
    
        try {
            await alunoRepository.save(aluno);
        } catch (error) {
            console.error("Erro ao atualizar o aluno:", error);
            throw new Error("Ocorreu um erro ao atualizar o aluno. Tente novamente mais tarde.");
        }
    
        return aluno; 
    }
    // - Verificar se o ID tem um formato válido
    private validateId(id: string): void {
        if (!id) {
            throw new Error("ID é obrigatório.");
        }
    }
      }

export { UpdateAlunoService };
