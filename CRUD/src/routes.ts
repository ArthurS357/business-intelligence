import { Router } from "express";

// Importação de controladores

// importação de alunos
import { CreateAlunoController } from "./controller/aluno/CreateAlunoController"; import { ListAlunoController } from "./controller/aluno/ListAlunoController"; import { UpdateAlunoController } from "./controller/aluno/UpdateAlunoController"; import { DeleteAlunoController } from "./controller/aluno/DeleteAlunoController";

// importação de livros
import { CreateLivroController } from "./controller/livro/CreateLivroController"; import { DeleteLivroController } from "./controller/livro/DeleteLivroController"; import { UpdateLivroController } from "./controller/livro/UpdateLivroController"; import { ListLivroController } from "./controller/livro/ListLivroController";

// importação de emprestimo
import { CreateEmprestimoController } from "./controller/emprestimo/CreateEmprestimoController"; import { DeleteEmprestimoController } from "./controller/emprestimo/DeleteEmprestimoController"; import { ListEmprestimoController } from "./controller/emprestimo/ListEmprestimoController"; import { UpdateEmprestimoController } from "./controller/emprestimo/UpdateEmprestimoController";
const router = Router();

// Instanciando controladores
const controllers = {
    aluno: {
        create: new CreateAlunoController(),
        list: new ListAlunoController(),
        update: new UpdateAlunoController(),
        delete: new DeleteAlunoController(),
    },

    livro: {
        create: new CreateLivroController(),
        list: new ListLivroController(),
        delete: new DeleteLivroController(),
        update: new UpdateLivroController(),
    },
    emprestimo: {
        create: new CreateEmprestimoController(),
        list: new ListEmprestimoController(),
        delete: new DeleteEmprestimoController(),
        update: new UpdateEmprestimoController(),
        
    },
};

// Rotas de Aluno
router.post("/aluno", controllers.aluno.create.handle);
router.get("/aluno", controllers.aluno.list.handle);
router.get("/aluno/:id", controllers.aluno.list.findById); 
router.put("/aluno/:id", controllers.aluno.update.handle);
router.delete("/aluno/:id", controllers.aluno.delete.handle);

// Rotas de Livro
router.post("/livro", controllers.livro.create.handle);
router.get("/livro", controllers.livro.list.handle);
router.get("/livro/:id", controllers.livro.list.findById);
router.put("/livro/:id", controllers.livro.update.handle);
router.delete("/livro/:id", controllers.livro.delete.handle);

// Rotas de Emprestimo
router.post("/emprestimo", controllers.emprestimo.create.handle);
router.get("/emprestimo", controllers.emprestimo.list.handle);
router.get("/emprestimo/:id", controllers.emprestimo.list.findById);
router.put("/emprestimo/:id", controllers.emprestimo.update.handle);
router.delete("/emprestimo/:id", controllers.emprestimo.delete.handle);

// Middleware de tratamento de erros (opcional)
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocorreu um erro interno." });
});

export { router };
