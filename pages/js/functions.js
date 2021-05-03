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

// artifacts for the songs
const earlyBirdArtifacts = [
    {
        "type": artifactTypes.SOUND,
        "description": "Seemingly unrelated, a year-old loop pedal session by Dom includes the \"somebody will see\" melody within the bridge.",
        "filename": "Sneeze.mp3",
        "date": "7-19-20",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A jam session riff, named \"The Skaggs\". This piece of music ended up becoming the prechorus for the song.",
        "filename": "The Skaggs.mp3",
        "date": "2-9-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first iteration of the base riff for Early Bird, born from another jam session. You can hear us pointing out how the riff stood out near the end of the recording.",
        "filename": "Early Bird Studio Version 1.mp3",
        "date": "2-15-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The beginning of the bridge, from a loop pedal session at Dom's house.",
        "filename": "Early Bird Bridge Melody.mp3",
        "date": "2-27-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The opening riff, played in another loop pedal session.",
        "filename": "Early Bird Riff.mp3",
        "date": "3-10-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Part of the chorus, developed in Dom's car.",
        "filename": "Who Am I.mp3",
        "date": "3-10-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Part 1 of the verse melody, improvised by Ben in the O St Studio.",
        "filename": "Early Bird Ben Melody 1.mp3",
        "date": "3-16-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Part 2 of the verse melody, from minutes later.",
        "filename": "Early Bird Ben Melody 2.mp3",
        "date": "3-16-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first signs of a more complete song, including the Skaggs guitar line but missing a chorus, sung by Ben in the O St Studio",
        "filename": "Early Bird Studio 2 (w- vocals).mp3",
        "date": "3-16-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first interpolation of the year-old session from above into the song, as part of the bridge melodies.",
        "filename": "Riff 1 and Early Bird.mp3",
        "date": "3-17-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The main chorus melody, from another Dom Car Session.",
        "filename": "Early Bird Chorus.mp3",
        "date": "3-17-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A more polished, finalized version of the chorus, combining previous melodic ideas.",
        "filename": "Early Bird potential chorus line!.mp3",
        "date": "3-18-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Finally, an instrumental demo of the entire song structure, recorded in Dom's basement.",
        "filename": "Early Bird Instrumental Demo.mp3",
        "date": "3-18-21",
    },
    {
        "type" : artifactTypes.VIDEO,
        "description" : "Dom recording some of the guitar parts with great enthusiasm.",
        "filename" : "early bird gtr.m4v",
        "date": "3-21-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A demo of the song with lyrics, multiple guitar tracks, and a good old Logic Drummer, recorded for a MUSC 383 project.",
        "filename": "Early Bird Demo 2.mp3",
        "date": "3-22-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Further along in the process. The tempo is slowed from 107 bpm to 100 bpm, and more production is added.",
        "filename": "early bird 100 with drummer.mp3",
        "date": "4-23-21",
    }
]

const instagramArtifacts = [
    {
        "type": artifactTypes.VIDEO,
        "description": "Ben's original Instagram reel from which this song was derived.",
        "filename": "yeet.mov",
        "date": "10-18-20",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The verse melody, originally pitched as a chorus, birthed from a drive in Dom's car.",
        "filename": "Instagram Verse Melody.mp3",
        "date": "2-11-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A melody written by Ben, which would end up as the inspiration for the prechorus.",
        "filename": "Instagram Ben's Melody.mp3",
        "date": "2-15-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The first idea for a verse variation on Ben's original chords.",
        "filename": "Instagram Verse Idea.mp3",
        "date": "2-20-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "The evolution of the previous idea into what it is in the final song.",
        "filename": "Instagram Verse Chords.mp3",
        "date": "2-20-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "An O St Studio Session resulting in new melodies for the chorus and prechorus written by Ben.",
        "filename": "Instagram w- Bridge.mp3",
        "date": "3-23-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Solo work by Ben to solidify the song's structure.",
        "filename": "3.26 Ben Instagram Melody.mp3",
        "date": "3-26-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A part Dom came up with to add to the chorus. This eventually was reduced to a background acoustic lick.",
        "filename": "Instagram Duhnuh.mp3",
        "date": "4-13-21",
    },
    {
        "type": artifactTypes.VIDEO,
        "description": "The aforementioned guitar lick performed by Dom in Ben's basement.",
        "filename": "duhnuh.m4v",
        "date": "4-16-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A full chorus idea by Dom as a variation of Ben's session above.",
        "filename": "Instagram Chorus Idea.mp3",
        "date": "4-15-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "An idea for the instrumental breakdown after the intro, dictated by Dom on his way to a bar.",
        "filename": "Instagram Note.mp3",
        "date": "4-13-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A humorous demo of the song, recorded with lyrics involving a Farklezaar concert at The Bay skate park which, unbeknownst to either of them, Ben and Dom both attended at the same time.",
        "filename": "the bay FINAL.mp3",
        "date": "4-16-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "An initial mix of the song with real lyrics, as well as drums by Jonah Payne.",
        "filename": "Instagrammix 1.mp3",
        "date": "4-23-21",
    },
]

const syntheticCompanyArtifacts = [
    {
        "type": artifactTypes.SOUND,
        "description": "An early idea of Ben's, recorded in the Westbrook Music Building.",
        "filename": "Westbrook Music Building 4.mp3",
        "date": "2-10-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Ben played a series of chords that sounded like a John Mayer song to Dom, so he improvised a John Mayer-esque melody over them. This eventually became the melody for the chorus of Synthetic Company.",
        "filename": "John Mayer.mp3",
        "date": "3-23-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "A 4/4 version of the song, attempted and thrown out.",
        "filename": "Case of You 4-4.mp3",
        "date": "3-23-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Guitar accompaniment for the chorus (Dom's feeble mind couldn't figure out the chords for the verse).",
        "filename": "Case of You Guitar.mp3",
        "date": "3-31-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Another guitar recording of the chorus; an attempt to inspire melodies.",
        "filename": "Case of You Loop.mp3",
        "date": "3-31-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom realizes the John Mayer melody fits Synthetic's chorus while making popcorn.",
        "filename": "Coy John Mayer.mp3",
        "date": "4-1-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom makes a suggestion to extend the verse's phrases while riding the bus.",
        "filename": "Coy on da bus.mp3",
        "date": "4-8-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom and Ben attempt to work out the song in an O St Studio session.",
        "filename": "Coy Session 1 4-8-21.mp3",
        "date": "4-8-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Ben shows Dom some lovely chords he would like to incorporate into a song. These eventually become the bridge of Synthetic Company.",
        "filename": "Luv (sic) chords.mp3",
        "date": "4-16-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "After a long session of trying to change keys into the bridge, Dom and Ben decide that the chords are still beautiful in the same key as the chorus and insert them in as a bridge between the two final choruses.",
        "filename": "Coy Bridge.mp3",
        "date": "4-17-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom feels that post-bridge the song is begging for a breakdown using the melody Ben has played on top of the chorus since the song's inception. He records this straining voice memo while in line at a Taco Bell drive-thru.",
        "filename": "Coy post-bridge breakdown.mp3",
        "date": "4-17-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Dom and Ben, after a day of writing lyrics in the backyard of Ben's parents' house, perform an acoustic version of the breakdown and final chorus of the song.",
        "filename": "Synthetic Company Final Chorus.mp3",
        "date": "4-18-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "Ben puts it all together in a piano MIDI file.",
        "filename": "case of u full piano.mp3",
        "date": "4-19-21",
    },
    {
        "type": artifactTypes.VIDEO,
        "description": "We record Jonah Payne playing drums in the Bat Cave.",
        "filename": "JonahDrums.m4v",
        "date": "4-20-21",
    },
    {
        "type": artifactTypes.SOUND,
        "description": "An initial mix of the full song. Done in Ben's basement on a Kickstart-fueled night/morning.",
        "filename": "synthetic company mix 1.mp3",
        "date": "4-21-21",
    },
] 

// takes in song enum (from songs dict)
function loadArtifacts(song) {
    var artifacts = []
    if (song === songs.EARLY_BIRD) {
        artifacts = earlyBirdArtifacts;
        filepath = "early_bird/";
    } else if (song === songs.INSTAGRAM) {
        artifacts = instagramArtifacts;
        filepath = "instagram/";
    } else if (song === songs.SYNTHETIC_COMPANY) {
        artifacts = syntheticCompanyArtifacts;
        filepath = "synthetic_company/";
    } else {
        alert('what')
    }

    let i = 0;
    for (const artifact of artifacts) {
        var heading = "<h3><span class=\"date\">" + artifact.date + "</span></h3>";
        var desc = $('<p></p>').text(artifact.description);
        var file = "";
        if (artifact.type === artifactTypes.SOUND) {
            file = "<audio controls><source src=\"../sounds/" + filepath + artifact.filename + "\" type=\"audio/mpeg\"></audio>";
        } else {
            file = "<video controls><source src=\"../videos/" + filepath + artifact.filename + "\" type=\"video/mp4\"></video>";
        }

        // changes alignment based on order on the page
        var className = i % 2 === 0 ? "artifact-left" : "artifact-right";
        var artifactElement = $("<div class=\"fade " + className + "\"></div>").append(heading, desc, file);

        $("#artifact-container").append(artifactElement);

        i++;
    }
}

// fade on scroll
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + ($(this).outerHeight() * 0.75);
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });