import express from 'express';
import chalk from 'chalk';

const app = express();
const { green } = chalk;
const port = process.env.port || 3000;


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
