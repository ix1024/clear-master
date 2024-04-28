import { clearData } from "~utils"

chrome.commands.onCommand.addListener(async function (command) {
  if (command === "run-clear") {
    try {
      console.log("onCommand 1", command)
      await clearData()
      //发送消息给popup
      chrome.runtime.sendMessage({ type: "clear" })
    } catch (error) {}
  }
})
// chrome.commands.getAll(function (commands) {
//   commands?.forEach((command) => {
//     console.log("command", command.name, command.shortcut, command.description)
//   })
// })
