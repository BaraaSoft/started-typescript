import { FloatingActionButton } from 'materialize-css';
import moment from 'moment';
// import '@types/materialize-css';
import { AddUserView } from './views/addUser.view';
import { ListUsersView } from './views/listUsers.view';




window.onload = function () {

    let currentUrl = window.location.href;
    const [fullViewName,] = currentUrl.split('/').reverse()
    const [viewName,] = fullViewName.split('.')
    switch (viewName) {
        case 'addUser':
            new AddUserView()
        case 'listUsers':
            new ListUsersView()
    }

}

document.addEventListener('DOMContentLoaded', function () {
    /**** Setup floating action button ****/
    var elems = document.querySelectorAll('.fixed-action-btn');
    var [instance,]: FloatingActionButton[] = M.FloatingActionButton.init(elems, { direction: 'top' });
});



