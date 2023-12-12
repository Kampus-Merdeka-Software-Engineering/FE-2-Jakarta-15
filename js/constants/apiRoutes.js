const baseApiUrl =
    window.location.hostname === "localhost"
        ? "http://localhost:3666"
        : "PATH_URL_API_RAILWAY";

const apiRoutes = {
    rooms: `${baseApiUrl}/rooms`,
    roomsId: (id) => `${baseApiUrl}/rooms/${id}`,
};

export default apiRoutes;
