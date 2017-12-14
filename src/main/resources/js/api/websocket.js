const SockJS = require('sockjs-client');
require('stompjs');

export const register = (registrations) => {
    let socket = SockJS('/payroll');
    let stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
        registrations.forEach(registration => {
            stompClient.subscribe(registration.route, registration.callback);
        });
    });
};