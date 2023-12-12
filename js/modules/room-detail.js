import { loadRoomById } from "../api/room.js";

const loadRoomDetail = async () => {
    const query = window.location.search;
    const urlSearchParams = new URLSearchParams(query);

    const id = urlSearchParams.get("id");
    const response = await loadRoomById(id);

    document.getElementById("room-name").innerText = response.data.name;
    document.getElementById("room-description").innerText = response.data.description;
    document.getElementById("area").innerText = response.data.area + " m²";
    document.getElementById("guest").innerText = response.data.guest + " Guests";
    document.getElementById("bed").innerText = response.data.bed + " King Bed";
    document.getElementById("balcony").innerText = response.data.balcony;
    document.getElementById("room-image").setAttribute("src", response.data.image);
}

loadRoomDetail();