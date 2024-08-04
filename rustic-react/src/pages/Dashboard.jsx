import { HiOutlineHome } from "react-icons/hi2";

import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal" $marginTop="6rem">
        <div>
          <Heading as="h1">
            <HiOutlineHome />
            Dashboard
          </Heading>
        </div>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
