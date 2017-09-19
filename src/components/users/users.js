import m, { redraw } from 'mithril';

let count = 0;

export class Users {
    view() {
        return (
            <div>
                <a href="#!home">home</a>
                <br />
                <a href="#!users">users</a>

                <br />
                <button onclick={this.increment}> increment </button>
                <br />
                <h2>Hello world this is Users page and we have  { count } </h2>
            </div>
        );
    }

    increment(event) {
        count++;

        setTimeout(() => {
            count++;
            redraw();
        }, 1500);
    }
}