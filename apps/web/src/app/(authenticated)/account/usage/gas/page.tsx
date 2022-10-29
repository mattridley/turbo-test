import { GetGasMeterReadings } from "octopus";

export default async function AccountUsage() {
  const consumption = await GetGasMeterReadings();

  return (
    <>
      <h1>Usage</h1>
      <pre
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(consumption, null, 4)
            .replace(/\n/, "<br />")
            .replace(/ /, "&nbsp;"),
        }}
      />
    </>
  );
}
