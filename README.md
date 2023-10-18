# Caso de Estudio: MongoDB

# Reglas de negocio
Se desea diseñar un modelo de base de datos que permita el almacenamiento de los datos concernientes a la vuelta ciclística a Colombia, teniendo en cuenta los siguientes enunciados:

Cada edición de la vuelta a Colombia viene identificada por el año en que tiene lugar y se desea almacenar las fecha inicial y final de la edición. Todas las ediciones tienen diferentes etapas de la cuales es importante guardar un consecutivo identificador dentro de la edición, un origen, un destino y la longitud. Las etapas también tienen un tipo (montaña, contra reloj, etc).

En las vueltas a Colombia corren diferentes equipos. Cada equipo tiene un nombre, también queremos guardar su fecha de fundación. Los equipos pueden participar o no en una edición de la vuelta. Todos los equipos tienen un patrocinador por edición interesa guardar el NIT del patrocinador y el nombre.

Se debe almacenar los datos de los corredores que participan, estos corredores pertenecen a un equipo e interesa guardar nombre, país de nacimiento y fecha de nacimiento, pueden cambiar de equipo de un año a otro, interesando almacenar por cuales equipos ha pasado.

Es de intereses además almacenar el podio de cada una de las etapas, entendiéndose por el podio los ciclistas que ocuparon el primer segundo y tercer lugar en cada etapa. Además, interesa guardar los tiempos de los ocupantes del podio para cada etapa.

Adicionalmente se desea almacenar la auditoría de cada una de las entidades de negocio. 

# Modelo Entidad Relacion
![image](https://github.com/ivanzabala/frameworks-mongodb/assets/130702766/a7660934-6b9e-43a7-8742-9f3cf459247b)

