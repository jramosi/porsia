import Link from "next/link";
function Dashboard() {
  return (
    <h1>
      navbar
      <Link href={"/git"}>Git</Link>
    </h1>
  );
}
export default Dashboard;
