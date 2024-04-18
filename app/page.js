import { getDocuments } from "@/lib/doc";

const page = () => {
  getDocuments();
  return <div>page</div>;
};

export default page;
