import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GetGasMeterReadings() {
  const apiKey = cookies().get("oeApiKey");
  const mprn = cookies().get("oeMprn");
  const serialNumber = cookies().get("oeGasSerialNumber");

  if (!apiKey || !mprn || !serialNumber) {
    redirect("/account");
  } else {
    const response = await fetch(
      `https://api.octopus.energy/v1/gas-meter-points/${mprn}/meters/${serialNumber}/consumption/`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${apiKey}:`, "utf-8").toString(
            "base64"
          )}`,
        },
      }
    );
    return response.json();
  }
}
