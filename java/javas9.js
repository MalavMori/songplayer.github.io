const songlist = [
    { music: "song", songname: "Gal karke", singer: "Asees Kaur" },
    { music: "song1", songname: "High Rated Gabru", singer: "Guru Randhawa" },
    { music: "song2", songname: "Haan Main Galat", singer: "Arijit Singh, Shashwat Singh" },
    { music: "song3", songname: "Pahadan", singer: "Rajat Nagpal" },
    { music: "song4", songname: "Daily Daily", singer: "Neha Kakkar" },
    { music: "song5", songname: "Jai Jai Shivshankar", singer: "Vishal Dadlani, Benny Dayal" },
    { music: "song6", songname: "Gann Deva", singer: "Divya Kumar" },
    { music: "song7", songname: "Kalla Sohna Nai", singer: "AKHIL" },
    { music: "song8", songname: "prada", singer: "jass manak" },
    { music: "song9", songname: "Backbone", singer: "Harrdy Sandhu" },
    { music: "song10", songname: "Believer", singer: "Imagine Dragons" },
    { music: "song11", songname: "BROWN MUNDE", singer: "AP DHILLON, GURINDER GILL" },
    { music: "song12", songname: "Ishq Ka Raja", singer: "Addy Nagar" },
    { music: "song13", songname: "RABB WANGU", singer: "JASS MANAK" },
    { music: "song14", songname: "KHAAB", singer: "AKHIL" },
    { music: "song15", songname: "Pirates of the Caribbean", singer: "Jack Sparrow BGM" },
    { music: "song16", songname: "Tera Mera Viah", singer: "Jass Manak" },
    { music: "song17", songname: "Yaarr Ni Milyaa", singer: "Hardy Sandhu" },
    { music: "song18", songname: "Yummy", singer: "Justin Bieber" },
    { music: "song19", songname: "Jatti Da Crush", singer: "Kay Vee Singh" },
    { music: "song20", songname: "Skechers", singer: "DripReport" },
    { music: "song21", songname: "Brown Rang", singer: "Yo Yo Honey Singh" },
    { music: "song22", songname: "Lion Roar", singer: "ALEX, RUS" },
    { music: "song23", songname: "Kamaal", singer: "Badshah,Amit" },
    { music: "song24", songname: "Relation", singer: "Nikk" },
    { music: "song25", songname: "Old Town Road", singer: "Lil Nas X" },
    { music: "song26", songname: "SUPERSTAR", singer: "Neha Kakkar, Vibhor " },
    { music: "song27", songname: "Raataan Lambiyan", singer: "Tanishk B Jubin Nautiyal  Asees" },
    { music: "song28", songname: "Lehanga", singer: "Jass Manak " },
    { music: "song29", songname: "Marjaawaan ", singer: "Asees Kaur, Gurnazar GauravKartik  " },
    { music: "song30", songname: "Joker", singer: "Joker BGM " },
    { music: "song31", songname: "Qismat", singer: "Ammy Virk " },
    { music: "song32", songname: "Bachpan Ka Pyaar", singer: "Badshah, Sahdev, Dirdo, Aastha Gill " },
    { music: "song33", songname: "Sarkar", singer: "Sidhu Moose Wala " },
    { music: "song34", songname: "Panda", singer: "Desiigner" },
    { music: "song35", songname: "So High", singer: "Sidhu Moose Wala" },
    { music: "song36", songname: "Sadi tere nal rawangi", singer: "Maninder buttar " },
    { music: "song37", songname: "Teri Naar ", singer: "Nikk" },
    { music: "song38", songname: "Waalian", singer: "Harnoor" },
    { music: "song39", songname: "Mere Wala Sardar", singer: "Jugraj Sandhu" },
    { music: "song40", songname: "Na Ja ", singer: "Pav Dharia " },
    { music: "song41", songname: "Cheap Thrills", singer: "Sia " },
    { music: "song42", songname: "Baby", singer: "Justin Bieber" },
    { music: "song43", songname: "Amplifier", singer: "Imran Khan" },
    { music: "song44", songname: "Such a Whore", singer: "JVLA" },
    { music: "song45", songname: "No Competition", singer: "Jass Manak, DIVINE " },
    { music: "song46", songname: "Kangana Tera Ni", singer: "Abeer Arora" },
    { music: "song47", songname: "Lahore", singer: "Guru Randhawa" },
    { music: "song48", songname: "Cute", singer: "Aroob Khan" },
    { music: "song49", songname: "Koi Vi Nahi", singer: "Shirley Setia , Gurnazar" },
    { music: "song50", songname: "Guitar Sikhda", singer: "Jassi Gill" },
    { music: "song51", songname: "Ghar Se Nikalte Hi", singer: "Amaal Mallik" },
    { music: "song52", songname: "Yaari", singer: "Nikk" },
    { music: "song53", songname: "Tu Hi Yaar Mera", singer: "Arijit S, Neha K" },
    { music: "song54", songname: "MADE IN INDIA", singer: "Guru Randhawa" },
    { music: "song55", songname: "NIRA ISHQ", singer: "Satti Dhillon" },
    { music: "song56", songname: "YES OR NO  ", singer: "Jass Manak " },
    { music: "song57", songname: "Love You Oye ", singer: "Prabh Gill " },
    { music: "song58", songname: "RINGTONE", singer: "Preetinder" },
    { music: "song59", songname: "Viah Nai Karauna", singer: "Preetinder" },
    { music: "song60", songname: "Lean On", singer: "Major Lazer" },
    { music: "song61", songname: "RANDALL Wahran", singer: "Dharam" },
    { music: "song62", songname: "Rockstar", singer: "Post Malone" },
    { music: "song63", songname: "Childhood", singer: "Rauf & Faik" },
    { music: "song64", songname: "Love Nwantiti", singer: "CKay" },
    { music: "song65", songname: "Bijlee Bijlee", singer: "Harrdy Sandhu" },
    { music: "song66", songname: "Moonlight", singer: "Harnoor" },
    { music: "song67", songname: "Choorha", singer: "Nikk" },
    { music: "song68", songname: "Parshawan", singer: "Harnoor" },
    
]
const song_name = document.getElementById('song_name');
const singer_name = document.getElementById('singer_name');
const song_img = document.getElementById('song_img');
const listbtn = document.getElementById('list_btn');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
const music = document.getElementById('music');
const retweet = document.getElementById('retweet');
const progres_div = document.getElementById('range_mi');
const progres = document.getElementById('progres');
const duration_time = document.getElementById('duration_time');
const current_time = document.getElementById('current_time');
const player = document.getElementById('player');
const body = document.getElementById('body');
const song_list = document.getElementById('song_list');
const side_player = document.getElementById('side_player');
const song_img_s = document.getElementById('song_img_s');
const song_name_s = document.getElementById('song_name_s');
const singer_name_s = document.getElementById('singer_name_s');
const progres_div_s = document.getElementById('progres_div_s');
const progres_s = document.getElementById('progres_s');
const prev_s = document.getElementById('prev_s');
const play_s = document.getElementById('play_s');
const next_s = document.getElementById('next_s');
const titlep = document.getElementById('titlep');
const loding = document.getElementById('loding');
const header_logo_l = document.getElementById('header_logo_l');
const header_text_l = document.getElementById('header_text_l');
const search = document.getElementById('search');
const title_s = document.getElementById('title_s');
const search_icon = document.getElementById('search_icon');
const volum_main = document.getElementById('volum_main');
const volum = document.getElementById('volum');
const full = document.getElementById('full');
const volume_up = document.getElementById('volume_up');
const volum_box = document.getElementById('volum_box');
const hover_box = document.getElementById('hover_box');
const volum_main_1 = document.getElementById('volum_main_1');
const volum_1 = document.getElementById('volum_1');
const full_1 = document.getElementById('full_1');
const volume_up_1 = document.getElementById('volume_up_1');
const volum_box_1 = document.getElementById('volum_box_1');
const hover_box_1 = document.getElementById('hover_box_1');
const volum_range = document.getElementById('volum_range');
const volum_range_1 = document.getElementById('volum_range_1');
const side_range = document.getElementById('side_range');

const songlist_ht = songlist.map((songdata) => {
    let htmldata = '<div class="singel_song" id="' + (songdata.music) + '" ><div class="song_logo"><img src="music_img/' +
        (songdata.music) + '.jpg" alt=""></div><div class="title"><h2>' + (songdata.songname) + '</h2><h4>' + (songdata.singer) + '</h4></div></div>';
    song_list.insertAdjacentHTML('beforeend', htmldata);
});

for (let i = 0; i < songlist.length; i++) {
    let songplay = songlist[i].music;
    songplay = document.getElementById('' + (songplay) + '');
    songplay.addEventListener('click', () => { songlistindex = i; cursong(songlist[songlistindex]); });
};

function fun() {
    setTimeout(() => {
        loding.style.backgroundColor = 'transparent';
        header_logo_l.style.color = 'transparent';
        header_text_l.style.color = 'transparent';
    }, 1000);
    setTimeout(() => {
        loding.style.zIndex = '-1'
    }, 1001);
    setTimeout(() => {
        loding.style.display = 'none'
    }, 2000);
}
function myfun() {
    let filter = document.getElementById('myinput').value.toUpperCase();
    for (let i = 0; i < songlist.length; i++) {
        const singel_song = document.getElementsByClassName('singel_song')[i];
        if (songlist[i].songname.toUpperCase().indexOf(filter) > -1 || songlist[i].singer.toUpperCase().indexOf(filter) > -1) {
            singel_song.style.display = '';
        }
        else {
            singel_song.style.display = 'none'
        }
    }
}

isplaying = false;

const players = () => {
    if (isplaying == true && song_list.style.left == 0) {
        // side_player.style.left = "85.2%";
        side_player.style.right = "-198px";
        hover_box.style.top = "-2%";
    }
}
listbtn.addEventListener('click', () => {
    song_list.style.left = "0%";
    player.style.left = "150%";
    // side_player.style.left = "85.2%";
    side_player.style.right = "-198px";
    search.style.left = "0%";
    hover_box.style.top = "-2%";
    hover_box_1.style.display = 'none';
});

song_img_s.addEventListener('click', () => {
    song_list.style.left = "-100%";
    player.style.left = "50%";
    // side_player.style.left = "120%";
    side_player.style.right = "-700px";
    search.style.left = "-100%";
    hover_box.style.top = '-10%'
    setTimeout(() => {
        hover_box_1.style.display = 'block';
    }, 500);

});
titlep.addEventListener('click', () => {
    song_list.style.left = "-100%";
    player.style.left = "50%";
    side_player.style.left = "120%";
})
const playsong = () => {
    isplaying = true;
    play.classList.replace("fa-play", "fa-pause");
    play_s.classList.replace("fa-play", "fa-pause");
    music.play();
    players();
}
const pausesong = () => {
    isplaying = false;
    play.classList.replace("fa-pause", "fa-play");
    play_s.classList.replace("fa-pause", "fa-play");
    music.pause();
}
play.addEventListener('click', () => {
    isplaying ? pausesong() : playsong();
});
play_s.addEventListener('click', () => {
    isplaying ? pausesong() : playsong();
});
const cursong = (songlist) => {
    song_name.textContent = songlist.songname;
    singer_name.textContent = songlist.singer;
    music.src = "music/" + songlist.music + ".mp3";
    song_img.src = "music_img/" + songlist.music + ".jpg";
    song_name_s.textContent = songlist.songname;
    singer_name_s.textContent = songlist.singer;
    song_img_s.src = "music_img/" + songlist.music + ".jpg";
    playsong();
    players();
};
songlistindex = 0;
const nextsong = () => {
    songlistindex = (songlistindex + 1) % songlist.length;
    cursong(songlist[songlistindex]);
    playsong();
};
next.addEventListener('click', nextsong);
next_s.addEventListener('click', nextsong);
const prevsong = () => {
    songlistindex = (songlistindex - 1 + songlist.length) % songlist.length;
    cursong(songlist[songlistindex]);
    playsong();
}
prev.addEventListener('click', prevsong);
prev_s.addEventListener('click', prevsong);

music.addEventListener('timeupdate', (event) => {
    let duration = event.srcElement.duration;
    let currentTime = event.srcElement.currentTime;
    let progerstime = (currentTime / duration) * 100;
    progres.style.width = ((progerstime *4) + "px");
    progres_s.style.width = (progerstime + "%");
    side_range.value = (currentTime / duration) * 250;
    progres_div.value = progerstime * 4;
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    let tot_duration = min_duration + ":" + sec_duration;
    if (duration) {
        duration_time.textContent = tot_duration;
    }
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    let tot_currentTime = min_currentTime + ":" + sec_currentTime;
    if (currentTime) {
        current_time.textContent = tot_currentTime;
    }
});
progres_div.addEventListener('click', (event) => {
    const { duration } = music;
    let move_progers = (event.offsetX / 400) * duration;
    music.currentTime = move_progers;
});
side_range.addEventListener('click', (event) => {
    const { duration } = music;
    let move_progers = (event.offsetX / 250) * duration;
    music.currentTime = move_progers;
})


const retweets = () => {
    music.addEventListener('ended', playsong);
}
const noretweets = () => {
    music.addEventListener('ended', nextsong);
}
music.addEventListener('ended', nextsong);
isrepet = false;

retweet.addEventListener('click', () => {
    if (isrepet == false) {
        retweet.classList.replace("fa-exchange-alt", "fa-retweet")
        retweets();
        isrepet = true;
    } else {
        retweet.classList.replace("fa-retweet", "fa-exchange-alt")
        noretweets();
        isrepet = false;
    }
});
document.addEventListener('keydown',(e)=>{
    if (e.code == "Space" ) {
        isplaying ? pausesong() : playsong();
    }
    else if (e.code == "KeyL") {
        music.currentTime = music.currentTime + 5;
    }
    else if (e.code == "KeyJ") {
        music.currentTime = music.currentTime - 5;
    }
    else if (e.code == "ArrowRight") {
        nextsong();
    }
    else if (e.code == "ArrowLeft") {
        prevsong();
    }
});
volum_range.addEventListener('input',(e)=>{
    let curvolum = volum_range.value / 150;
    music.volume = curvolum ;
    volum.style.width = (curvolum * 150 ) + "px";
    volum_range_1.value = volum_range.value;
    if ((curvolum * 100) < 50) {
        volume_up.classList.replace('fa-volume-up', 'fa-volume-down');
        volume_up.classList.replace('fa-volume-off', 'fa-volume-down');
    } else {
        volume_up.classList.replace('fa-volume-down', 'fa-volume-up');
        volume_up.classList.replace('fa-volume-off', 'fa-volume-up');
    }
    volum_1.style.width = (curvolum * 100) + "%";
    if ((curvolum * 100) < 50) {
        volume_up_1.classList.replace('fa-volume-up', 'fa-volume-down');
        volume_up_1.classList.replace('fa-volume-off', 'fa-volume-down')
    } else {
        volume_up_1.classList.replace('fa-volume-down', 'fa-volume-up');
        volume_up_1.classList.replace('fa-volume-off', 'fa-volume-up');
    }
});
volum_range_1.addEventListener('input',(e)=>{
    let curvolum = volum_range_1.value / 150;
    music.volume = curvolum ;
    volum.style.width = (curvolum * 150 ) + "px";
    volum_range.value = volum_range_1.value
    if ((curvolum * 100) < 50) {
        volume_up.classList.replace('fa-volume-up', 'fa-volume-down');
        volume_up.classList.replace('fa-volume-off', 'fa-volume-down')
    } else {
        volume_up.classList.replace('fa-volume-down', 'fa-volume-up');
        volume_up.classList.replace('fa-volume-off', 'fa-volume-up');
    }
    volum_1.style.width = (curvolum * 100) + "%";
    if ((curvolum * 100) < 50) {
        volume_up_1.classList.replace('fa-volume-up', 'fa-volume-down');
        volume_up_1.classList.replace('fa-volume-off', 'fa-volume-down');
    } else {
        volume_up_1.classList.replace('fa-volume-down', 'fa-volume-up');
        volume_up_1.classList.replace('fa-volume-off', 'fa-volume-up');
    }
});

volume_up.addEventListener('click', () => {
    volume_up.classList.replace('fa-volume-up', 'fa-volume-off');
    volume_up.classList.replace('fa-volume-down', 'fa-volume-off');
    music.volume = 0;
    volum.style.width = 0 + "%";
    volume_up_1.classList.replace('fa-volume-up', 'fa-volume-off');
    volume_up_1.classList.replace('fa-volume-down', 'fa-volume-off');
    volum_1.style.width = 0 + "%";
    volum_range_1.value= 0;
    volum_range.value= 0;
});

volume_up_1.addEventListener('click', () => {
    volume_up_1.classList.replace('fa-volume-up', 'fa-volume-off');
    volume_up_1.classList.replace('fa-volume-down', 'fa-volume-off');
    music.volume = 0;
    volum_1.style.width = 0 + "%";
    volum.style.width = 0 + "%";
    volume_up.classList.replace('fa-volume-up', 'fa-volume-off');
    volume_up.classList.replace('fa-volume-down', 'fa-volume-off');
    volum_range_1.value= 0;
    volum_range.value= 0;
});

hover_box.addEventListener('mouseenter', () => {
    volum_box.style.top = '45%';
    hover_box.style.top = "8%"
});

hover_box_1.addEventListener('mouseenter', () => {
    hover_box_1.style.left = '75%';
});

hover_box_1.addEventListener('mouseleave', () => {
    hover_box_1.style.left = '57%';
});

hover_box.addEventListener('mouseleave', () => {
    hover_box.style.height = '100px';
    volum_box.style.top = '10%';
    hover_box.style.top = '-2%';
});