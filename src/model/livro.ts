/**
 * Classe que representa um Livro.
 */
export class Livro {

    /* Atributos */
    /* Identificador do Livro */
    private idLivro: number = 0;
    /* Autor do Livro */
    private Autor: string;
    /* Titulo do Livro */
    private Titulo: string;
    /* Editora do Livro */
    private Editora: string;
    /* AnoPublicação do Livro */
    private AnoPublicação: string;
    /* Isbn do Livro */
    private Isbn: string;
    /* AnoPublicação do Livro */
    private QuantidadeTotal: number;
    /* Isbn do Livro */
    private QuantidadeDisponivel: number;
    /* AnoPublicação do Livro */
    private ValorAquisição: number;
    /* Isbn do Livro */
    private StatusLivroEmprestado: string;


    /**
     * Construtor da classe Livro
     * 
     * @param Titulo Titulo do Livro
     * @param Autor Autor do Livro
     * @param Editora Editora do Livro
     * @param AnoPublicação AnoPublicação de fabricação do Livro
     * @param Isbn Isbn do Livro
     * @param QuantidadeTotal QuantidadeTotal do Livro
     * @param QuantidadeDisponivel QuantidadeDisponivel do Livro
     * @param ValorAquisição Editora do Livro
     * @param StatusLivroEmprestado Editora do Livro
     */

    constructor(
        Titulo: string,
        Autor: string,
        Editora: string,
        AnoPublicação: string,
        Isbn: string,
        QuantidadeTotal: number,
        QuantidadeDisponivel: number,
        ValorAquisição: number,
        StatusLivroEmprestado: string,
    ) {
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Editora = Editora;
        this.AnoPublicação = AnoPublicação;
        this.Isbn = Isbn;
        this.QuantidadeTotal = QuantidadeTotal;
        this.QuantidadeDisponivel = QuantidadeDisponivel;
        this.ValorAquisição = ValorAquisição;
        this.StatusLivroEmprestado = StatusLivroEmprestado;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do Livro
     * @returns o identificador do Livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui um valor ao identificador do Livro
     * @param idLivro novo identificado do Livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a Titulo do Livro.
     *
     * @returns {string} A Titulo do Livro.
     */
    public getTitulo(): string {
        return this.Titulo;
    }

    /**
     * Define a Titulo do Livro.
     * 
     * @param Titulo - A Titulo do Livro a ser definida.
     */
    public setTitulo(Titulo: string): void {
        this.Titulo = Titulo;
    }

    /**
     * Retorna a Autor do Livro.
     *
     * @returns {string} o Autor do Livro.
     */
    public getAutor(): string {
        return this.Autor;
    }

    /**
     * Define a Autor do Livro.
     * 
     * @param Autor - o Autor do Livro a ser definida.
     */
    public setAutor(Autor: string): void {
        this.Autor = Autor;
    }


    /**
     * Retorna o Editora do Livro.
     *
     * @returns {string} O Editora do Livro.
     */
    public getEditora(): string {
        return this.Editora;
    }

    /**
     * Define o Editora do Livro.
     *
     * @param Editora - O Titulo do Editora do Livro.
     */
    public setEditora(Editora: string): void {
        this.Editora = Editora;
    }

    /**
     * Retorna o AnoPublicação do Livro.
     *
     * @returns O AnoPublicação do Livro.
     */
    public getAnoPublicação(): string {
        return this.AnoPublicação;
    }

    /**
     * Define o AnoPublicação do Livro.
     * 
     * @param AnoPublicação - O AnoPublicação a ser definido para o Livro.
     */
    public setAnoPublicação(AnoPublicação: string): void {
        this.AnoPublicação = AnoPublicação;
    }

    /**
     * Retorna a Isbn do Livro.
     *
     * @returns {string} A Isbn do Livro.
     */
    public getIsbn(): string {
        return this.Isbn;
    }

    /**
     * Define a Isbn do Livro.
     * 
     * @param Isbn - A nova Isbn do Livro.
     */
    public setIsbn(Isbn: string): void {
        this.Isbn = Isbn;
    }

    /**
     * Retorna o QuantidadeTotal do Livro.
     *
     * @returns {number} o QuantidadeTotal do Livro.
     */
    public getQuantidadeTotal(): number {
            return this.QuantidadeTotal;
    }
    
    /**
     * Define o QuantidadeTotal do Livro.
     * 
     * @param QuantidadeTotal - o QuantidadeTotal do Livro.
     */
    public setQuantidadeTotal(QuantidadeTotal: number): void {
        this.QuantidadeTotal = QuantidadeTotal;
    }

    /**
     * Retorna o QuantidadeDisponivel do Livro.
     *
     * @returns {number} o QuantidadeDisponivel do Livro.
     */
    public getQuantidadeDisponivel(): number {
        return this.QuantidadeDisponivel;
    }

    /**
     * Define a QuantidadeDisponivel do Livro.
     * 
     * @param QuantidadeDisponivel - o QuantidadeDisponivel do Livro.
     */
    public setQuantidadeDisponivel(QuantidadeDisponivel: number): void {
        this.QuantidadeDisponivel = QuantidadeDisponivel;
    }

    /**
     * Retorna a ValorAquisição do Livro.
     *
     * @returns {string} ValorAquisição do Livro.
     */
    public getValorAquisição(): number {
        return this.ValorAquisição;
    }

    /**
     * Define ValorAquisição do Livro.
     * 
     * @param ValorAquisição - A ValorAquisição Livro a ser definida.
     */
    public setValorAquisição(ValorAquisição: number): void {
        this.ValorAquisição = ValorAquisição;
    }

    /**
     * Retorna a StatusLivroEmprestado do Livro.
     *
     * @returns {string} StatusLivroEmprestado do Livro.
     */
    public getStatusLivroEmprestado(): string {
        return this.StatusLivroEmprestado;
    }

    /**
     * Define o StatusLivroEmprestado do Livro.
     * 
     * @param Titulo - StatusLivroEmprestado do Livro a ser definida.
     */
    public setStatusLivroEmprestado(StatusLivroEmprestado: string): void {
        this.StatusLivroEmprestado = StatusLivroEmprestado;
    }
}

