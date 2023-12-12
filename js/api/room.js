import apiRoutes from "../constants/apiRoutes.js";

export const loadRooms = async () => {
    const response = await fetch(apiRoutes.rooms, {
        method: "GET",
    });

    const responseJson = await response.json();

    if (response.status === 401) {
        alert("Invalid Session");
        window.location.href = "./";
    } 
    return responseJson;
};

export const loadRoomById = async (id) => {
    const response = await fetch(apiRoutes.roomsId(id), {
        method: "GET",
    });
    const responseJson = await response.json();

    if (response.status === 401) {
        alert("Invalid Season");
        window.location.href = "./";
    }

    return responseJson;
}