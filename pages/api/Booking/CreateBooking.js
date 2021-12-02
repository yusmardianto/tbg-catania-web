import Booking from "api/Booking/booking";

export default async function handler(req, resp) {
    var input = req.body;
    var res = await Booking.AddBooking(input);
    resp.status(200).json(res);
}