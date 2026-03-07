-- ======================================
-- Base de datos para laboratorio de teoría de diseño
-- ======================================

-- 1. Tabla de relaciones
CREATE TABLE relations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);

-- 2. Tabla de atributos
CREATE TABLE attributes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    relation_id INTEGER NOT NULL,
    FOREIGN KEY (relation_id) REFERENCES relations(id) ON DELETE CASCADE
);

-- 3. Tabla de conjuntos de dependencias funcionales
CREATE TABLE fd_sets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    relation_id INTEGER NOT NULL,
    FOREIGN KEY (relation_id) REFERENCES relations(id) ON DELETE CASCADE
);

-- 4. Tabla de dependencias funcionales
CREATE TABLE functional_dependencies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fd_set_id INTEGER NOT NULL,
    FOREIGN KEY (fd_set_id) REFERENCES fd_sets(id) ON DELETE CASCADE
);

-- 5. Tabla de atributos del lado izquierdo de la dependencia
CREATE TABLE dependency_left (
    dependency_id INTEGER NOT NULL,
    attribute_id INTEGER NOT NULL,
    PRIMARY KEY (dependency_id, attribute_id),
    FOREIGN KEY (dependency_id) REFERENCES functional_dependencies(id) ON DELETE CASCADE,
    FOREIGN KEY (attribute_id) REFERENCES attributes(id) ON DELETE CASCADE
);

-- 6. Tabla de atributos del lado derecho de la dependencia
CREATE TABLE dependency_right (
    dependency_id INTEGER NOT NULL,
    attribute_id INTEGER NOT NULL,
    PRIMARY KEY (dependency_id, attribute_id),
    FOREIGN KEY (dependency_id) REFERENCES functional_dependencies(id) ON DELETE CASCADE,
    FOREIGN KEY (attribute_id) REFERENCES attributes(id) ON DELETE CASCADE
);

-- ======================================
-- Ejemplo de inserción de datos
-- ======================================

-- Insertar relación
INSERT INTO relations (name, description) VALUES ('R', 'Relación de ejemplo');

-- Insertar atributos
INSERT INTO attributes (name, relation_id) VALUES ('A', 1);
INSERT INTO attributes (name, relation_id) VALUES ('B', 1);
INSERT INTO attributes (name, relation_id) VALUES ('C', 1);
INSERT INTO attributes (name, relation_id) VALUES ('D', 1);

-- Insertar conjuntos de dependencias funcionales
INSERT INTO fd_sets (name, relation_id) VALUES ('F1', 1);
INSERT INTO fd_sets (name, relation_id) VALUES ('F2', 1);

-- Insertar dependencias funcionales
INSERT INTO functional_dependencies (fd_set_id) VALUES (1); -- dep1: A → B
INSERT INTO functional_dependencies (fd_set_id) VALUES (1); -- dep2: B → C
INSERT INTO functional_dependencies (fd_set_id) VALUES (2); -- dep3: AC → D

-- Insertar atributos del lado izquierdo
INSERT INTO dependency_left (dependency_id, attribute_id) VALUES (1, 1); -- dep1: A
INSERT INTO dependency_left (dependency_id, attribute_id) VALUES (2, 2); -- dep2: B
INSERT INTO dependency_left (dependency_id, attribute_id) VALUES (3, 1); -- dep3: A
INSERT INTO dependency_left (dependency_id, attribute_id) VALUES (3, 3); -- dep3: C

-- Insertar atributos del lado derecho
INSERT INTO dependency_right (dependency_id, attribute_id) VALUES (1, 2); -- dep1: B
INSERT INTO dependency_right (dependency_id, attribute_id) VALUES (2, 3); -- dep2: C
INSERT INTO dependency_right (dependency_id, attribute_id) VALUES (3, 4); -- dep3: D