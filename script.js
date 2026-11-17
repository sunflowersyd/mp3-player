const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const currentTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");

const audio = document.getElementById("audio-player");
const progressBar = document.getElementById("progress-bar");

const previousBtn = document.getElementById("previousBtn");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");

previousBtn.textContent = "prev";
nextBtn.textContent = "next";
playBtn.textContent = "play";

const songContainer = document.querySelector('.song-container');

const songs = [
    {
        title: "drop dead",
        artist: "Olivia Rodrigo",
        src: "music/drop dead.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/6/64/Olivia_Rodrigo_-_Drop_Dead.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
    },

    {
        title: "FF",
        artist: "Troye Sivan",
        src: "music/FF.mp3",
        cover: "https://images.genius.com/e75828776091f38a94a2ab46346cdc33.1000x1000x1.png"

    },

    {
        title: "One",
        artist: "RAIN",
        src: "music/one.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273801f6a567b96d3cff77af6b6"
    },

    {
        title: "Agora Hills",
        artist: "Doja Cat",
        src: "music/agora hills.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/0/0b/Doja_Cat_-_Scarlet.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"

    },

{
        title: "party 4 u",
        artist: "Charli XCX",
        src: "music/party 4 u.mp3",
        cover: "https://thumb.wikimedia.org/wikipedia/en/thumb/6/62/Charli_XCX_-_Party_4_U.png/250px-Charli_XCX_-_Party_4_U.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"

    },

    {
        title: "Lovesick",
        artist: "Laufey",
        src: "music/lovesick.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b27374c732f8aa0e0ccbb3d17d96"

    },

    {
        title: "Diet Pepsi",
        artist: "Addison Rae",
        src: "music/diet pepsi.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a3/Addison_Rae_-_Diet_Pepsi.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"

    },

    {
        title: "Love Song",
        artist: "RAIN",
        src: "music/love song RAIN.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273801f6a567b96d3cff77af6b6"

    },

    {
        title: "Closer",
        artist: "Nine Inch Nails",
        src: "music/closer.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJWA8ZJEoF3rI88hXYK0-3jr9Fy_YKQqW7Hl1jeYA0UZ9Yp9hoYYkT7A&s=10"

    },

    {
        title: "Touch Me Like A Gangster",
        artist: "Jessie Murph",
        src: "music/touch me like a gangster.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273ef8c5a1f36f54cc29d0826fb"

    },

    {
        title: "Kiss",
        artist: "Prince & The Revolution",
        src: "music/kiss.mp3",
        cover: "https://cdn-images.dzcdn.net/images/cover/6488e3e2ba3121f6e5c0b06a82c4effe/1900x1900-000000-80-0-0.jpg"

    },

    {
        title: "Just The Way You Are",
        artist: "Bruno Mars",
        src: "music/just the way you are.mp3",
        cover: "https://i1.sndcdn.com/artworks-000082730026-faa23k-t500x500.jpg"

    },

    {
        title: "You Rock My World",
        artist: "Michael Jackson",
        src: "music/you rock my world.mp3",
        cover: "https://i1.sndcdn.com/artworks-lUtNcv9ugPF5-0-t500x500.jpg"

    },

    {
        title: "Your Love Is My Drug",
        artist: "Ke$ha",
        src: "music/your love is my drug.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a1/Kesha_-_Your_Love_Is_My_Drug.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"

    },

    {
        title: "Distraction",
        artist: "Kehlani",
        src: "music/distraction.mp3",
        cover: "https://i1.sndcdn.com/artworks-y09DOfczNYI8-0-t500x500.jpg"

    },

    {
        title: "Your Love",
        artist: "Nicki Minaj",
        src: "music/your love.mp3",
        cover: "https://i1.sndcdn.com/artworks-NXY5HZNNgfyn-0-t500x500.jpg"

    },

    {
        title: "Love Talk",
        artist: "WayV",
        src: "music/love talk.mp3",
        cover: "https://cdn-images.dzcdn.net/images/cover/a8531d6364a22dec8a43df4f73592a2b/0x1900-000000-80-0-0.jpg"

    },

    {
        title: "Fetish (ft. Gucci Mane)",
        artist: "Selena Gomez",
        src: "music/fetish.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/7/7f/Fetish_%28featuring_Gucci_Mane%29_%28Official_Single_Cover%29_by_Selena_Gomez.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"

    },

    {
        title: "Love Me Harder",
        artist: "Ariana Grande & The Weeknd",
        src: "music/love me harder.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273deec12a28d1e336c5052e9aa"

    },

    {
        title: "Beautiful Soul",
        artist: "Jesse McCartney",
        src: "music/beautiful soul.mp3",
        cover: "https://thumb.wikimedia.org/wikipedia/en/thumb/9/99/Beautiful_Soul.jpg/250px-Beautiful_Soul.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"

    },

    {
        title: "Crave",
        artist: "Nuno Bettencourt",
        src: "music/crave.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273a0621af22f49973858b14ddc"

    },

    {
        title: "love song",
        artist: "YUNGBLUD",
        src: "music/love song YB.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/0/08/Yungblud_-_Weird%21.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"

    },

    {
        title: "Touch My Body",
        artist: "Mariah Carey",
        src: "music/touch my body.mp3",
        cover: "https://i1.sndcdn.com/artworks-T5XtEEcinyszDhkz-DxEcjA-t500x500.jpg"

    },

    {
        title: "I Love You 3000 II",
        artist: "Stephanie Poetri & Jackson Wang",
        src: "music/i love you 3000 ii.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5OCyjb7GSXyuqqKgkiNKECnknja2y6kDiX7HiEfgdjVist9faLLWY2g&s=10"

    },

    {
        title: "Promise",
        artist: "Ciara",
        src: "music/promise.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b2738136c2c2762cba40cb51f9aa"

    },

    {
        title: "Training Wheels",
        artist: "Melanie Martinez",
        src: "music/training wheels.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/9/93/Melanie_Martinez_-_Cry_Baby_%28album%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"

    },

    {
        title: "Age Ain't Nothing But A Number",
        artist: "Aaliyah",
        src: "music/age aint nothing but a number.mp3"
    },

    {
        title: "did i tell u that i miss u",
        artist: "adore",
        src: "music/did i tell u that i miss u.mp3"
    },

    {
        title: "Girl You Know It's True",
        artist: "Milli Vanilli",
        src: "music/girl you know its true.mp3"
    },

    {
        title: "I Miss You",
        artist: "blink-182",
        src: "music/i miss you.mp3"
    },

    {
        title: "Mirotic",
        artist: "TVXQ",
        src: "music/mirotic.mp3"
    },

    {
        title: "Mrs. Right",
        artist: "Mindless Behavior",
        src: "music/mrs right.mp3"
    },

    {
        title: "One Of The Girls",
        artist: "The Weeknd, Lily Rose Depp, JENNIE",
        src: "music/one of the girls.mp3"
    },

    {
        title: "Pass Me By",
        artist: "R5",
        src: "music/pass me by.mp3"
    },

    {
        title: "PILLOWTALK",
        artist: "ZAYN",
        src: "music/pillowtalk.mp3"
    },

    {
        title: "strawberry lipstick",
        artist: "YUNGBLUD",
        src: "music/strawberry lipstick.mp3"
    },

    {
        title: "The Drug In Me Is You",
        artist: "Falling In Reverse",
        src: "music/the drug in me is you.mp3"
    },

    {
        title: "They Don't Know",
        artist: "Jon B.",
        src: "music/they dont know.mp3"
    },

    {
        title: "Until The End Of Time",
        artist: "Justin Timberlake",
        src: "music/until the end of time.mp3"
    },

    {
        title: "While We're Young",
        artist: "Jhené Aiko",
        src: "music/while were young.mp3"
    },

    {
        title: "Worldwide",
        artist: "Big Time Rush",
        src: "music/worldwide.mp3"
    }

];

let currentSongIndex = 0;

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

let hasLoadedSong = false;

function loadSong(index) {
    currentSongIndex = (index + songs.length) % songs.length;

    const song = songs[currentSongIndex];

    if (hasLoadedSong) {
        songContainer.classList.add("changing");
    }

    audio.pause();
    audio.src = song.src;
    audio.load();

    progressBar.value = 0;
    currentTime.textContent = '0:00';
    totalTime.textContent = '0:00';

    playBtn.textContent = "play";

    function updateDisplay() {
        songName.textContent = song.title;
        artistName.textContent = song.artist;

        songContainer.classList.remove("changing");
        songContainer.classList.add("show");

    }

    if (hasLoadedSong) {
        setTimeout(updateDisplay, 300);
    } else {
        updateDisplay();
        hasLoadedSong = true;
    }
}

function updatePlayButton() {
    if (audio.paused) {
        playBtn.textContent = "play";
    } else {
        playBtn.textContent = "pause";
    }
}

async function playSong() {
    try {
        await audio.play();
        updatePlayButton();
    } catch (error) {
        console.error("Unable to play audio:", error);
    }
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        audio.pause();
        updatePlayButton();
    }
});

nextBtn.addEventListener("click", () => {
    loadSong(currentSongIndex + 1);
    playSong();
});

previousBtn.addEventListener("click", () => {
    loadSong(currentSongIndex - 1);
    playSong();
});

function updateProgress() {
    const current = audio.currentTime;
    const duration = audio.duration || 0;

    let percent = 0;

    if (duration > 0) {
        percent = (current / duration) * 100;
    }

    progressBar.value = percent;
    currentTime.textContent = formatTime(current);
    totalTime.textContent = formatTime(duration);
}

audio.addEventListener("timeupdate", () => {
    updateProgress();
});

audio.addEventListener("loadedmetadata", () => {
    updateProgress();
});

progressBar.addEventListener("input", () => {
    if (!audio.duration) {
        return;
    }

    const seekTime = (Number(progressBar.value) / 100) * audio.duration;
    audio.currentTime = seekTime;
    updateProgress();
});

audio.addEventListener("play", () => {
    updatePlayButton();
});

audio.addEventListener("pause", () => {
    updatePlayButton();
});

audio.addEventListener("ended", () => {
    loadSong(currentSongIndex + 1);
    playSong();
});

loadSong(0);