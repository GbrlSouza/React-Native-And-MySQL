create database react;

use react;

create table usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(15) NOT NULL
);

INSERT INTO usuarios (nome, email, senha) VALUES 
('Ana Costa', 'ana.costa@email.com', '123'),
('Felipe Lima', 'felipe.lima@email.com', '123'),
('Camila Souza', 'camila.souza@email.com', '123');
