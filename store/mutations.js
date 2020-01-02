export default {
	getEmployee(state, employee) {
		state.employee = employee;
	},
	isLoading(state, isLoading) {
		state.isLoading = isLoading;
	}
}