module.exports = (emitter, opts) => {

  opts = opts || {}

  var start = null
  const emit = emitter.emit
  if (typeof emit !== 'function') {
    throw Error('Emitter type passed is not a valid event emitter.')
  }

  const name = (opts.name || emitter.constructor.name)
  const callback = (opts.callback || console.log)

  emitter.emit = (event) => {

    let now = Date.now()
    let diff = start === null ? 0 : now - start
    start = now

    let data = {
      timestamp: now,
      name,
      event,
      diff
    }
    callback(data)

    return emit.apply(this, arguments)

  }

}
