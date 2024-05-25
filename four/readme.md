Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones de integridad necesarias para que el sistema funcione correctamente.

# Tablas y Relaciones del sistema

## Tabla tbl_usuarios

id (UUID, PRIMARY KEY)
nombre_usuario (VARCHAR(255), UNIQUE, NOT NULL)
email (VARCHAR(255), UNIQUE, NOT NULL)
password (VARCHAR(255), NOT NULL)
fecha_registro (DATETIME, DEFAULT CURRENT_TIMESTAMP)

## Tabla tbl_videos

id (UUID, PRIMARY KEY)
titulo (VARCHAR(255), NOT NULL)
descripcion (TEXT)
video (TEXT)
fecha_subida (DATETIME, DEFAULT CURRENT_TIMESTAMP)
id_autor (UUID, FOREIGN KEY REFERENCES usuarios(id))

## Tabla tbl_autores

id_usuario (UUID, PRIMARY KEY, FOREIGN KEY REFERENCES usuarios(id), UNIQUE)

## Tabla tbl_colaboradores

id (UUID, PRIMARY KEY)
id_video (UUID, FOREIGN KEY REFERENCES videos(id))
id_usuario (UUID, FOREIGN KEY REFERENCES usuarios(id))

## Tabla tbl_comentarios

id (UUID, PRIMARY KEY)
id_video (UUID, FOREIGN KEY REFERENCES videos(id))
id_usuario (UUID, FOREIGN KEY REFERENCES usuarios(id))
contenido (TEXT, NOT NULL)
fecha_comentario (DATETIME, DEFAULT CURRENT_TIMESTAMP)

## Tabla tbl_reviews

id (UUID, PRIMARY KEY)
id_video (UUID, FOREIGN KEY REFERENCES videos(id))
id_usuario (UUID, FOREIGN KEY REFERENCES usuarios(id))
calificacion (INT, CHECK (calificacion BETWEEN 0 AND 10))
comentario (TEXT)
fecha_review (DATETIME, DEFAULT CURRENT_TIMESTAMP)

```-- Tabla de usuarios
CREATE TABLE tbl_usuarios (
    id UUID PRIMARY KEY,
    nombre_usuario VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de videos
CREATE TABLE tbl_videos (
    id UUID PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    video TEXT
    fecha_subida DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_autor UUID,
    FOREIGN KEY (id_autor) REFERENCES usuarios(id)
);

-- Tabla de autores
CREATE TABLE tbl_autores (
    id_usuario UUID PRIMARY KEY,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    UNIQUE (id_usuario)
);

-- Tabla de colaboradores
CREATE TABLE tbl_colaboradores (
    id UUID PRIMARY KEY,
    id_video UUID,
    id_usuario UUID,
    FOREIGN KEY (id_video) REFERENCES videos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Tabla de comentarios
CREATE TABLE tbl_comentarios (
    id UUID PRIMARY KEY,
    id_video UUID,
    id_usuario UUID,
    contenido TEXT NOT NULL,
    fecha_comentario DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_video) REFERENCES videos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Tabla de reviews
CREATE TABLE tbl_reviews (
    id UUID PRIMARY KEY,
    id_video UUID,
    id_usuario UUID,
    calificacion INT CHECK (calificacion BETWEEN 0 AND 10),
    comentario TEXT,
    fecha_review DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_video) REFERENCES videos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
```
