/**
 * Classe que representa um Aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do Aluno */
    private idAluno: number = 0;
    /* RA do Aluno */
    private ra: string = "";
    /* Nome do Aluno */
    private nome: string;
    /* Sobrenome do Aluno */
    private sobrenome: string;
    /* DataNascimento do Aluno */
    private dataNascimento: Date;
    /* Endereço do Aluno */
    private endereço: string;
    /* DataNascimento do Aluno */
    private email: string;
    /* Endereço do Aluno */
    private celular: string;

    /**
     * Construtor da classe Aluno
     * 
     * @param nome nome do Aluno
     * @param RA RA do Aluno
     * @param Sobrenome Sobrenome do Aluno
     * @param DataNascimento DataNascimento de fabricação do Aluno
     * @param Endereço Endereço do Aluno
     * @param Email Email de fabricação do Aluno
     * @param Celular Celular do Aluno
     */

    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereço: string,
        email: string,
        celular: string,
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereço = endereço;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do Aluno
     * @returns o identificador do Aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do Aluno
     * @param idAluno novo identificado do Aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Retorna a nome do Aluno.
     *
     * @returns {string} A nome do Aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a nome do Aluno.
     * 
     * @param nome - A nome do Aluno a ser definida.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o Sobrenome do Aluno.
     *
     * @returns {string} O Sobrenome do Aluno.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o Sobrenome do Aluno.
     *
     * @param Sobrenome - O Nome do Sobrenome do Aluno.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     * Retorna o DataNascimento do Aluno.
     *
     * @returns O DataNascimento do Aluno.
     */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define o DataNascimento do Aluno.
     * 
     * @param DataNascimento - O DataNascimento a ser definido para o Aluno.
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    /**
     * Retorna a Endereço do Aluno.
     *
     * @returns {string} A Endereço do Aluno.
     */
    public getEndereço(): string {
        return this.endereço;
    }

    /**
     * Define a Endereço do Aluno.
     * 
     * @param Endereço - A nova Endereço do Aluno.
     */
    public setEndereço(endereço: string): void {
        this.endereço = endereço;
    }

    /**
     * Retorna o Email do Aluno.
     *
     * @returns {string} o Email do Aluno.
     */
    public getEmail(): string {
            return this.email;
    }
    
    /**
     * Define o Email do Aluno.
     * 
     * @param Email - o Email do Aluno.
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Retorna o Celular do Aluno.
     *
     * @returns {string} o Celular do Aluno.
     */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define a Celular do Aluno.
     * 
     * @param Celular - o Celular do Aluno.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }
}

