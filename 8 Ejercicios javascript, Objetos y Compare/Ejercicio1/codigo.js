

function pedirFigura(){
	var opc = parseInt(prompt("Qué figura?:  \n 1.-Triángulo. \n 2.-Cuadrado. \n 3.-Rectángulo.  \n 4.-Círculo."));

	switch(opc){
		case 1: var base = parseInt(prompt("Base:"));
				var altura = parseInt(prompt("Altura: "));
				var figura1 = new Triangulo();
				figura1.nuevo(base, altura);
				document.write("El área del triángulo es: " + figura1.areaTriangulo());
		break;
		case 2: var lado = parseInt(prompt("Lado:"));
				var figura2 = new Cuadrado(lado);
				document.write("El área del cuadrado es: " + figura2.areaCuadrado());
		break;
		case 3: var lado1 = parseInt(prompt("Lado 1:"));
				var lado2 = parseInt(prompt("Lado 2:"));
				var figura3 = new Rectangulo(lado1, lado2);
				document.write("El área del rectángulo es: " + figura3.areaRectangulo());
		break;
		case 4: var radio = parseInt(prompt("Radio:"));
				var figura4 = new Circulo(radio);
				document.write("El área del círculo es: " + figura4.areaCirculo());
		break;
		default: document.write("Opcion incorrecta");
		break;
	}
}

	function Triangulo(){
		this.base = 0;
		this.altura = 0;

		this.nuevo=function(base, altura){
			this.base = base;
			this.altura = altura;
		}

		this.areaTriangulo=function(){
			var area = this.base * this.altura;
			return area;
		}
	}

	function Cuadrado(lado){
		this.lado = lado;

		this.areaCuadrado=function(){
			var area = this.lado * this.lado;
			return area;
		}
	}

	function Rectangulo(lado1, lado2){
		this.lado1 = lado1;
		this.lado2 = lado2;

		this.areaRectangulo=function(){
			var area = this.lado1 * this.lado1;
			return area;
		}
	}

	function Circulo(radio){
		this.radio = radio;

		this.areaCirculo=function(){
			var area = Math.PI * this.radio * this.radio;
			return area;
		}
	}



