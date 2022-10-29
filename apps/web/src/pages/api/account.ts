import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default function SetAccountDetails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    oeApiKey,
    oeMpan,
    oeElectricitySerialNumber,
    oeMprn,
    oeGasSerialNumber,
  } = req.body;
  const cookies = new Cookies(req, res);

  cookies.set("oeApiKey", oeApiKey);
  cookies.set("oeMpan", oeMpan);
  cookies.set("oeElectricitySerialNumber", oeElectricitySerialNumber);
  cookies.set("oeMprn", oeMprn);
  cookies.set("oeGasSerialNumber", oeGasSerialNumber);

  res.redirect("/account");
}
