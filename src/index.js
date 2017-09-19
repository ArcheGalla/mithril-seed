import * as m from 'mithril'
import { Home } from './components/home/home';
import { Users } from './components/users/users';

m.route(document.body, 'home', {
    home: Home,
    users: Users
});
