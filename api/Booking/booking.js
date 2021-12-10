import apollo from "../../lib/apollo.js";

async function AddBooking(content, token = "") {
  var res = await apollo.mutation(
    `
      mutation($input: BookingInput!) {
        createBooking(input: { data: $input }) {
          booking {
            id
          }
        }
      }
    `,
    token,
    {
      input: content,
    }
  );
  return res;
}

// async function getReview(token = "") {
//   var res = await apollo.query(
//     `
//     query {
//       bookings{
//         id
//         namaPemesan
//         emailPemesan
//         teleponPemesan
//         pemesan
//         checkIn
//         checkOut
//         jumlahPengunjung
//         namaKamar
//         requestKamar
//         hargaKamar
//         ppnKamar
//         hargaTotal
//         catatan
//       }
//     }`,
//     token
//   );
//   return res;
// }

async function getReview(transactionID, token="") {
	var res = await apollo.query(
        `
            query($input: ID!) {
              bookings(where:{transactionID:$input}) {
                id
                transactionID
                namaPemesan
                emailPemesan
                teleponPemesan
                pemesan
                checkIn
                checkOut
                jumlahPengunjung
                namaKamar
                requestKamar
                hargaKamar
                ppnKamar
                hargaTotal
                catatan
                }
            }
      `,
      token, 
      {	
        "input": transactionID
      }
	);
	return res;
}

async function getReviewPayment(transactionID, token="") {
	var res = await apollo.query(
        `
            query($input: ID!) {
              booking(transactionID:$input) {
                id
                transactionID
                namaPemesan
                emailPemesan
                teleponPemesan
                pemesan
                checkIn
                checkOut
                jumlahPengunjung
                namaKamar
                requestKamar
                hargaKamar
                ppnKamar
                hargaTotal
                catatan
                }
            }
      `,
      token, 
      {	
        "input": transactionID
      }
	);
	return res;
}

module.exports = {
  getReviewPayment: getReviewPayment,
  AddBooking: AddBooking,
  getReview: getReview,
};