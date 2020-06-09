const Tour = require('../models/tourModel');

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (bad request) code
// Add it to the post handler stack
exports.checkBody = (req, res, next) => {
  //console.log(req.body);

  if (!req.body.name || !req.body.price)
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price!',
    });

  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success', //success, fail, error
    requestedAt: req.requestTime,
    // results: tours.length, //json standardında bu alan genelde olmaz ama client tarafında işe yarayabilir diye yollanıyor
    // data: {
    //   //tours: tours, //ES6'de aynı isimlileri yazmaya gerek yok ama standart olarak yazılabilir.
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  //console.log(req.params);

  const id = req.params.id * 1; //string to number işlemi. Burada çoklu parametre olsaydı (x ve y) .x ve .y ile erişecektik
  //const id = Number(req.params);

  // //tours dizisinin tüm elemanlarını tek tek "el" içine alır. el.id'si id'ye eşitse o öğeyi döner. Yoksa undefined döner
  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success', //success, fail, error
  //   // results: tours.length, //json standardında bu alan genelde olmaz ama client tarafında işe yarayabilir diye yollanıyor
  //   data: {
  //     tour,
  //   },
  // });
};

//create a new tour (client to server)
exports.createTour = (req, res) => {
  // 200 kodu "ok", 201 kodu "created", 404 "not found" demek
  res.status(201).json({
    status: 'success',
    data: {
      // tour: newTour,
    },
  });
};

// Update Tour
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

// Delete Tour
exports.deleteTour = (req, res) => {
  // 204 kodu "no content" demek
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

//exports. şeklinde yazılan fonksiyonlar dosya dışına erişime açılmış demektir.
