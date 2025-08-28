const platformSelect = document.getElementById('platform');
const downloadLink = document.getElementById('downloadLink');

const links = {
  windows: 'https://my.microsoftpersonalcontent.com/personal/f888cb11218954ae/_layouts/15/download.aspx?UniqueId=6360de6f-fd60-4293-bead-d1569edcd6ec&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiJiNzdjYjhlZS1kMTg0LTRhNDEtYjcwMy00NmRkOGJiYTU4NGYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU2NDA0OTk4In0.60FQYe1UZSmzAfMQdFBweTVXxmBRMuKz1aeponjt_lKONW5N_7W_OIuoD_jALwYdR02TmSFef3kjMkja59xuijBx9C6VCAQP11orO6XHD0NWks9xae6__cIi5c1kbZaqCQ88Ibx3I1luZtp9q1gZ4wJ03rZoPtr00au3aAUlpharxGHxT-Ba3gy58faCMSx9i-lKxbic9sWx6cjh6DV_GU4Acx1wGzQFlc7sA5S8mPeGT1R2Db8UhE7RFsQ3e-7sQurnl-id3pq3jq7f13fdoySzhOqI_LGVnr118Jv_0KJrUDjhwUEpbL4dFvu-RfeMANP8pG4ylTnpy3MlQP7eiY6HQCHAsw_XkY5Rw2fsfUwP3WLBOAm92MAeQsgdzCYwDrC08q_fcmpdZwxhIVtR7f4M7h0z7cU8a7aemFY_7f45V6uA0vi5_Hu-5aUumw6TL_16Yr8ozBx4V77eCAmVrQC9sVyNaZUW277biztqBy7qshGBKx4rNNrWE84z5DUnTpjdhFTy87qyqEomB0KqAQ.NRRxofh-Us5iaQAweD5mn7mvIecCl2o5kRNouYprj1o&ApiVersion=2.0',
  android: 'https://github.com/toncompte/CapsuleWorld/releases/download/android.apk',
  ios: 'https://github.com/toncompte/CapsuleWorld/releases/download/ios.ipa',
  mac: 'https://github.com/toncompte/CapsuleWorld/releases/download/mac.dmg'
};

platformSelect.addEventListener('change', () => {
  const platform = platformSelect.value;
  downloadLink.href = links[platform];
});
