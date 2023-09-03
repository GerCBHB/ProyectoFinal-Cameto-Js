const showPurchase = async () => {

	let totalUSD

	try {
		totalPesos = calcTotal()
		const usd = await calcTotalUSD()
		const total = (totalPesos / usd).toFixed(2)
		totalUSD = `<a href="">Puedes pagarlo en USD ($${total}) mediante Paypal por aquí</a>`
	}

	catch (err) {
		totalUSD = '(No es posible pagar de momento en USD)'
	}

	finally {
		Swal.fire({
			icon: 'success',
			title: 'Muchas gracias por su compra!',
			text: `Para el pago envía una transferencia al alias GerCV.25 con el monto de: $${calcTotal()}`,
			footer: totalUSD
		})
	}
}