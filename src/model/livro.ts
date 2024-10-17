/**
 * Classe que representa um Livro.
 */
export class Livro {

    /* Atributos */
    /* Identificador do Livro */
    private idLivro: number = 0;
    /* Autor do Livro */
    private autor: string;
    /* Titulo do Livro */
    private titulo: string;
    /* Editora do Livro */
    private editora: string;
    /* AnoPublicação do Livro */
    private anoPublicação: string;
    /* Isbn do Livro */
    private isbn: string;
    /* AnoPublicação do Livro */
    private quantidadeTotal: number;
    /* Isbn do Livro */
    private quantidadeDisponivel: number;
    /* AnoPublicação do Livro */
    private valorAquisição: number;
    /* Isbn do Livro */
    private statusLivroEmprestado: string;


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
        titulo: string,
        autor: string,
        editora: string,
        anoPublicação: string,
        isbn: string,
        quantidadeTotal: number,
        quantidadeDisponivel: number,
        valorAquisição: number,
        statusLivroEmprestado: string,
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicação = anoPublicação;
        this.isbn = isbn;
        this.quantidadeTotal = quantidadeTotal;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.valorAquisição = valorAquisição;
        this.statusLivroEmprestado = statusLivroEmprestado;
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
        return this.titulo;
    }

    /**
     * Define a Titulo do Livro.
     * 
     * @param Titulo - A Titulo do Livro a ser definida.
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Retorna a Autor do Livro.
     *
     * @returns {string} o Autor do Livro.
     */
    public getAutor(): string {
        return this.autor;
    }

    /**
     * Define a Autor do Livro.
     * 
     * @param Autor - o Autor do Livro a ser definida.
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }


    /**
     * Retorna o Editora do Livro.
     *
     * @returns {string} O Editora do Livro.
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * Define o Editora do Livro.
     *
     * @param Editora - O Titulo do Editora do Livro.
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    /**
     * Retorna o AnoPublicação do Livro.
     *
     * @returns O AnoPublicação do Livro.
     */
    public getAnoPublicação(): string {
        return this.anoPublicação;
    }

    /**
     * Define o AnoPublicação do Livro.
     * 
     * @param AnoPublicação - O AnoPublicação a ser definido para o Livro.
     */
    public setAnoPublicação(anoPublicação: string): void {
        this.anoPublicação = anoPublicação;
    }

    /**
     * Retorna a Isbn do Livro.
     *
     * @returns {string} A Isbn do Livro.
     */
    public getIsbn(): string {
        return this.isbn;
    }

    /**
     * Define a Isbn do Livro.
     * 
     * @param Isbn - A nova Isbn do Livro.
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    /**
     * Retorna o QuantidadeTotal do Livro.
     *
     * @returns {number} o QuantidadeTotal do Livro.
     */
    public getQuantidadeTotal(): number {
            return this.quantidadeTotal;
    }
    
    /**
     * Define o QuantidadeTotal do Livro.
     * 
     * @param QuantidadeTotal - o QuantidadeTotal do Livro.
     */
    public setQuantidadeTotal(quantidadeTotal: number): void {
        this.quantidadeTotal = quantidadeTotal;
    }

    /**
     * Retorna o QuantidadeDisponivel do Livro.
     *
     * @returns {number} o QuantidadeDisponivel do Livro.
     */
    public getQuantidadeDisponivel(): number {
        return this.quantidadeDisponivel;
    }

    /**
     * Define a QuantidadeDisponivel do Livro.
     * 
     * @param QuantidadeDisponivel - o QuantidadeDisponivel do Livro.
     */
    public setQuantidadeDisponivel(quantidadeDisponivel: number): void {
        this.quantidadeDisponivel = quantidadeDisponivel;
    }

    /**
     * Retorna a ValorAquisição do Livro.
     *
     * @returns {string} ValorAquisição do Livro.
     */
    public getValorAquisição(): number {
        return this.valorAquisição;
    }

    /**
     * Define ValorAquisição do Livro.
     * 
     * @param ValorAquisição - A ValorAquisição Livro a ser definida.
     */
    public setValorAquisição(valorAquisição: number): void {
        this.valorAquisição = valorAquisição;
    }

    /**
     * Retorna a StatusLivroEmprestado do Livro.
     *
     * @returns {string} StatusLivroEmprestado do Livro.
     */
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    /**
     * Define o StatusLivroEmprestado do Livro.
     * 
     * @param Titulo - StatusLivroEmprestado do Livro a ser definida.
     */
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }
}

