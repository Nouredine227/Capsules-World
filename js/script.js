const platformSelect = document.getElementById('platform');
const downloadLink = document.getElementById('downloadLink');

const links = {
  windows: 'https://my.microsoftpersonalcontent.com/personal/f888cb11218954ae/_layouts/15/download.aspx?UniqueId=bef03a0b-f126-4ce3-a9d3-62586e67731e&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiJiNzdjYjhlZS1kMTg0LTRhNDEtYjcwMy00NmRkOGJiYTU4NGYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU3MzgyNzQxIn0.cE2Z3kn0NUMN4Jj17b_mMUnS_j3aahTH0CZ_sY-ndDdY80AmN__HU9H6BpN3cZ0cZRuAV4S5KMdLjwI-GOCE-V3eZ3Z1Rw13DvCd52-T1VEsYMh1qtgAgo1RFlb9JW_6CyhAsmBMFKOs7PTNgnpVvql4zYiVOG20NA_X8bBfS-Ia5GPLES3KalhbjcD3KZ73Vc3T7So6bLC6zr11ZV0oEJ1pEPigR8Idn21iq0Pp--WImCTKpQsR02PTSStqfO3nqsje2YGRy4saChHsuyZPmyjdsH-GzAl3TyLx_rAGUSYzNAUGgliDUN0MmZ5S-GskP6x5RArWJjGT1HSoYqxeWdKjGlqz_0mJj4WiW05cziil0__YCK_i8sCS9QKw37bVCykqgzoyR7L-zMaEGGSiygZyEhljDVecwZozaAM_MV2o7K63NIi9Ufrd74DgygDZP2pvFIRR-Tv516Hat0KsOtGI3b1h8u4hARaGjcNKK2uEQLaSdr4PpKGhSMFcDlLmHZz2nTq8xLuxNLam5Ks-0w.j9YxcVgDDbNTyv_gC4OCoOK_QXiyWHFYkNWQY-Vbpus&ApiVersion=2.0'
  android: 'https://github.com/toncompte/CapsuleWorld/releases/download/android.apk',
  ios: 'https://github.com/toncompte/CapsuleWorld/releases/download/ios.ipa',
  mac: 'https://github.com/toncompte/CapsuleWorld/releases/download/mac.dmg'
};

platformSelect.addEventListener('change', () => {
  const platform = platformSelect.value;
  downloadLink.href = links[platform];
});
