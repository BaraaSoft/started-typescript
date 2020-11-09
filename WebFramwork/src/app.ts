import { FloatingActionButton } from 'materialize-css';
import moment from 'moment';
import { AddUserPresenter } from './addUser/AddUser.presenter';
// import '@types/materialize-css';
import { AddUserView } from './addUser/AddUser.view';
import { ListUsersView } from './views/listUsers.view';




window.onload = function () {

    let currentUrl = window.location.href;
    const [fullViewName,] = currentUrl.split('/').reverse()
    const [viewName,] = fullViewName.split('.')
    switch (viewName) {
        case 'addUser':
            new AddUserView(new AddUserPresenter())
        case 'listUsers':
            new ListUsersView()
    }

}

document.addEventListener('DOMContentLoaded', function () {
    /**** Setup floating action button ****/
    var elems = document.querySelectorAll('.fixed-action-btn');
    var [instance,]: FloatingActionButton[] = M.FloatingActionButton.init(elems, { direction: 'top' });


    // var elems = document.querySelectorAll('.datepicker');
    // var instances = M.Datepicker.init(elems, {});
});



