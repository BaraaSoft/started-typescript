import { FloatingActionButton } from 'materialize-css';
import moment from 'moment';
// import '@types/materialize-css';
import { AddUserView } from './views/addUser.view';
import { ListUsersView } from './views/listUsers.view';




window.onload = function () {

    let currentUrl = window.location.href;
    const [viewName,] = currentUrl.split('/').reverse()
    switch (viewName) {
        case 'addUser.html':
            new AddUserView()
        case 'listUsers.html':
            new ListUsersView()
    }

}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances: FloatingActionButton[] = M.FloatingActionButton.init(elems, { direction: 'top' });
    // instances[0].open()
});



