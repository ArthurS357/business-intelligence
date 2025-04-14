import { IAlunoInterface } from "./IAlunointerface";
import { ILivroInterface } from "./ILivrointerface";

interface IEmprestimoInterface {
    id?: string; // ID do empréstimo (opcional)
    aluno: IAlunoInterface; // Objeto do aluno que está pegando o livro emprestado
    livro: ILivroInterface; // Objeto do livro que está sendo emprestado
    dtEmprestimo: Date; // Data de empréstimo
    dtDevolucao?: Date; // Data de devolução (opcional, pois pode não ser definida no momento do empréstimo)
}

export { IEmprestimoInterface };
