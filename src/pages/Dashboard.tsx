import ClientDashboard from "@/components/ClientDashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 py-20">
      <div className="container mx-auto px-4">
        <ClientDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
