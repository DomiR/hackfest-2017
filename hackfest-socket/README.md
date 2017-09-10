# Pub sub for smart-plate


# Instance and status
```bash
# Instance running on
https://polar-shelf-82300.herokuapp.com/
```

# Receiving
```js
// run to subscribe
node client.js

//Code
const URL = 'https://polar-shelf-82300.herokuapp.com';
var socket = io(URL);
socket.on('message', function (data) {
    console.log(data);
});
```

# Sending
```bash
# call
curl -H "Content-Type: application/json" -X POST -d '{"test":"nice"}' https://polar-shelf-82300.herokuapp.com/publish
```