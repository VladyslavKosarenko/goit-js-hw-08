import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
function saveCurrentTime(time) {
    localStorage.setItem('videoplayer-current-time', time);
}
player.on('timeupdate', (data) => {
    const currentTime = data.seconds;
    saveCurrentTime(currentTime);
});
function restoreCurrentTime() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        player.setCurrentTime(savedTime).catch((error) => {
            console.error('Помилка при відновленні часу відтворення:', error);
        });
    }
}


restoreCurrentTime();

const throttledSaveTime = throttle(saveCurrentTime, 1000);


player.on('timeupdate', (data) => {
    const currentTime = data.seconds;
    throttledSaveTime(currentTime);
});