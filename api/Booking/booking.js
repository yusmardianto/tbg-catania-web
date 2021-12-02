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

module.exports = {
    AddBooking: AddBooking,
};