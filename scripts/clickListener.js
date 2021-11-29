import { getEmployees, getOrders, getProducts } from "./database.js";

const products = getProducts();
const orders = getOrders();
const employees = getEmployees();

export const getListener = () => {};

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target;
	const [type, id] = itemClicked.id.split("--");
	switch (type) {
		case "product":
			for (const product of products) {
				if (product.id === parseInt(id)) {
					window.alert(`${product.name} costs $${product.price}`);
				}
			}
			break;

		case "employee":
            // put the number of producst sold by the employee up when clicked
            let productsSold = 0;
            let employeeName = "";
            //get number of products they've sold
            for (const order of orders) {
                if (order.employeeId === parseInt(id)) {
                    productsSold++;
                }
            }
            // get the employees name
            for (const employee of employees) {
                if (employee.id === parseInt(id)) {
                    employeeName += employee.name;
                }
            }
            window.alert(`${employeeName} has sold ${productsSold} products.`)
			break;

		default:
			break;
	}
});
