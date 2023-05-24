import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { withSSRAuth } from "../../utils/withSSRAuth";
import { api } from "../services/apiClient";
import { setupAPIClient } from "../services/api";
import { useCan } from "../hooks/useCan";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    roles: ["administrator", "editor"],
  });

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

    <button onClick={signOut}>Sign Out</button>

      { userCanSeeMetrics && <div>Métricas</div> }
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  console.log("response", response);

  return {
    props: {},
  };
});
