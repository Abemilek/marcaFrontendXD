async function getMarcas() {
	const url = "http://localhost:5005/api/marca";
    const token = localStorage.getItem("authToken");
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const isSuccess = response.status === 200;
    if (!isSuccess) {
        alert("Error al cargar las marcas");
        return;
    }

    const masrcas = await response.json();
	return marcas;
}