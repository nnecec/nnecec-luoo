const ENV = process.env.NODE_ENV || 'development'

function serverConfig() {
  return {
    development: {
      api: 'http://localhost:4101/api'
    }
  }[ENV]
}

const config = {
  api: serverConfig().api
}

export default config