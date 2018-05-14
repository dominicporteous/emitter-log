module.exports = (emitter, opts) => {

  opts = opts || {}

  let emit = emitter.emit
  if (typeof emit !== 'function') {
    throw Error('Emitter type passed is not a valid event emitter.')
  }

  const name = (opts.name || emitter.constructor.name)
  const callback = (opts.callback || console.log)

  emitter.emit = (event) => {

    var now = Date.now()
    let diff = start === null ? 0 : now - start
    start = now

    let data = {
      name,
      event,
      time,
      diff
    }
    callback(data)

    return emit.apply(this, arguments)

  }

}
