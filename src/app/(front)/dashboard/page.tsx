"use client";

import { signOut } from "next-auth/react";

const DashboardPage = () => {
  return (
    <div>
      <h1>DashboardPage</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default DashboardPage;
