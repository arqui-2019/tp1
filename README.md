# Arq. del Soft. - TP1

El repositorio contiene 3 archivos de config. de Compose:

 - *docker-compose.yml*: Levanta node (1 container) y gunicorn con 1 worker sinc.
 - *scaled-docker-compose.yml*: Levanta node (3 containers) y gunicorn con 6 workers sinc.
 - *bbox-docker-compose.yml*: Levanta el servicio bbox provisto por la cátedra (sumado a grafana, graphite y cadvisor) 

Usar la opción -f para especificar el archivo a usar (en caso de no ser el default):

   	[sudo] docker-compose -f <compose-config> <comando>
