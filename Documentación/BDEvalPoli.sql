
CREATE TABLE areas (
    codigo           INTEGER NOT NULL,
    nombre           VARCHAR(20) NOT NULL,
    codigo_facultad  INTEGER NOT NULL,
    id_coordinador   VARCHAR(15) NOT NULL
);

CREATE UNIQUE INDEX areas__idx ON
    areas (
        id_coordinador
    ASC );

ALTER TABLE areas ADD CONSTRAINT areas_pk PRIMARY KEY ( codigo );

CREATE TABLE asignaturas (
    codigo            VARCHAR(10) NOT NULL,
    nombre            VARCHAR(30) NOT NULL,
    programas_codigo  INTEGER NOT NULL
);

ALTER TABLE asignaturas ADD CONSTRAINT asignaturas_pk PRIMARY KEY ( codigo );

CREATE TABLE ciudades (
    codigo    INTEGER NOT NULL,
    nombre    VARCHAR(20) NOT NULL,
    cod_dpto  INTEGER NOT NULL
);

ALTER TABLE ciudades ADD CONSTRAINT ciudades_pk PRIMARY KEY ( codigo );

CREATE TABLE departamentos (
    codigo    INTEGER NOT NULL,
    nombre    VARCHAR(20) NOT NULL,
    cod_pais  INTEGER NOT NULL
);

ALTER TABLE departamentos ADD CONSTRAINT departamentos_pk PRIMARY KEY ( codigo );

CREATE TABLE empleados (
    identificacion     VARCHAR(15) NOT NULL,
    nombres            VARCHAR(30) NOT NULL,
    apellidos          VARCHAR(30) NOT NULL,
    email              VARCHAR(30) NOT NULL,
    tipo_contratacion  VARCHAR(30) NOT NULL,
    tipo_empleado      VARCHAR(30) NOT NULL,
    cod_facultad       INTEGER NOT NULL,
    codigo_sede        INTEGER NOT NULL,
    lugar_nacimiento   INTEGER NOT NULL
);

ALTER TABLE empleados ADD CONSTRAINT empleados_pk PRIMARY KEY ( identificacion );

CREATE TABLE facultades (
    codigo        INTEGER NOT NULL,
    nombre        VARCHAR(20) NOT NULL,
    ubicacion     VARCHAR(15) NOT NULL,
    nro_telefono  VARCHAR(15) NOT NULL,
    id_decano     VARCHAR(15)
);

CREATE UNIQUE INDEX facultades__idx ON
    facultades (
        id_decano
    ASC );

ALTER TABLE facultades ADD CONSTRAINT facultades_pk PRIMARY KEY ( codigo );

CREATE TABLE grupos (
    numero              INTEGER NOT NULL,
    semestre            VARCHAR(6) NOT NULL,
    asignaturas_codigo  VARCHAR(10) NOT NULL,
    id_profesor         VARCHAR(15) NOT NULL
);

ALTER TABLE grupos
    ADD CONSTRAINT grupos_pk PRIMARY KEY ( numero,
                                           asignaturas_codigo,
                                           semestre );

CREATE TABLE paises (
    codigo  INTEGER NOT NULL,
    nombre  VARCHAR(20) NOT NULL
);

ALTER TABLE paises ADD CONSTRAINT paises_pk PRIMARY KEY ( codigo );

CREATE TABLE programas (
    codigo       INTEGER NOT NULL,
    nombre       VARCHAR(40) NOT NULL,
    codigo_area  INTEGER NOT NULL
);

ALTER TABLE programas ADD CONSTRAINT programas_pk PRIMARY KEY ( codigo );

CREATE TABLE sedes (
    codigo      INTEGER NOT NULL,
    nombre      VARCHAR(20),
    cod_ciudad  INTEGER NOT NULL
);

ALTER TABLE sedes ADD CONSTRAINT sedes_pk PRIMARY KEY ( codigo );

CREATE TABLE tipos_contratacion (
    nombre VARCHAR(30) NOT NULL
);

ALTER TABLE tipos_contratacion ADD CONSTRAINT tipos_contratacion_pk PRIMARY KEY ( nombre );

CREATE TABLE tipos_empleado (
    nombre VARCHAR(30) NOT NULL
);

ALTER TABLE tipos_empleado ADD CONSTRAINT tipos_empleado_pk PRIMARY KEY ( nombre );

ALTER TABLE areas
    ADD CONSTRAINT areas_empleados_fk FOREIGN KEY ( id_coordinador )
        REFERENCES empleados ( identificacion );

ALTER TABLE areas
    ADD CONSTRAINT areas_facultades_fk FOREIGN KEY ( codigo_facultad )
        REFERENCES facultades ( codigo );

ALTER TABLE asignaturas
    ADD CONSTRAINT asignaturas_programas_fk FOREIGN KEY ( programas_codigo )
        REFERENCES programas ( codigo );

ALTER TABLE ciudades
    ADD CONSTRAINT ciudad_departamentos_fk FOREIGN KEY ( cod_dpto )
        REFERENCES departamentos ( codigo );

ALTER TABLE departamentos
    ADD CONSTRAINT departamentos_paises_fk FOREIGN KEY ( cod_pais )
        REFERENCES paises ( codigo );

ALTER TABLE empleados
    ADD CONSTRAINT emp_tipos_contratacion_fk FOREIGN KEY ( tipo_contratacion )
        REFERENCES tipos_contratacion ( nombre );

ALTER TABLE empleados
    ADD CONSTRAINT empleados_ciudades_fk FOREIGN KEY ( lugar_nacimiento )
        REFERENCES ciudades ( codigo );

ALTER TABLE empleados
    ADD CONSTRAINT empleados_facultades_fk FOREIGN KEY ( cod_facultad )
        REFERENCES facultades ( codigo );

ALTER TABLE empleados
    ADD CONSTRAINT empleados_sedes_fk FOREIGN KEY ( codigo_sede )
        REFERENCES sedes ( codigo );

ALTER TABLE empleados
    ADD CONSTRAINT empleados_tipos_empleado_fk FOREIGN KEY ( tipo_empleado )
        REFERENCES tipos_empleado ( nombre );

--ALTER TABLE facultades
    --ADD CONSTRAINT facultades_empleados_fk FOREIGN KEY ( id_decano )
        --REFERENCES empleados ( identificacion );

ALTER TABLE grupos
    ADD CONSTRAINT grupos_asignaturas_fk FOREIGN KEY ( asignaturas_codigo )
        REFERENCES asignaturas ( codigo );

ALTER TABLE grupos
    ADD CONSTRAINT grupos_empleados_fk FOREIGN KEY ( id_profesor )
        REFERENCES empleados ( identificacion );

ALTER TABLE programas
    ADD CONSTRAINT programas_areas_fk FOREIGN KEY ( codigo_area )
        REFERENCES areas ( codigo );

ALTER TABLE sedes
    ADD CONSTRAINT sedes_ciudades_fk FOREIGN KEY ( cod_ciudad )
        REFERENCES ciudades ( codigo );
