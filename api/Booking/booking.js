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

async function getReview(token = "") {
  var res = await apollo.query(
    `
    query {
      bookings{
        id
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
    }`,
    token
  );
  return res;
}

module.exports = {
  AddBooking: AddBooking,
  getReview: getReview,
};