INSERT INTO tipos_contratacion  VALUES ('Término Fijo');
INSERT INTO tipos_contratacion  VALUES ('Término indefinido');
INSERT INTO tipos_contratacion  VALUES ('Obra o labor');
INSERT INTO tipos_contratacion  VALUES ('Contrato civil');
INSERT INTO tipos_contratacion  VALUES ('Prestación de servicios');
INSERT INTO tipos_contratacion  VALUES ('Contrato de aprendizaje');
INSERT INTO tipos_contratacion  VALUES ('Contrato ocasional de trabajo.');

INSERT INTO paises  VALUES (01,'Colombia');
INSERT INTO paises  VALUES (02,'Venezuela');
INSERT INTO paises  VALUES (03,'Panama');
INSERT INTO paises  VALUES (04,'Ecuador');
INSERT INTO paises  VALUES (05,'Peru');
INSERT INTO paises  VALUES (06,'Brasil');
INSERT INTO paises  VALUES (07,'Argentina');
INSERT INTO paises  VALUES (08,'Chile');
INSERT INTO paises  VALUES (09,'Mexico');
INSERT INTO paises  VALUES (10,'Estados Unidos');
INSERT INTO paises  VALUES (11,'Canada');

INSERT INTO departamentos  VALUES (01,'Antioquia',01);
INSERT INTO departamentos  VALUES (02,'Caldas',01);
INSERT INTO departamentos  VALUES (03,'Meta',01);
INSERT INTO departamentos  VALUES (04,'Quindio',01);
INSERT INTO departamentos  VALUES (05,'Risaralda',01);
INSERT INTO departamentos  VALUES (06,'Santander',01);
INSERT INTO departamentos  VALUES (07,'Cundinamarca',01);
INSERT INTO departamentos  VALUES (08,'Magdalena',01);
INSERT INTO departamentos  VALUES (09,'Choco',01);
INSERT INTO departamentos  VALUES (10,'Tolima',10);
INSERT INTO departamentos  VALUES (11,'Uraba',11);

INSERT INTO ciudades  VALUES (01,'Medellin',01);
INSERT INTO ciudades  VALUES (02,'Manizales',02);
INSERT INTO ciudades  VALUES (03,'Villavicencio',03);
INSERT INTO ciudades  VALUES (04,'Armenia',04);
INSERT INTO ciudades  VALUES (05,'Pereira',05);
INSERT INTO ciudades  VALUES (06,'Pereira',06);
INSERT INTO ciudades  VALUES (07,'Bucaramanga',07);
INSERT INTO ciudades  VALUES (08,'Santa Marta',08);
INSERT INTO ciudades  VALUES (09,'Quibdó',09);
INSERT INTO ciudades  VALUES (10,'Ibagué',10);
INSERT INTO ciudades  VALUES (11,'Apartado',11);
INSERT INTO ciudades  VALUES (12,'Bello',01);
INSERT INTO ciudades  VALUES (13,'Rionegro',01);

INSERT INTO sedes  VALUES (01,'Sede Medellín',01);
INSERT INTO sedes  VALUES (02,'Sede Bello',12);
INSERT INTO sedes  VALUES (03,'Sede Oriente ',13);
INSERT INTO sedes  VALUES (04,'Sede Apartadó',11);

INSERT INTO tipos_empleado  VALUES ('Administrativo');
INSERT INTO tipos_empleado  VALUES ('Docente');
INSERT INTO tipos_empleado  VALUES ('Vigilancia');
INSERT INTO tipos_empleado  VALUES ('Oficios Varios');

INSERT INTO facultades  VALUES (01,'Administración','Sede Medellín',604111111,105);
INSERT INTO facultades  VALUES (02,'Ciencias Agrarias','Sede Medellín',604222222,205);
INSERT INTO facultades  VALUES (03,'Ciencias Básicas','Sede Medellín',604333333,305);
INSERT INTO facultades  VALUES (04,'Comunicación','Sede Medellín',604444444,405);
INSERT INTO facultades  VALUES (05,'Educacion Física','Sede Medellín',604555555,505);
INSERT INTO facultades  VALUES (06,'Ingeniería','Sede Medellín',604666666,605);

INSERT INTO empleados  VALUES (01, 'Manuel','Correa','manuel@gmail.com','Término indefinido','Administrativo',01,01,01);
INSERT INTO empleados  VALUES (02, 'Deisy'   ,'Ossa'     ,'Deisy@gmail.com'   ,'Término indefinido','Administrativo',03,01,01);
INSERT INTO empleados  VALUES (03, 'Andres'  ,'Ospina'   ,'andres@gmail.com'  ,'Término indefinido','Administrativo',06,01,01);
INSERT INTO empleados  VALUES (04, 'Emanuel' ,'Muñoz'    ,'emmanuel@gmail.com','Término indefinido','Administrativo',06,01,01);
INSERT INTO empleados  VALUES (05, 'Monica'  ,'Rojas'    ,'monica@gmail.com'  ,'Término indefinido','Docente',06,01,01);
INSERT INTO empleados  VALUES (06, 'Carlos'  ,'Posada'   ,'carlos@gmail.com'  ,'Término indefinido','Docente',06,01,01);
INSERT INTO empleados  VALUES (07, 'Rigonel' ,'Rodriguez','Rigonel@gmail.com' ,'Término indefinido','Docente',06,01,01);
INSERT INTO empleados  VALUES (08, 'Willima' ,'Gutierrez','willima@gmail.com' ,'Término indefinido','Docente',06,01,01);
INSERT INTO empleados  VALUES (09, 'Felipe'  ,'Henao'    ,'Felipe@gmail.com'  ,'Término indefinido','Docente',06,01,01);
INSERT INTO empleados  VALUES (10, 'Carolina','Echeverri','Carolina@gmail.com','Término indefinido','Docente',03,01,01);

INSERT INTO areas  VALUES (01, 'Agronomía',02,01);
INSERT INTO areas  VALUES (02, 'Educación',03,02);
INSERT INTO areas  VALUES (03, 'Ciencias Sociales',03,03);
INSERT INTO areas  VALUES (04, 'Administración',01,04);
INSERT INTO areas  VALUES (05, 'Ingeniería',06,05);
INSERT INTO areas  VALUES (06, 'Matematicas',03,06);
INSERT INTO areas  VALUES (07, 'Ciencia Naturales',03,07);

INSERT INTO programas  VALUES (01, 'Técnica en Programación de Sistemas',05);
INSERT INTO programas  VALUES (02, 'Tecnología en Construcciones Civiles',05);
INSERT INTO programas  VALUES (03, 'Tecnología en Telecomunicaciones',05);
INSERT INTO programas  VALUES (04, 'Tecnología en Instrumentación',05);
INSERT INTO programas  VALUES (05, 'Tecnología en Seguridad Ocupacional',05);
INSERT INTO programas  VALUES (06, 'Tecnología en Desarrollo de Software',05);
INSERT INTO programas  VALUES (07, 'Tecnología en Sistematización de Datos',05);
INSERT INTO programas  VALUES (08, 'Ingeniería Civil',05);
INSERT INTO programas  VALUES (09, 'Ingeniería en Seguridad y Salud',05);
INSERT INTO programas  VALUES (10, 'Ingeniería en Automatización y Control',05);
INSERT INTO programas  VALUES (11, 'Ingeniería Informática',05);

INSERT INTO asignaturas  VALUES (01, 'Metodologia Investigación',11);
INSERT INTO asignaturas  VALUES (02, 'Base Datos 1',11);
INSERT INTO asignaturas  VALUES (03, 'Base DAtos 2',11);
INSERT INTO asignaturas  VALUES (04, 'AS 400',11);
INSERT INTO asignaturas  VALUES (05, 'Formulacion de proyectos',11);
INSERT INTO asignaturas  VALUES (06, 'Ecuaciones diferenciales',11);
INSERT INTO asignaturas  VALUES (07, 'Matematicas Discretas 1',11);
INSERT INTO asignaturas  VALUES (08, 'Algebra Linea',11);
INSERT INTO asignaturas  VALUES (09, 'Humanidades 1',11);
INSERT INTO asignaturas  VALUES (10, 'Humanidades 2',11);
INSERT INTO asignaturas  VALUES (11, 'Matematicas Discretas 2',11);


INSERT INTO grupos  VALUES (01, '202102',01,10);
INSERT INTO grupos  VALUES (02, '202102',01,10);
INSERT INTO grupos  VALUES (03, '202102',02,05);
INSERT INTO grupos  VALUES (04, '202102',02,05);
INSERT INTO grupos  VALUES (05, '202102',03,05);
INSERT INTO grupos  VALUES (06, '202102',03,05);
INSERT INTO grupos  VALUES (07, '202102',04,08);
INSERT INTO grupos  VALUES (08, '202102',04,08);
INSERT INTO grupos  VALUES (09, '202102',05,07);
INSERT INTO grupos  VALUES (10, '202102',05,07);
INSERT INTO grupos  VALUES (11, '202102',06,09);
INSERT INTO grupos  VALUES (12, '202102',06,09);
INSERT INTO grupos  VALUES (13, '202102',07,06);
INSERT INTO grupos  VALUES (14, '202102',07,06);
INSERT INTO grupos  VALUES (15, '202102',08,09);
INSERT INTO grupos  VALUES (16, '202102',08,09);
INSERT INTO grupos  VALUES (17, '202102',09,06);
INSERT INTO grupos  VALUES (18, '202102',09,06);
INSERT INTO grupos  VALUES (19, '202102',10,06);
INSERT INTO grupos  VALUES (20, '202102',10,06);
INSERT INTO grupos  VALUES (21, '202102',11,09);
INSERT INTO grupos  VALUES (22, '202102',11,09);
