import { Request, Response, Router } from "express";
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA livros
*/ 
// Rota para listar os livros
router.get("/lista/livros", LivroController.todos);
router.post("/novo/livros", LivroController.novo);
router.delete("/delete/livros/:idLivro", LivroController.remover);
router.put("/atualizar/livros/:idLivro", LivroController.atualizar);

/* 
* ROTAS PARA alunos
*/ 
// Rota para listar os alunos
router.get("/lista/aluno", AlunoController.todos);
router.post("/novo/aluno", AlunoController.novo);
router.delete("/delete/aluno/:idAluno", AlunoController.remover);
router.put("/atualizar/aluno/:idAluno", AlunoController.atualizar);
/* 
* ROTAS PARA emprestimos
*/ 
// Rota para listar os emprestimo
router.get("/lista/emprestimos", EmprestimoController.todos);
router.post("/novo/emprestimos", EmprestimoController.novo);
router.delete("/delete/emprestimos/:idEmprestimo", EmprestimoController.remover);
router.put("/atualizar/emprestimos/:idEmprestimo", EmprestimoController.atualizar);
// exportando as rotas
export { router };