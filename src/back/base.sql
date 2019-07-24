CREATE TABLE IF NOT EXISTS goods (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    SectionId int(20) NOT NULL,
    Name varchar(255),
    Description varchar(255) NOT NULL,
    FullDescription text NOT NULL,
    Photo varchar(255) NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT aa_fk FOREIGN KEY(AppId) REFERENCES apps(Id) ON DELETE CASCADE,
);

CREATE TABLE IF NOT EXISTS sections (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description varchar(255) NOT NULL,
    Photo varchar(255) NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS apps (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Description text NOT NULL,
    Email varchar(255) NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articles (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Description text NULL,
    Image varchar(255) NOT NULL,
    Author varchar(255) NOT NULL,
    GoodId int(20) NULL,
    Path varchar(255) NOT NULL,
    CreateDate datetime NOT NULL
);

CREATE TABLE IF NOT EXISTS Photoes (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NULL,
    Type varchar(255) NOT NULL,
    OwnerId varchar(255) NULL,
    Path varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Videos (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Path varchar(255) NOT NULL,
    Photo varchar(255) NULL,
    GoodId int(20) NULL
);