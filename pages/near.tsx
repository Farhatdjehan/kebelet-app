import DashboardLayout from "../src/components/DashboardLayout";
import NearPlace from "../src/components/Near/NearPlace";
import TopMenu from "../src/components/TopMenu/TopMenu";

export default function Near() {
  return (
    <DashboardLayout pageTitle="Near" fullMode={false}>
      <TopMenu title="Terdekat" subtitle="Lorem ipsum" />
      {[...Array(5)].map((value, index) => {
        return <NearPlace />;
      })}
    </DashboardLayout>
  );
}
