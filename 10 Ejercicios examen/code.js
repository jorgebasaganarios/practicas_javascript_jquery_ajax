var monedas = [];
var asignaturaMostrar;
var contador = 0;
var opcionUsuario = -1;

while(opcionUsuario != 0){
	var opcionUsuario = parseInt(prompt(' 1. Introduce moneda. \n 2. Aumentar cantidad. \n 3. Reducir cantidad. \n 4. Cambio de valor. \n 5. Valor moneda en USD. \n 6. Valor del wallet. \n 0. SALIR'));
	switch(opcionUsuario){
		case 0: document.write("SALIR");
				break;
		case 1: document.write("Moneda " + pedirDatos() + " añadida." + "<br><br>");
				break;
		case 2: var posMoneda = buscarMoneda(prompt('Introduce la moneda a incrementar: '));
				document.write("Posición en la que se encuentra la moneda: " + posMoneda + "<br><br>");
				var cantPr = pedirMoneda();
				document.write("Cantidad total tras incremento: " + monedas[posMoneda].aumentarCantidad(cantPr) + "<br><br>");
				break;
		case 3: var posMoneda = buscarMoneda(prompt('Introduce la moneda a reducir: '));
				document.write("Posición en la que se encuentra la moneda: " + posMoneda + "<br><br>");
				var cantPr = pedirMoneda();
				document.write("Cantidad total tras reducir: " + monedas[posMoneda].reducirCantidad(cantPr) + "<br><br>");
				break;
		case 4: var posMoneda = buscarMoneda(prompt('Introduce la moneda cuyo valor modificar: '));
				document.write("Posición en la que se encuentra la moneda: " + posMoneda + "<br><br>");
				var cantVal = pedirValor();
				document.write("Valor total tras el cambio: " + monedas[posMoneda].modificarValor(cantVal) + "<br><br>");
				break;
		case 5: var posMoneda = buscarMoneda(prompt('Introduce la moneda para calcular tu saldo total: '));
				document.write("Total de la moneda: " + monedas[posMoneda].totalMoneda() + "<br><br>");
				break;
		case 6: document.write("Total del Wallet: " + totalWallet(monedas) + "<br><br>");
				break;
		default:document.write("ERROR");
	}
}
	//Pedir datos de la moneda a introducir.
	function pedirDatos(){
		var nomMoneda = prompt(" 1. ¿Qué moneda?");
		var cantidad = parseFloat(prompt(" 2. ¿Cuánta moneda tienes?"));
		var valor = parseFloat(prompt(" 2. ¿Qué valor actual tiene en USD?"));
		moneda = new Moneda();
		moneda.crearMoneda(nomMoneda, cantidad, valor);
		monedas.push(moneda);
		return nomMoneda;
	}
	//Constructor.
	function Moneda(nomMoneda, cantidad, valor){
		this.nomMoneda = "";
		this.cantidad = 0;
		this.cantMonedas = 0;
		this.valor = 0;
		this.valores = [];
		//Creación de cada moneda.
		this.crearMoneda=function(nomMoneda, cantidad, valor){
			this.nomMoneda = nomMoneda;
			this.cantidad = cantidad;
			this.valor = valor;
		}
		//Incrementador del valor existente.
		this.aumentarCantidad=function(cant){
			var cantIncr = this.cantidad + cant;
			this.cantidad = cantIncr;
			return cantIncr;
		}
		//Restar al valor existente.
		this.reducirCantidad=function(cant){
			var cantIncr = this.cantidad - cant;
			this.cantidad = cantIncr;
			return cantIncr;
		}
		//Modificar valor existente de la moneda.
		this.modificarValor=function(cant){
			this.valor = cant;
			return this.valor;
		}
		//Calculador del total por moneda.
		this.totalMoneda=function(){
			var total=0;
			total = parseFloat(this.cantidad) * parseFloat(this.valor);
			return total;
		}
		//Calculador del total del monedero.
		this.finalWallet=function(){
			var totWall=0;
			for(var i=0; i<monedas.length; i++){
				totWall = totWall + parseFloat(monedas[i].totalMoneda());
			}
			return totWall;
		}
	}
	//Solicitar datos de la moneda.
	function pedirMoneda(){
		var cant = parseFloat(prompt('Introduce una cantidad: '));
		return cant;
	}
	//Pedir el valor de la moneda en USD.
	function pedirValor(){
		var val = parseFloat(prompt('Introduce el valor de moneda actual: '));
		return val;
	}
	//Método para buscar la moneda comparando conla cadena introducida.
	function buscarMoneda(nom){
		for(var i=0; i<monedas.length; i++){
			if(monedas[i].nomMoneda == nom){
				return i;
			}
		}
	}
	//´Cálculo del Wallet.
	function totalWallet(monedas){
	var valMon = 0;
	for (var i=0; i<monedas.length; i++){
		valMon = parseFloat(monedas[i].finalWallet());
	}
	return valMon;
}