# Valid credit card
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

## Pseudocódigo
1. Crear un prompt que pida el número de tarjeta del usuario, el cuál se guardará en la variable.
2. Con ".split" pasarlo a un array para poder manipularlo, y lo guardaremos en un nuevo array.
4. Para aplicar el algoritmo de Luhn, cambiar el orden del array con ".reverse" que se guardará en una nueva variable.
5. Crear un arreglo vacio donde se guardará la suma de los números impares.
6. Crear un for para que recorra "reverse" y pueda ir guardando y sumando todos los números que se encuentren en index impar.
7. Crear un nuevo arreglo vacío donde se guardarán los números en index par menor a 4.
8. Crear un for para que recorrar "reverse" y encuentre los números que estén en index par menor que 4 y los multiplique por dos.
9. Crear una variable vacia donde guardará los index pares mayores a 4.
10. Crear un for que recorra "reverse" y encuentre los index pares mayores a 4.
11. Dentro del for haremos una comparación y reasiganremos los valores a los números 5, 6, 7, 8 y 9 (ej, 5+5 = 10, 1+0=1).
12. Sumar los 3 resultados y hacer una comparación de módulo de 10 === 0, sí es verdadero regresar un mensaje de "Valid card" y si es false retornar "Your card isn´t valid".


### Diagrama de flujo
![Diagrama de flujo](https://www.lucidchart.com/publicSegments/view/0640f9b8-05a3-4b4c-a026-67e9f3e44ed9/image.png)
