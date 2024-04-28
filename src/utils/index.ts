const confetti = require("canvas-confetti").default

// 获取随机数min,max之间的数
export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 通过tabId 获取tab详细信息
export const getTab = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0]
      const { favIconUrl, title, url } = currentTab || {}

      try {
        const newUrl = new URL(url)
        const origin = newUrl.origin
        resolve({ ...currentTab, newUrl, origin })
      } catch (error) {
        reject()
      }
    })
  })
}

export const store = {
  set: async (key: string, value: any) => {
    return await new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, () => {
        resolve(true)
      })
    })
  },
  get: async (key: string) => {
    return await new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key])
      })
    })
  }
}

// sleep
export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// tips
export const tips = () => {
  var count = 200
  var defaults = {
    origin: { y: 0.7 }
  }
  //   chrome.tabs.create({ url: "tabs/home.html", active: true })
  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    })
  }
  fire(0.25, {
    spread: 26,
    startVelocity: 55
  })
  fire(0.2, {
    spread: 60
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45
  })
}

//
export const clearData = async () => {
  const reload: any = await store.get("reload")
  const { origin } = ((await getTab()) || {}) as any
  const sinceValue: any = await store.get("since")
  const isCurrent: any = await store.get("isCurrent")
  const { value: since } = sinceValue || {}
  const currentSelected: any = await store.get("currentSelected")
  const selected: any = await store.get("selected")
  const obj = {}
  const options = isCurrent ? currentSelected : selected
  console.log(`isCurrent: ${isCurrent}`, options)
  Array.isArray(options)
    ? options?.forEach((item: any) => {
        obj[item] = true
      })
    : {}
  const origins = origin && isCurrent ? [origin] : undefined
  const timeout = getRandom(0, 1) * 1000
  // console.log(chrome.browsingData)
  await Promise.all([
    chrome?.browsingData?.remove(
      {
        since,
        origins
      },
      obj
    ) || sleep(1000),
    sleep(timeout)
  ])
  try {
    tips()
  } catch (error) {
    console.log("tips error")
  }

  // 刷新当前页面
  // chrome.tabs.reload()
  if (reload) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.reload(tabs[0].id)
    })
  }
}
