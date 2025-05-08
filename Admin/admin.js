function createAdminMenu() {
	const productRoute = "producto";
	const categoryRoute = "categoria";
	const marcaRoute = "marca";

	const isRouteActive = (routeName) => {
		const availableRoutes = {
			producto: [
				"/Admin/Producto/index.html",
				"/Admin/Producto/create.html",
				"/Admin/Producto/edit.html"
			],
			categoria: [
				"/Admin/Categoria/index.html",
				"/Admin/Categoria/create.html",
				"/Admin/Categoria/edit.html"
			],
			marca: [
				"/Admin/Marca/index.html",
				"/Admin/Marca/create.html",
				"/Admin/Marca/edit.html"
			]
		};
		const currentRoute = window.location.pathname;
		return availableRoutes[routeName].includes(currentRoute);
	};

	const routes = [
		{
			name: "📚 Productos",
			path: "/Admin/Producto/index.html",
			isActive: isRouteActive(productRoute),
		},
		{
			name: "🗂 Categorías",
			path: "/Admin/Categoria/index.html",
			isActive: isRouteActive(categoryRoute),
		},
		{
			name: "🗂 Marcas",
			path: "/Admin/Marca/index.html",
			isActive: isRouteActive(marcaRoute),
		},
	];

	const container = document.getElementById("admin-sidebar-menu");
	for (const route of routes) {
		const li = document.createElement("li");
		li.innerHTML = `
			<a class="${route.isActive ? "active" : ""}" href="${route.path}">
				${route.name}
			</a>
		`;
		container.appendChild(li);
	}
}

createAdminMenu();
