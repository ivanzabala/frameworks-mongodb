// Comandos base
Mostrar bases de datos >> show dbs
Logg en base de datos  >> use nombre_base_datos
Mostrar colecciones    >> db.getCollectionNames()
Crear coleccion        >> db.createCollection('nombre_coleccion')
Informacion mongo CRUD >> db.nombre_coleccion.help

// Obtener nombre colecciones
db.getCollectionNames()

// Crear coleccion
db.createCollection("usuarios")

// Insertar un solo documento
db.frameworks.insertOne({ nombre: "Cristian", edad: 26, ciudad: "Duitama" });

// Insertar múltiples documentos
db.frameworks.insertMany([
    { nombre: "Jose",  edad: 20, ciudad: "Tunja" },
	{ nombre: "Pedro", edad: 25, ciudad: "Tunja" },
    { nombre: "Maria", edad: 35, ciudad: "Tunja" }
]);

// Consultar documentos que cumplen con un filtro
db.frameworks.find();
db.frameworks.find({ ciudad: "Tunja" });


// Actualizar un solo documento que cumple con el filtro
db.frameworks.updateOne({ nombre: "Juan" }, { $set: { edad: 31 } });


// Eliminar un solo documento que cumple con el filtro
db.frameworks.deleteOne({ nombre: "Pedro" });

// Consultar documentos ordenados por edad en orden ascendente
db.frameworks.find().sort({ edad: 1 });


Las agregaciones en MongoDB son un poderoso mecanismo que te permite realizar operaciones de procesamiento
y transformación de datos en la base de datos. Las agregaciones son particularmente útiles para realizar 
análisis complejos y obtener información resumida de tus datos. En el ejemplo:
// Realizar una agregación para contar cuántas personas tienen la misma ciudad
db.frameworks.aggregate([
    { $group: { _id: "$ciudad", total: { $sum: 1 } } }
]);
	

