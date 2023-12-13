const baseApiUrl =
    window.location.hostname === "localhost"
        ? "http://localhost:3666"
        : "https://be-2-jakarta-15-production.up.railway.app";

const apiRoutes = {
    rooms: `${baseApiUrl}/rooms`,
    roomsId: (id) => `${baseApiUrl}/rooms/${id}`,
};

export default apiRoutes;
