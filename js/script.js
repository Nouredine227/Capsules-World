const platformSelect = document.getElementById('platform');
const downloadLink = document.getElementById('downloadLink');

const links = {
  windows: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9mODg4Y2IxMTIxODk1NGFlL0VRczY4TDRtOGVOTXFkTmlXRzVuY3g0QnRoLTVkTDY3Ul85N3FLYVBGQ1VpZVE&cid=F888CB11218954AE&id=F888CB11218954AE%21sbef03a0bf1264ce3a9d362586e67731e&parId=F888CB11218954AE%21s5fa0c66aac2d435892943e3636aa00f1&o=OneUp',
  android: 'https://github.com/toncompte/CapsuleWorld/releases/download/android.apk',
  ios: 'https://github.com/toncompte/CapsuleWorld/releases/download/ios.ipa',
  mac: 'https://github.com/toncompte/CapsuleWorld/releases/download/mac.dmg'
};

platformSelect.addEventListener('change', () => {
  const platform = platformSelect.value;
  downloadLink.href = links[platform];
});
