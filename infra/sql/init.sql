CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();

-- CREATE LIVRO
CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);

-- CREATE EMPRESTIMO
CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);

-- ALUNO
INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');

-- ALUNO -- INSIRA 10 ALUNOS 
INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('pedro', 'padrini', '2002-04-05', 'Rua aleatorio, 123', 'padrini@ufc.com', '16998472336'),
('david', 'backhan', '2004-11-02', 'Rua futebol, 456', 'daviback@ufc.com', '169958323909'),
('neymar', 'junior', '2003-02-11', 'Rua futebol, 789', 'neymarjr@cinema.com', '16994321098'),
('romario', 'silva', '2002-09-24', 'Rua aleatorio, 101', 'rosilva@cinema.com', '16995432109'),
('lebron', 'james', '2001-09-07', 'Rua NBA, 232', 'kingjames@gmail.com', '16996543210'),
('hary', 'Kouib', '2000-04-23', 'Rua aleatorio, 2014', 'hkoub@futi.com', '16994351342'),
('james', 'rodrigues', '2000-02-01', 'Rua futebol, 456', 'rodrigues@volei.com', '16991996495'),
('eder', 'militao', '2009-12-20', 'Rua futebol, 2028', 'edermilitaso@volei.com', '16981971237'),
('alex', 'santos', '2001-01-09', 'Rua aleatorio, 2028', 'alexsantos@volei.com', '16983938705'),
('kobe', 'bryant', '2005-03-18', 'Rua NBA, 1923', 'jogadorzaso@gmail.com', '16993932140');

-- LIVRO
INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');

-- LIVRO -- INSIRA 10 LIVROS -- DADOS REAIS 
INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Apanhador no Campo de Centeio', 'J.D. Salinger', 'Little, Brown and Company', '1951', '978-0316769488', 10, 10, 75.00, 'Disponível'),
('A Insustentável Leveza do Ser', 'Milan Kundera', 'Companhia das Letras', '1984', '978-8535920295', 8, 8, 100.00, 'Disponível'),
('O Sol é para Todos', 'Harper Lee', 'J.B. Lippincott & Co.', '1960', '978-0060935467', 6, 6, 60.00, 'Disponível'),
('Cem Anos de Solidão', 'Gabriel García Márquez', 'Editora Abril', '1967', '978-8535932175', 5, 5, 120.00, 'Disponível'),
('A Montanha Mágica', 'Thomas Mann', 'Companhia das Letras', '1924', '978-8535920376', 4, 4, 150.00, 'Disponível'),
('O Morro dos Ventos Uivantes', 'Emily Brontë', 'Penguin Classics', '1847', '978-0142437209', 7, 7, 80.00, 'Disponível'),
('A Peste', 'Albert Camus', 'Editora Record', '1947', '978-8501080889', 3, 3, 90.00, 'Disponível'),
('O Processo', 'Franz Kafka', 'Companhia das Letras', '1925', '978-8535925302', 5, 5, 110.00, 'Disponível'),
('Coração das Trevas', 'Joseph Conrad', 'Companhia das Letras', '1899', '978-8535922585', 4, 4, 75.00, 'Disponível'),
('A Casa dos Espíritos', 'Isabel Allende', 'Editora Record', '1982', '978-8501077505', 6, 6, 95.00, 'Disponível');

-- Inserindo Emprestimo
INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');

-- Inserindo Emprestimos -- 10 EMPRESTIMOS, não repetir em
INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-07-01', '2024-07-15', 'Em andamento'),
(2, 1, '2024-07-05', '2024-07-19', 'Em andamento'),
(3, 5, '2024-07-12', '2024-07-26', 'Em andamento'),
(5, 3, '2024-07-20', '2024-08-03', 'Em andamento'),
(4, 6, '2024-08-01', '2024-08-15', 'Em andamento'),
(6, 4, '2024-08-10', '2024-08-24', 'Em andamento'),
(7, 8, '2024-08-15', '2024-08-29', 'Em andamento'),
(8, 7, '2024-08-25', '2024-09-08', 'Em andamento'),
(10, 9, '2024-09-01', '2024-09-15', 'Em andamento'),
(9, 10, '2024-09-05', '2024-09-19', 'Em andamento'),
(1, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(2, 3, '2024-09-12', '2024-09-26', 'Em andamento'),
(4, 5, '2024-09-15', '2024-09-29', 'Em andamento'),
(6, 2, '2024-09-18', '2024-10-02', 'Em andamento');

SELECT 
    a.ra, 
    a.nome, 
    a.sobrenome, 
    a.celular, 
    l.titulo, 
    l.autor, 
    l.editora, 
    e.data_emprestimo, 
    e.data_devolucao, 
    e.status_emprestimo
FROM 
    Emprestimo e
JOIN 
    Aluno a ON e.id_aluno = a.id_aluno
JOIN 
    Livro l ON e.id_livro = l.id_livro;



