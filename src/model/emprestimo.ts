/**
 * classe que representa o Emprestimo
 */
export class Emprestimo {

    /* Atributos */
    /* Identificador do Emprestimo */
    private idEmprestimo: number = 0;
    /* identificador do Aluno */
    private idAluno: number;
    /* identificador do Livro */
    private idLivro: number;
    /* data do Emprestimo */
    private dataEmprestimo: Date;
    /* DataDevolução do Emprestimo */
    private dataDevolução: Date;
    /* Status do Emprestimo */
    private statusEmprestimo: string;
    

     /**
     * Construtor da classe Livro

     * @param idEmprestimo id do Emprestimo
     * @param idAluno id do Aluno
     * @param idLivro id do Livro
     * @param dataEmprestimo data do Emprestimo
     * @param DataDevolução data de devolução do Emprestimo
     * @param StatusEmprestimo Status do Emprestimo
     */
    
    
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolução: Date,
        statusEmprestimo:string,
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolução = dataDevolução;
        this.statusEmprestimo = statusEmprestimo;
    }
    
        /* Métodos get e set */
    /**
     * Recupera o identificador do Emprestimo
     * @returns o identificador do Emprestimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui um Status ao identificador do Emprestimo
     * @param idEmprestimo novo identificado do Emprestimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Retorna o idAluno do Emprestimo.
     *
     * @returns {number} o idAluno do Emprestimo.
     */
    public getidAluno(): number {
        return this.idAluno;
    }
    
    /**
     * Define O idAluno do Emprestimo.
     * 
     * @param idAluno - o idAluno do Emprestimo a ser definido.
     */
    public setidAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

        /**
     * Retorna o idLivro do Emprestimo.
     *
     * @returns {number} o idLivro do Emprestimo.
     */
    public getidLivro(): number {
        return this.idLivro;
    }
    
    /**
     * Define o idLivro do Emprestimo.
     * 
     * @param idLivro - o idLivro do Emprestimo a ser definido.
     */
    public setidLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna o data do Emprestimo.
     *
     * @returns {Date} o data do Emprestimo.
     */
    public getdataEmprestimo(): Date {
        return this.dataEmprestimo;
    }
    
    /**
     * Define o data do Emprestimo.
     * 
     * @param dataEmprestimo - o data do Emprestimo a ser definido.
     */
    public setdataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Retorna DataDevolução do Emprestimo.
     *
     * @returns {Date} DataDevolução do Emprestimo.
     */
    public getDataDevolução(): Date {
        return this.dataDevolução;
    }
    
    /**
     * Define DataDevolução do Emprestimo.
     * 
     * @param DataDevolução - DataDevolução do Emprestimo a ser definido.
     */
    public setDataDevolução(dataDevolução: Date): void {
        this.dataDevolução = dataDevolução;
    }

    /**
     * Retorna o Status do Emprestimo.
     *
     * @returns {string} o Status do Emprestimo 
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }
    
    /**
     * Define o Status do Emprestimo.
     * 
     * @param StatusEmprestimo - o Status do Emprestimo a ser definido.
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }

}

