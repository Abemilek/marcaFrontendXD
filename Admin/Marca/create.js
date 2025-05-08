async function onCreateBrand(event) {
	event.preventDefault();
	const form = event.target;
	const formData = new FormData(form);
	const brand = Object.fromEntries(formData.entries());

	const body = {
		nombreMarca: brand.name,
		activo: true,
		fechaRegistro: new Date()
	};

	const url = "http://localhost:5005/api/marca";
	const token = localStorage.getItem("authToken");
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(body),
	});

	if (response.status !== 200) {
		alert("Error al crear la marca");
		return;
	}

	const brandsUrl = `${window.location.origin}/Admin/Marca/index.html`;
	window.location.href = brandsUrl;
}
