import 'regenerator-runtime/runtime';
//import '@types/materialize-css';
import { FloatingActionButton } from 'materialize-css';
import moment from 'moment';
import { AddUserPresenter } from './addUser/AddUser.presenter';
import { AddUserView } from './addUser/AddUser.view';
import { ListUsers } from './listUsers/ListUsers.view';
import { IComponent } from './base/IComponent';





window.onload = function () {

    let currentUrl = window.location.href;
    const [fullViewName,] = currentUrl.split('/').reverse()
    const [viewName,] = fullViewName.split('.')
    let view: IComponent | null
    switch (viewName) {
        case 'addUser':
            new AddUserView(new AddUserPresenter())
            break
        case 'listUsers':

            view = new ListUsers()
            view?.mount()
            // setTimeout(() => {
            //     view?.unmount()
            //     setTimeout(() => { view?.mount() }, 5000)
            // }, 3000)
            break;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    /**** Setup floating action button ****/
    var elems = document.querySelectorAll('.fixed-action-btn');
    var [instance,]: FloatingActionButton[] = M.FloatingActionButton.init(elems, { direction: 'top' });


    // var elems = document.querySelectorAll('.datepicker');
    // var instances = M.Datepicker.init(elems, {});
});



