import listenList from './ipcMainList'

export default class MyIpc {
  constructor(ipc, sender) {
    this.ipc = ipc
    this.sender = sender

    this.addIpcMainListener(listenList)
  }

  send(channel, arg) {
    this.sender.send(channel, arg)
  }

  addIpcMainListener(listenList) {
    listenList.forEach(listen => {
      this.ipc.on(listen.channel, (event, arg) => {
        this.sender.send(listen.channel, arg)
        if (listen.callback && typeof listen.callback === 'function') {
          listen.callback(arg)
        }
      })
    })

  }
}


