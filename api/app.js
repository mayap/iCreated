const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// Allow CORS requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome!');
});

app.get('/categories', function (req, res) {
  // res.send('Categories test');
  const result = {
    data: [
      {
        type: 'category',
        id: 1,
        attributes: {
          name: 'Shushe',
          itemCount: 2,
        },
        'item-count': 3
      },
      {
        type: 'category',
        id: 2,
        attributes: {
          name: 'zashto ne',
          itemCount: 3,
        },
        'item-count': 3
      },
      {
        type: 'category',
        id: 3,
        attributes: {
          name: 'chetesh',
          itemCount: 3,
        },
        'item-count': 3
      },
    // {
    //   name: 'Category 2',
    //   itemCount: 1,
    //   items: [
    //     {}
    //   ]
    // },
    // {
    //   name: 'Category 3',
    //   itemCount: 2,
    //   items: [
    //     {},
    //     {}
    //   ]
    // }
  ]};
  res.send(JSON.stringify(result));
});

app.get('/categories/:categoryId/items', function(req, res) {
  const categoryId = parseInt(req.params.categoryId);

  if (categoryId <= 0) {
    res.status(400).send('Please enter a valid category id');

    return;
  }

  let result = {
    data: [
      {
        type: 'item',
        id: 1,
        attributes: {
          name: 'Macrame bracelet',
          description: '',
          owner: 'Jenny',
          colors: []
        },
      },
      {
        type: 'item',
        id: 2,
        attributes: {
          name: 'Wooden bracelet',
          description: '',
          owner: 'Maraya',
          colors: []
        },
      },
      {
        type: 'item',
        id: 3,
        attributes: {
          name: 'Silver bracelet',
          description: '',
          owner: 'Test User',
          colors: []

        },
      }
  ]};

  res.send(JSON.stringify(result));
});

app.get('/items', function (req, res) {
  const searchTerm = req.query.searchTerm;

  let result = {
    data: [
      {
        type: 'item',
        id: 1,
        attributes: {
          name: 'Bonsai tree',
          description: '',
          owner: 'John Doe',
          colors: []
        },
      },
      {
        type: 'item',
        id: 2,
        attributes: {
          name: 'Yellow tree',
          description: '',
          owner: 'John',
          colors: []
        },
      },
      {
        type: 'item',
        id: 3,
        attributes: {
          name: 'Pantry',
          description: '',
          owner: 'Test User',
          colors: []

        },
      },
      {
        type: 'item',
        id: 4,
        attributes: {
          name: 'Bullet Journal',
          description: '',
          owner: 'Patrick',
          colors: []

        },
      }
  ]};

  // if (searchTerm) {
  //   let attrsArray = result.data.map(res => {
  //     return res.attributes;
  //   });

  //   // console.log(result);
  //   result = attrsArray.filter(res => {
  //     if (res.name.includes(searchTerm) || res.description.includes(searchTerm)) {
  //       return res;
  //     }
  //   });

  //   console.log(result);
  // }

  res.send(JSON.stringify(result));

});

app.listen(port, function () {
  console.log('RESTful API server started on: ' + port);
});
