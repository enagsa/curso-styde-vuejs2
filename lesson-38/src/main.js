import Vue from 'vue'
import EventBus from 'event-bus.js'
import router from 'router'
import App from 'components/App.vue'

window.EventBus = EventBus

window.not_found = function(){
	console.log('Not found: ' + router.currentRoute.fullPath);
	router.replace('/404');
}

window.not_found_unless = function(condition){
	if(!condition)
		not_found();
}

window.not_found_if = function (condition) {
	if(condition) { 
		not_found();
	}
}

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
