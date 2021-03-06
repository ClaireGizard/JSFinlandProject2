const API_ENDPOINT = "http://localhost:3000";

if (localStorage.getItem("save_artists"))
{
    var artists = [];
    var save_artists = JSON.parse(localStorage.getItem("save_artists"));
    for (item in save_artists) {
        artists.push(JSON.parse(save_artists[item]));
    }
}
else {
var artists = [
    {
     "id_display" : "jonny",
     "id_spotify": "2HALYSe657tNJ1iKVXP2xA",
     "name" : "Jonny Halliday",
    },
    {
        "id_display" : "Dundas", 
        "id_spotify" : "3jJbG1PmQVyZvdbaSh1PgU",
        "name" : "Dundas",
    },
    {
        "id_display" : "Altj",
        "id_spotify" : "3XHO7cRUPCLOr6jwp8vsx5",
        "name" : "Alt-j",
    },
    {
        "id_display" : "Kygo", 
        "id_spotify" : "23fqKkggKUBHNkbKtXEls4",
        "name" : "Kygo",
    },
    {
        "id_display" : "Coldplay",
        "id_spotify" : "4gzpq5DPGxSnKTe4SA8HAU",
        "name" : "Coldplay",
    },
]

var save_artists = []
for (item in artists) {
    save_artists.push(JSON.stringify(artists[item]))
}

localStorage.setItem("save_artists", JSON.stringify(save_artists));
}
