/**
 * @param {*} Array
 * @returns
 */
const createItem = ({ imagen, precio, producto, cantidad, precioTotal }) => {

	const template = `
		<img width="150rem" src='${imagen}'>
		<h5>${producto}</h5>
		<h6>Precio: ${precio}</h6>
		<h6>Cantidad: ${cantidad}</h6>
		<h6>Total: ${precioTotal}</h6>`

	const container = document.createElement('div')
	container.className = "card my-2 itemContainer"
	container.innerHTML = template
	return container
}



/**
 * @param {*} cart
 */
const showCart = (cart) => {

	const container = document.getElementById('cartContainer')
	container.classList.add('bg-body-secondary', 'itemsContainer')
	container.innerHTML = ''

	for (item of cart)
		container.append(createItem(item))

	createTotal(container)
	createButton(container)
}



const createTotal = (container) => {
	const totalContainer = document.createElement('div')
	totalContainer.className = "card my-2 px-2 bg-body-tertiary fw-bold itemContainer"
	totalContainer.innerHTML = 'Total: $' + calcTotal()
	container.append(totalContainer)
}



const createButton = (container) => {
	const button = document.createElement('button')
	button.className = "btn btn-warning"
	button.innerText = "Comprar"
	button.addEventListener('click', showPurchase)
	container.append(button)
}