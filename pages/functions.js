// All the jquery functions used in this app
const artifactTypes = {
    SOUND: 0,
    VIDEO: 1,
}

const songs = {
    EARLY_BIRD: 0,
    INSTAGRAM: 1,
    SYNTHETIC_COMPANY: 2,
}

earlyBirdArtifacts = [
    {
        "type" : artifactTypes.SOUND,
        "date" : "4/20/69",
        "description" : "An early demo.",
        "filename" : "../sounds/early_bird/Early_Bird_Demo_2.mp3",
    },
    {
        "type" : artifactTypes.VIDEO,
        "date" : "4/21/69",
        "description" : "A very cool video.",
        "filename" : "../videos/early_bird/sample_video.mp4",
    },
]

// takes in song variable (from songs dict)
function loadArtifacts(song) {
    var artifacts = []
    if (song === songs.EARLY_BIRD) {
        artifacts = earlyBirdArtifacts
    } else {
        alert('what')
    }

    let i = 0;
    let elements = [];
    for (const artifact of artifacts) {
        var heading = $('<h3></h3>').text(artifact.date);
        var desc = $('<p></p>').text(artifact.description);
        var file = "";
        if (artifact.type === artifactTypes.SOUND) {
            file = "<audio controls><source src=\"" + artifact.filename + "\" type=\"audio/mpeg\"></audio>";
        } else {
            file = "<video controls><source src=\"" + artifact.filename + "\" type=\"video/mp4\"></video>";
        }

        $("#artifact-container").append("<div>").append(heading, desc, file);
    }
}