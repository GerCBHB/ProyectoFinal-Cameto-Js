const addToCart = (id, qty) => {

	const result = prods.find(prod => prod.id === id);

	if (result) {

		const existInCart = cart.some(item => item.id === id)

		existInCart
			? modifyProduct(id, qty, 'add')
			: addProduct(result, qty)

		updateCart()
	}
}


const removeToCart = (id) => {

	const result = prods.find(prod => prod.id === id);

	if (result) {

		const product = cart.find(prod => prod.id === id)

		if (!product) return

		product.cantidad > 1
			? modifyProduct(id, 1, 'remove')
			: deleteProduct(id)

		updateCart()
	}
}


const updateCart = () => {
	saveToStorage(cart)
	showCart(cart)
}