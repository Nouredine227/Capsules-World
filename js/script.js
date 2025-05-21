const platformSelect = document.getElementById('platform');
const downloadLink = document.getElementById('downloadLink');

const links = {
  windows: 'https://github.com/toncompte/CapsuleWorld/releases/download/windows.zip',
  android: 'https://github.com/toncompte/CapsuleWorld/releases/download/android.apk',
  ios: 'https://github.com/toncompte/CapsuleWorld/releases/download/ios.ipa',
  mac: 'https://github.com/toncompte/CapsuleWorld/releases/download/mac.dmg'
};

platformSelect.addEventListener('change', () => {
  const platform = platformSelect.value;
  downloadLink.href = links[platform];
});