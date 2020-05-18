const userProfile = {
  name: 'Elliott Woodward',
  address: '42 LTU&E Street',
  city: 'Asheville',
  state: 'North Carolina',
  zip: '28806',
  avatar: 'me.jpg'
}

function getProfileUpdate() {
  const name = 'e-dawg';
  const address = '21 Jump Street';
  const city = 'Woodfin';
  const zip = '28804';
  const avatar = 'cool_pic.jpg';
  return {
    name: name,
    address: address,
    city: city,
    zip: zip,
    avatar: avatar
  };
}

function updateProfile(obj) {
  Object.assign(userProfile, obj);
}

updateProfile(getProfileUpdate());
console.log(userProfile);
