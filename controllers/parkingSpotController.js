let ParkingSpotService = require('./../services/ParkingSpotService');
let models = require("../models"),
    ParkingSpot = models.parkingSpot;

let parkingSpotService = new ParkingSpotService({ ParkingSpot });

const create = async (req, res) => {
    try {
        if (req.user.role !== 'User') {
            const parkingSpot = await parkingSpotService.createSpot(req.body);

            return res.json({
                ...parkingSpot,
                status: true
            });
        } else {
            return res.send('Unauthorized');
        }
    } catch (err) {
        return res.json({
            error: err.message,
            status: false
        });
    }
};

const listAll = async (req, res) => {
    try {
        if (req.user.role !== 'User') {
            const parkingSpots = await parkingSpotService.listAll();

            return res.json({
                ...parkingSpots,
                status: true
            });
        } else {
            return res.send('Unauthorized');
        }
    } catch (err) {
        return res.json({
            error: err.message,
            status: false
        });
    }
};

module.exports = {
    create,
    listAll
};
