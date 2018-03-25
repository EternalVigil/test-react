const express = require('express');
const app = express();

app.use(express.static('build'));
app.set('views', './build');


const PORT = process.env.PORT || 4500;

app.get('*', function(req, res){
	res.sendFile(`${process.cwd()}/build/index.html`);
});

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
});