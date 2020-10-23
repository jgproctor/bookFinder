import express from 'express';
import chalk from 'chalk';
import react from 'react';
import reactDOM from 'react-dom';

const app = express();

const { green } = chalk;

const { createElement } = react;

const port = process.env.port || 3000;

function Welcome(props) {
    createElement(
        'h1',
        null,
        props.name
    )
}

function App() {
    createElement(
        'div',
        null,
        Welcome
    )
}

if (typeof window === 'undefined') {
    console.log('hello');
    reactDOM.render(App, this.refs[this.app]);
}

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(
        "index",
        {}
    );
});

app.listen(port, () => {
    console.log(`Running on port ${green(port)}`);
});
