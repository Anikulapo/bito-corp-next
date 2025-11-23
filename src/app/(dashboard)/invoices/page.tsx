import Overdue from "@/components/Overdue";
import GetPaid from "@/components/GetPaid";
import InvoiceDashboard from "@/components/InvoiceDashboard";

const page = () => {
  return (
    <section className="px-[2%]">
      <div className="flex pt-6 w-full gap-6">
        <Overdue /> <GetPaid />
      </div>
      <div className="pt-6">
        <InvoiceDashboard />
      </div>
    </section>
  );
};

export default page;
