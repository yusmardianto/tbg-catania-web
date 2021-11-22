import Transaction from "../../../api/transaction/transaction";

export default async function handler(req, resp) {
    var input = req.body;
    var res = await Transaction.AddToCart(input);
    resp.status(200).json(res);
}