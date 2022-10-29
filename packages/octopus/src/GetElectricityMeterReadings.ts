import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GetElectricityMeterReadings() {
  const apiKey = cookies().get("oeApiKey");
  const mpan = cookies().get("oeMpan");
  const serialNumber = cookies().get("oeElectricitySerialNumber");

  if (!apiKey || !mpan || !serialNumber) {
    redirect("/account");
  } else {
    const response = await fetch(
      `https://api.octopus.energy/v1/electricity-meter-points/${mpan}/meters/${serialNumber}/consumption/`,
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
