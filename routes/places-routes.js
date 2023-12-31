const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'k1',
        emp_name: 'Ilham maulana',
        emp_nik: '10001',
        location: {
            lat: 40.748447,
            lng: -73.9871516
        },
        emp_address: 'Piayu',
        creator: 'u1'
    }
];

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    res.json({place});
});

module.exports = router;