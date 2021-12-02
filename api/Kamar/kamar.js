import apollo from "../../lib/apollo.js";

async function GetKamar(token = "") {
    var res = await apollo.query(
        `
            query {
                jenisKamars {
                    id
                    namaKamar
                    hargaKamar
                    jumlahKamar
                    imgKamar {
                        url
                    }
                    fasilitas_kamars {
                        namaFasilitas
                        hargaFasilitas
                    }
                }
            }
        `,
        token
    );
    return res;
}

async function GetDetailKamar(id, token="") {
	var res = await apollo.query(
        `
            query($input: ID!) {
                jenisKamars(where:{id:$input}) {
                    id
                    namaKamar
                    hargaKamar
                    jumlahKamar
                    imgKamar {
                        url
                    }
                    fasilitas_kamars {
                        namaFasilitas
                        hargaFasilitas
                    }
                }
            }
      `,
      token, 
      {	
        "input": id
      }
	);
	return res;
}


module.exports = {

    GetKamar: GetKamar,

    //detail
    GetDetailKamar: GetDetailKamar,
};
