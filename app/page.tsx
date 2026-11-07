import { getAllFabrics, getFabricTypes } from "@/lib/fabrics";
import { CatalogClient } from "@/components/CatalogClient";

export default async function HomePage() {
  const fabrics = await getAllFabrics();
  const types = await getFabricTypes();

  return <CatalogClient initialFabrics={fabrics} availableTypes={types} />;
}
