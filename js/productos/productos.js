/**
 *
 * @param {*} param0 
 * @returns 
 */
const template = ({ id, producto, marca, precio, descripcion, imagen }) => {
	return `<div class="card" style="width: 18rem;">
						<img class="prodc" src="${imagen}" alt="${producto}">
						<div class="card-body">
							<h5 class="card-title">${producto}</h5>
							<p class="card-text">${descripcion}</p>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item" id="0">$ ${precio}</li>
						</ul>
						<div class="card-body d-flex justify-content-center">
							<button onclick="removeToCart(${id})" class="btn btn-danger mx-2">Quitar</button>
							<button onclick="previewSale(${id})" class="btn btn-success mx-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M29.02 11.754L8.416 9.474L7.16 4.715a.758.758 0 0 0-.727-.558H3.34a1.214 1.214 0 0 0-.963-.49a1.24 1.24 0 1 0 0 2.483c.4 0 .738-.2.965-.492h2.512l5.23 19.8a3.282 3.282 0 0 0-.89 2.242a3.29 3.29 0 0 0 3.292 3.293a3.296 3.296 0 0 0 3.297-3.293a3.19 3.19 0 0 0-.093-.743h5.533a3.25 3.25 0 0 0-.092.743c0 1.82 1.476 3.293 3.296 3.293S28.72 29.52 28.72 27.7a3.296 3.296 0 0 0-3.294-3.297c-.95 0-1.8.41-2.402 1.053h-7.136a3.276 3.276 0 0 0-2.402-1.053c-.38 0-.738.078-1.077.196l-.182-.686H26.81a2.5 2.5 0 0 0 2.39-1.96l1.575-7.798a2.17 2.17 0 0 0 .04-.414a1.995 1.995 0 0 0-1.795-1.988zm-3.592 16.24a.298.298 0 0 1-.297-.295c.003-.166.135-.298.298-.298s.295.132.297.297a.298.298 0 0 1-.297.294zm1.78-7.495l.948-.95l-.318 1.58l-.63-.63zm-14.453-9.037L13.79 12.5l-1.29 1.29l-1.293-1.29l1.087-1.088l.46.05zm4.498.498l.538.54l-1.29 1.29l-1.293-1.29l.688-.69l1.358.15zM9.63 14.076l.87-.868l1.29 1.292l-1.29 1.29l-.565-.563l-.304-1.152zm-.295-1.12l-.328-1.24l.785.785l-.457.456zM21.79 16.5l-1.29 1.29l-1.293-1.29l1.292-1.293l1.29 1.292zm-.583-2l1.292-1.292l1.29 1.292l-1.29 1.292l-1.293-1.292zM18.5 15.79l-1.293-1.29l1.292-1.293l1.29 1.292l-1.29 1.29zm-.71.71l-1.29 1.29l-1.292-1.29l1.292-1.293l1.29 1.292zm-3.29-.71l-1.293-1.29l1.292-1.293l1.29 1.292l-1.29 1.29zm-.71.71l-1.29 1.29l-1.293-1.29l1.292-1.293l1.29 1.292zm-3.29.707l1.29 1.292l-.784.783l-.54-2.044l.033-.033zm.802 3.197l1.197-1.197l1.29 1.292l-1.29 1.29l-1.13-1.13l-.068-.256zm1.906-1.905l1.29-1.293l1.293 1.292l-1.29 1.29l-1.292-1.29zm3.292.707l1.292 1.292l-1.292 1.29l-1.292-1.29l1.292-1.293zm.708-.708l1.292-1.293l1.29 1.292l-1.29 1.29l-1.292-1.29zm3.29.707l1.293 1.292l-1.29 1.29l-1.292-1.292l1.29-1.29zm.71-.708l1.29-1.293l1.293 1.292l-1.29 1.29l-1.293-1.29zm2-2l1.29-1.293l1.293 1.292l-1.29 1.29l-1.293-1.29zm2-2l1.29-1.293L27.79 14.5l-1.29 1.292l-1.293-1.293zm-.71-.708l-1.155-1.156l2.082.23l-.926.926zM21.792 12.5l-1.29 1.292l-1.293-1.292l.29-.29l2.253.25l.04.04zm-7.29-.71l-.152-.15l.273.03l-.12.12zm-4 .002l-.65-.65l1.17.13l-.52.52zm4 9.415l1.205 1.205h-2.41l1.205-1.205zm4 0l1.205 1.206h-2.412l1.206-1.206zm4 0l1.207 1.207h-2.414l1.206-1.207zm.707-.708l1.292-1.293l1.29 1.292l-1.29 1.29l-1.293-1.29zm2-2l1.292-1.292l1.29 1.29l-1.29 1.293l-1.293-1.29zm3.292-.71l-1.292-1.29l1.29-1.292l.445.444l-.43 2.124l-.014.015zm.5-4.5l-.5.5l-.66-.657l1.017.112c.054.008.1.026.144.044zM13.488 27.993a.297.297 0 0 1 0-.593a.296.296 0 0 1 0 .591zm13.323-5.58h-1.517l1.207-1.207l.93.93c-.187.17-.423.29-.62.277z"/></svg>
							</button>
						</div>
					</div>`
	}
						

const mostrarProductos = () => {

	const container = document.querySelector('#productsContainer')
	const result = prods.map(prod => template(prod))
	container.innerHTML = result.join('')
}


const previewSale = (id) => {
	Swal.fire({
		title: prods[id].marca,
		text: `Precio: $${prods[id].precio}`,
		inputLabel: 'Cantidad:',
		inputValidator: (value) => {
			return new Promise((resolve) => {
				if (value > 0) {
					resolve()
				} else {
					resolve('El valor ingresado no es válido')
				}
			})
		},
		inputPlaceholder: 'Ingrese la cantidad a comprar',
		input: 'number',
		imageUrl: prods[id].imagen,
		imageWidth: 200,
		imageHeight: 200,
		imageAlt: prods[id].producto,
		confirmButtonText: 'AGREGAR'
	})
		.then(res => {
			if (res.isConfirmed)
				addToCart(id, parseInt(res.value))
		})
		.catch(err => console.log(err))
}
