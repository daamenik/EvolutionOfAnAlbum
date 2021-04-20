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

const earlyBirdArtifacts = [
    {
        "type": artifactTypes.SOUND,
        "description": "Seemingly unrelated, a year-old loop pedal session by Dom includes the \"somebody will see\" melody within the bridge.",
        "filename": "Sneeze.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first iteration of Early Bird, born from an early studio jam session. You can hear us pointing out how the riff stood out near the end of the recording.",
        "filename": "Early Bird Studio Version 1.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Another jam session riff, named \"The Skaggs\". This piece of music ended up becoming the prechorus for the song.",
        "filename": "The Skaggs.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The beginning of the bridge, from a loop pedal session at Dom's house.",
        "filename": "Early Bird Bridge Melody.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Part 1 of the verse melody, improvised by Ben in the O St Studio.",
        "filename": "Early Bird Ben Melody 1.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Part 2 of the verse melody, from minutes later.",
        "filename": "Early Bird Ben Melody 2.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The opening riff, played in another loop pedal session.",
        "filename": "Early Bird Riff.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Part of the chorus, developed in Dom's car.",
        "filename": "Who Am I.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first signs of a more complete song, including the Skaggs guitar line but missing a chorus, sung by Ben in the O St Studio",
        "filename": "Early Bird Studio 2 (w- vocals).mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first interpolation of the year-old session from above into the song, as part of the bridge melodies.",
        "filename": "Riff 1 and Early Bird.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The main chorus melody, from another Dom Car Session.",
        "filename": "Early Bird Chorus.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A more polished, finalized version of the chorus, combining previous melodic ideas.",
        "filename": "Early Bird potential chorus line!.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Finally, an instrumental demo of the entire song structure, recorded in Dom's basement.",
        "filename": "Early Bird Instrumental Demo.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A demo of the song with lyrics, multiple guitar tracks, and a good old Logic Drummer, recorded for a MUSC 383 project.",
        "filename": "Early Bird Demo 2.mp3",
    },
    {
        "type" : artifactTypes.VIDEO,
        // "date" : "4/21/69",
        "description" : "A very cool video.",
        "filename" : "../videos/early_bird/sample_video.mp4",
    },
]

const instagramArtifacts = [
    {
        "type": artifactTypes.SOUND,
        "description": "The verse melody, originally pitched as a chorus, birthed from a drive in Dom's car.",
        "filename": "Instagram Verse Melody.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A melody written by Ben, which would end up as the inspiration for the prechorus.",
        "filename": "Instagram Ben's Melody.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first idea for a verse variation on Ben's original chords.",
        "filename": "Instagram Verse Idea.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The evolution of the previous idea into what it is in the final song.",
        "filename": "Instagram Verse Chords.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "An O St Studio Session resulting in new melodies for the chorus and prechorus written by Ben.",
        "filename": "Instagram w- Bridge.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Solo work by Ben to solidify the song's structure.",
        "filename": "3.26 Ben Instagram Melody.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A full chorus idea by Dom as a variation of Ben's session above.",
        "filename": "Instagram Chorus Idea.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A humorous demo of the song, recorded with lyrics involving a Farklezaar concert at The Bay skate park which, unbeknownst to either of them, Ben and Dom both attended at the same time.",
        "filename": "the bay FINAL.mp3",
    },
]

const syntheticCompanyArtifacts = [
    {
        "type": artifactTypes.SOUND,
        "description": "An early idea of Ben's, recorded in the Westbrook Music Building.",
        "filename": "Westbrook Music Building 4.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A 4/4 version of the song, attempted and thrown out.",
        "filename": "Case of You 4-4.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Guitar accompaniment for the chorus (Dom's feeble mind couldn't figure out the chords for the verse).",
        "filename": "Case of You Guitar.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Another guitar recording of the chorus; an attempt to inspire melodies.",
        "filename": "Case of You Loop.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Ben played a series of chords that sounded like a John Mayer song to Dom, so he improvised a John Mayer-esque melody over them. This eventually became the melody for the chorus of Synthetic Company.",
        "filename": "John Mayer.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom realizes the John Mayer melody fits Synthetic's chorus while making popcorn.",
        "filename": "Coy John Mayer.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom makes a suggestion to extend the verse's phrases while riding the bus.",
        "filename": "Coy on da bus.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom and Ben attempt to work out the song in an O St Studio session.",
        "filename": "Coy Session 1 4-8-21.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Ben shows Dom some lovely chords he would like to incorporate into a song. These eventually become the bridge of Synthetic Company.",
        "filename": "Luv (sic) chords.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "After a long session of trying to change keys into the bridge, Dom and Ben decide that the chords are still beautiful in the same key as the chorus and insert them in as a bridge between the two final choruses.",
        "filename": "Coy Bridge.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom feels that post-bridge the song is begging for a breakdown using the melody Ben has played on top of the chorus since the song's inception. He records this straining voice memo while in line at a Taco Bell drive-thru.",
        "filename": "Coy post-bridge breakdown.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom and Ben, after a day of writing lyrics in the backyard of Ben's parents' house, perform an acoustic version of the breakdown and final chorus of the song.",
        "filename": "Synthetic Company Final Chorus.mp3",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Ben puts it all together in a piano MIDI file.",
        "filename": "case of u full piano.mp3",
    },
] 

// takes in song variable (from songs dict)
function loadArtifacts(song) {
    var artifacts = []
    if (song === songs.EARLY_BIRD) {
        artifacts = earlyBirdArtifacts;
        filepath = "../sounds/early_bird/";
    } else if (song === songs.INSTAGRAM) {
        artifacts = instagramArtifacts;
        filepath = "../sounds/instagram/";
    } else if (song === songs.SYNTHETIC_COMPANY) {
        artifacts = syntheticCompanyArtifacts;
        filepath = "../sounds/synthetic_company/";
    } else {
        alert('what')
    }

    for (const artifact of artifacts) {
        // var heading = $('<h3></h3>').text(artifact.date);
        var desc = $('<p></p>').text(artifact.description);
        var file = "";
        if (artifact.type === artifactTypes.SOUND) {
            file = "<audio controls><source src=\"" + filepath + artifact.filename + "\" type=\"audio/mpeg\"></audio>";
        } else {
            file = "<video controls><source src=\"" + artifact.filename + "\" type=\"video/mp4\"></video>";
        }

        // TODO: change class based on order on the page
        var artifactElement = $("<div></div>").append(desc, file);

        $("#artifact-container").append(artifactElement);
    }
}