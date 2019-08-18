

CREATE TABLE IF NOT EXISTS sections (
	Id int(10) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description varchar(255) NOT NULL,
    Photo varchar(255) NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS goods (
	Id int(10) PRIMARY KEY AUTO_INCREMENT,
    SectionId int(10) NOT NULL,
    Name varchar(255),
    Description varchar(255) NOT NULL,
    FullDescription text NOT NULL,
    Photo varchar(255) NOT NULL,
    InStock tinyint(1) DEFAULT 0,
    Price float(10,2) NOT NULL,
    Main tinyint(1) DEFAULT 0,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT aa_fk FOREIGN KEY(SectionId) REFERENCES sections(Id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS apps (
	Id int(10) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Description text NOT NULL,
    Email varchar(255) NOT NULL,
    GoodId int(10) NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articles (
	Id int(10) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Description text NULL,
    Photo varchar(255) NOT NULL,
    Author varchar(255) NOT NULL,
    GoodId int(10) NULL,
    Path varchar(255) NOT NULL,
    CreateDate datetime NOT NULL
);

CREATE TABLE IF NOT EXISTS photos (
	Id int(10) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NULL,
    GoodId varchar(255) NULL,
    Photo varchar(255) NOT NULL,
    Gallery bit NULL
);

CREATE TABLE IF NOT EXISTS videos (
	Id int(10) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Path varchar(255) NOT NULL,
    Photo varchar(255) NULL,
    GoodId int(10) NULL
);