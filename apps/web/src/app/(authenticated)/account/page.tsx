import { cookies } from "next/headers";

export default function Account() {
  const apiKey = cookies().get("oeApiKey");
  const mpan = cookies().get("oeMpan");
  const mprn = cookies().get("oeMprn");
  const electricitySerialNumber = cookies().get("oeElectricitySerialNumber");
  const gasSerialNumber = cookies().get("oeGasSerialNumber");

  return (
    <>
      <h1>Account Details</h1>
      <form method="post" action="/api/account" className="flex flex-col">
        API Key
        <input
          type="text"
          name="oeApiKey"
          id="oeApiKey"
          defaultValue={apiKey}
        />
        MPAN
        <input type="text" name="oeMpan" id="oeMpan" defaultValue={mpan} />
        Electricity Serial Number
        <input
          type="text"
          name="oeElectricitySerialNumber"
          id="oeElectricitySerialNumber"
          defaultValue={electricitySerialNumber}
        />
        MPRN
        <input type="text" name="oeMprn" id="oeMprn" defaultValue={mprn} />
        Gas Serial Number
        <input
          type="text"
          name="oeGasSerialNumber"
          id="oeGasSerialNumber"
          defaultValue={gasSerialNumber}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
