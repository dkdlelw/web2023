const allMusic = [
    {
        name : "1.PixelAffection",
        artist : "Yeule",
        img: "music_view01",
        audio : "music_audio01"
    }, {
        name : "2.The Future is Now",
        artist : "POiSON GiRL FRiEND",
        img: "music_view02",
        audio : "music_audio02"
    }, {
        name : "3.음악제목",
        artist : "Yeule",
        img: "music_view03",
        audio : "music_audio01"
    }, {
        name : "4.음악제목",
        artist : "Yeule",
        img: "music_view04",
        audio : "music_audio01"
    }, {
        name : "5.음악제목",
        artist : "Yeule",
        img: "music_view05",
        audio : "music_audio01"
    }, {
        name : "6.음악제목",
        artist : "Yeule",
        img: "music_view06",
        audio : "music_audio01"
    }, {
        name : "7.음악제목",
        artist : "Yeule",
        img: "music_view07",
        audio : "music_audio01"
    }, {
        name : "8.음악제목",
        artist : "Yeule",
        img: "music_view08",
        audio : "music_audio01"
    }, {
        name : "9.음악제목",
        artist : "Yeule",
        img: "music_view09",
        audio : "music_audio01"
    }, {
        name : "10.음악제목",
        artist : "Yeule",
        img: "music_view10",
        audio : "music_audio01"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
let musicIndexd = 1; // 현재음악 인덱스
// 음악재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;  //음악 이름
    musicArtist.innerText = allMusic[num-1].artist;  //음악 이름
    musicView.src = `img/${allMusic[num-1].img}.png` //음악 이미지
    musicView.alt = allMusic[num-1].artist; //음악 알트
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`; // 뮤직파일
}
// 플리ㅔ이 버튼 클릭 했을 때
// musicPlay.addEventListener("click", ()=> {
// });
window.addEventListener("load", () => {
    loadMusic(musicIndexd);
    musicAudio.play();
});