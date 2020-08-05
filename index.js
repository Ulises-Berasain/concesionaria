const Autos = function(marca, modelo, puertas, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.precio = precio;
};

const Motos = function(marca, modelo, cilindrada, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.precio = precio;
};

const auto1 = new Autos("Peugeot", "206", "4",200000);
const auto2 = new Autos("Peugeot", "208", "5", 250000);
const moto1 = new Motos("Honda", "Titan","125c", 60000);
const moto2 = new Motos("Yamaha", "YBR", "160c",80500.50);
const preciosVehiculos = [auto1.precio, auto2.precio, moto1.precio, moto2.precio];

console.log(`Marca: ${auto1.marca} // Modelo: ${auto1.modelo} // Puertas: ${auto1.puertas} // Precio: $${auto1.precio} `);
console.log(`Marca: ${moto1.marca} // Modelo ${moto1.modelo} // Cilindrada: ${moto1.cilindrada} // Precio: $${moto1.precio} `);
console.log(`Marca: ${auto2.marca} // Modelo: ${auto2.modelo} // Puertas: ${auto2.puertas} // Precio: $${auto2.precio} `);
console.log(`Marca: ${moto2.marca} // Modelo ${moto2.modelo} // Cilindrada: ${moto2.cilindrada} // Precio: $${moto2.precio} `);
console.log(`Vehículo más caro: ${mostrarVehiculoMayorPrecio()}`);
console.log(`Vehículo más barato: ${mostrarVehiculoMenorPrecio()}`);
function obtenerMayorPrecio(preciosVehiculos){
    let mayorNumero = preciosVehiculos[0];

    for(let i = 0; i < preciosVehiculos.length; i++){
        if(preciosVehiculos[i] > mayorNumero){
            mayorNumero = preciosVehiculos[i];
        }
    }
    return mayorNumero;
};

function mostrarVehiculoMayorPrecio(){
    if(obtenerMayorPrecio(preciosVehiculos) === auto1.precio){
        return `${auto1.marca} ${auto1.modelo}`;

    }if(obtenerMayorPrecio(preciosVehiculos) === auto2.precio){
        return `${auto2.marca} ${auto2.modelo}`;

    }if(obtenerMayorPrecio(preciosVehiculos) === moto1.precio){
        return `${moto1.marca} ${moto1.modelo}`;

    }if(obtenerMayorPrecio(preciosVehiculos) === moto2.precio){
        return `${moto2.marca} ${moto2.modelo}`;
    }
};

function obtenerMenorPrecio(preciosVehiculos){
    let menorNumero = preciosVehiculos[0];

    for(let i = 0; i < preciosVehiculos.length; i++){
        if(preciosVehiculos[i] < menorNumero){
            menorNumero = preciosVehiculos[i];
        }
    }
    return menorNumero;
};

function mostrarVehiculoMenorPrecio(){
    if(obtenerMenorPrecio(preciosVehiculos) === auto1.precio){
        return `${auto1.marca} ${auto1.modelo}`;

    }if(obtenerMenorPrecio(preciosVehiculos) === auto2.precio){
        return `${auto2.marca} ${auto2.modelo}`;

    }if(obtenerMenorPrecio(preciosVehiculos) === moto1.precio){
        return `${moto1.marca} ${moto1.modelo}`;

    }if(obtenerMenorPrecio(preciosVehiculos) === moto2.precio){
        return `${moto2.marca} ${moto2.modelo}`;
    }
};
