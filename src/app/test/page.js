import CompanyAsAgentForm from "@/components/registerAgentForm/companyAsAgent";
import AgentRegisterForm from "@/components/registerAgentForm/registerAgentForm";

function Page() {
  return (
    <div>
      {/* as individual agent */}
      {/* <AgentRegisterForm /> */}
      {/* as company agent  */}
      <CompanyAsAgentForm />
    </div>
  );
}

export default Page;
