import { json, redirect } from "@remix-run/node";
import { getFirstCustomer } from "~/models/customer.server";

export async function loader() {
  const firstCustomer = await getFirstCustomer();
  if (!firstCustomer) {
    return json({});
  }
  return redirect(`/customers/${firstCustomer.id}`);
}

export default function InvoiceIndex() {
  return <div className="p-10">You don't have any customers 😭</div>;
}
