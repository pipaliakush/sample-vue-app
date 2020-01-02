import { request } from '@/store/api.js';

export default {
	getEmployee({ commit }) {
		commit('isLoading', true)
		return request(this.$axios, 'get', 'http://dummy.restapiexample.com/api/v1/employees').then(response => {
			commit('isLoading', false)
			commit('getEmployee', response);
		})
	},
	addEmployee({ dispatch }, data) {
		return request(this.$axios, 'post', 'http://dummy.restapiexample.com/api/v1/create', data)
	},
	updateEmployee({ dispatch }, { id, employeeForm }) {
		return request(this.$axios, 'put', `http://dummy.restapiexample.com/api/v1/update/${id}`, employeeForm)
	},
	deleteEmployee({ dispatch }, id) {
		return request(this.$axios, 'delete', `http://dummy.restapiexample.com/api/v1/delete/${id}`)
	}
}