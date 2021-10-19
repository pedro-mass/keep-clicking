var config = {
  maxTries: 50,
  interval: 2e3,
  getButton: () =>
    // to get this:
    // - right click on element to click, select inspect
    // - right click on the node w/i the Elements tab
    // - Copy -> Copy JS path
    // - paste here
    document.querySelector(
      '#q-600306533 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.recsCardboard.W\\(100\\%\\).Mt\\(a\\).H\\(100\\%\\)--s.Px\\(4px\\)--s.Pos\\(r\\) > div.recsCardboard__cardsContainer.H\\(100\\%\\).Pos\\(r\\).Z\\(1\\) > div > div.Pos\\(a\\).B\\(0\\).Isolate.W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-like-green\\) > button'
    ),
}

var likes = 0
var tries = 0
var startId

var likePerson = () => {
  if (tries >= config.maxTries) {
    stop()
    return console.log(`Hit max number of tries: ${config.maxTries}`)
  }
  const button = config.getButton()
  if (!button) {
    console.error('button not found')
    return stop()
  }
  button.click()
  likes++
  tries++
  console.log(`${likes}/${config.maxTries}`)
}

var start = () => {
  likes = 0
  tries = 0
  return setInterval(likePerson, config.interval)
}

var stop = () => {
  clearInterval(startId)
  console.info('stopped')
}
startId = start()
