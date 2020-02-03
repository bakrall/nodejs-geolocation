const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at port 3000'));
app.use(express.static('public')); //to make express display static html files from folder 'public'
//below adds to the server the ability to parse received data as json
app.use(express.json({ limit: '1mb' })); //limit specifies maximum size of any body that is coming in

app.post('/api', (request, response) => {
	const data = request.body;

	//it is required to complete a request - at the minimum we can use 'response.end()'
	response.json({					
		status: 'success',
		latitude: data.lat,
		longitude: data.lon
	})
});