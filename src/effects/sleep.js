function sleep(duration) {
  return { effect: 'sleep', duration }
}

function sleepHandler(effect) {
  let value = new Promise((resolve) => {
    setTimeout(resolve, effect.duration)
  })
  return { effect: '_resolve', value }
}

module.exports.factory = sleep
module.exports.handler = sleepHandler
