CREATE TABLE ongs(
id_ongs INT PRIMARY KEY AUTO_INCREMENT,
email_ong VARCHAR(200) NOT NULL,
phone_ong INT NOT NULL
);

CREATE TABLE users(
id_user INT PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(50) NOT NULL,
email VARCHAR(200) NOT NULL,
phone real NOT NULL
);

CREATE TABLE doacoes (
  id_doacao INT PRIMARY KEY AUTO_INCREMENT,-- use VARCHAR, never INT
  forma_pagamento VARCHAR(50) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  voluntario ENUM('sim','nao') DEFAULT 'nao',
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


insert into ongs (email_ong, phone_ong) values ('ong_example@gmail.com', 11999999999);

insert into users (user_name, email, phone) values ('Andrei', 'andreilacerda@gmail.com', 11999999999);

insert into doacoes (forma_pagamento, valor, voluntario) values ('Pix', 100.00, 'sim');
