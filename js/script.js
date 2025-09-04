const platformSelect = document.getElementById('platform');
const downloadLink = document.getElementById('downloadLink');

const links = {
  windows: 'https://my.microsoftpersonalcontent.com/personal/f888cb11218954ae/_layouts/15/download.aspx?UniqueId=bef03a0b-f126-4ce3-a9d3-62586e67731e&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiJiNzdjYjhlZS1kMTg0LTRhNDEtYjcwMy00NmRkOGJiYTU4NGYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU3MDEyMzAxIn0.pbpTPJDq288R8S91SFTMZ0_Fn6u-ZV61um9aA2LYcosOjY8EVQDrIhh_6_j9grtwz6LD1c0ZlmsL6TITefWugvhZmQRWAjREt3LF1AMuhCth6rYCrduYq8WXZF8VPQoEvolcO11PUyGItpNtj5Kk9QM0sD_2xBdg53JuEOygI4Jma_wJaWbmJ0cnFgsu6kAgzfAp94eWgeozjbGGDiImfeawO83oBV32ZLEVKBJh3yV5vH5tCMG2RMIW2fX9qpZ2Ik0m2kqDpfhGkMMs8DFHgkqZi3ocvoYfKS6d0mvBSsOm0x7e4726LkDR2uws8YRHiMYub8_pxYg-VdTk9xHH3fv2sJATRsbkJXsEcZ10SVF0-qtAOVpY8L3UejJuFZq-29M14ZEHWIbivK4lHNBEC86wdh_sVvt2W-v29mckx00oLXh4BRlgBR-mSrypzmOcNBXVLc901y5Ra-4lafW5Ksa85fEaM2sIN5yj1rZSo-meMzjwvhcK73RtnEPl8HOm6ThyeUbDWKCndURJW3C4mA.0Mzd1Y_IfF64YLpdy4LM8miHUAwYMUMO4vijA46-aFw&ApiVersion=2.0',
  android: 'https://github.com/toncompte/CapsuleWorld/releases/download/android.apk',
  ios: 'https://github.com/toncompte/CapsuleWorld/releases/download/ios.ipa',
  mac: 'https://github.com/toncompte/CapsuleWorld/releases/download/mac.dmg'
};

platformSelect.addEventListener('change', () => {
  const platform = platformSelect.value;
  downloadLink.href = links[platform];
});
