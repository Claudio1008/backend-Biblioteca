/**
 * Classe que representa um Aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do Aluno */
    private idAluno: number = 0;
    /* RA do Aluno */
    private Ra: string;
    /* Nome do Aluno */
    private Nome: string;
    /* Sobrenome do Aluno */
    private Sobrenome: string;
    /* DataNascimento do Aluno */
    private DataNascimento: Date;
    /* Endereço do Aluno */
    private Endereço: string;
    /* DataNascimento do Aluno */
    private Email: string;
    /* Endereço do Aluno */
    private Celular: string;

    /**
     * Construtor da classe Aluno
     * 
     * @param Nome Nome do Aluno
     * @param RA RA do Aluno
     * @param Sobrenome Sobrenome do Aluno
     * @param DataNascimento DataNascimento de fabricação do Aluno
     * @param Endereço Endereço do Aluno
     * @param Email Email de fabricação do Aluno
     * @param Celular Celular do Aluno
     */

    constructor(
        Nome: string,
        RA: string,
        Sobrenome: string,
        DataNascimento: Date,
        Endereço: string,
        Email: string,
        Celular: string,
    ) {
        this.Nome = Nome;
        this.Ra = RA;
        this.Sobrenome = Sobrenome;
        this.DataNascimento = DataNascimento;
        this.Endereço = Endereço;
        this.Email = Email;
        this.Celular = Celular;
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
     * Retorna a Nome do Aluno.
     *
     * @returns {string} A Nome do Aluno.
     */
    public getNome(): string {
        return this.Nome;
    }

    /**
     * Define a Nome do Aluno.
     * 
     * @param Nome - A Nome do Aluno a ser definida.
     */
    public setNome(Nome: string): void {
        this.Nome = Nome;
    }

    /**
     * Retorna o Sobrenome do Aluno.
     *
     * @returns {string} O Sobrenome do Aluno.
     */
    public getSobrenome(): string {
        return this.Sobrenome;
    }

    /**
     * Define o Sobrenome do Aluno.
     *
     * @param Sobrenome - O Nome do Sobrenome do Aluno.
     */
    public setSobrenome(Sobrenome: string): void {
        this.Sobrenome = Sobrenome;
    }

    /**
     * Retorna o DataNascimento do Aluno.
     *
     * @returns O DataNascimento do Aluno.
     */
    public getDataNascimento(): Date {
        return this.DataNascimento;
    }

    /**
     * Define o DataNascimento do Aluno.
     * 
     * @param DataNascimento - O DataNascimento a ser definido para o Aluno.
     */
    public setDataNascimento(DataNascimento: Date): void {
        this.DataNascimento = DataNascimento;
    }

    /**
     * Retorna a Endereço do Aluno.
     *
     * @returns {string} A Endereço do Aluno.
     */
    public getEndereço(): string {
        return this.Endereço;
    }

    /**
     * Define a Endereço do Aluno.
     * 
     * @param Endereço - A nova Endereço do Aluno.
     */
    public setEndereço(Endereço: string): void {
        this.Endereço = Endereço;
    }

    /**
     * Retorna o Email do Aluno.
     *
     * @returns {string} o Email do Aluno.
     */
    public getEmail(): string {
            return this.Email;
    }
    
    /**
     * Define o Email do Aluno.
     * 
     * @param Email - o Email do Aluno.
     */
    public setEmail(Email: string): void {
        this.Email = Email;
    }

    /**
     * Retorna o Celular do Aluno.
     *
     * @returns {string} o Celular do Aluno.
     */
    public getCelular(): string {
        return this.Celular;
    }

    /**
     * Define a Celular do Aluno.
     * 
     * @param Celular - o Celular do Aluno.
     */
    public setCelular(Celular: string): void {
        this.Celular = Celular;
    }
}

