enum BrowsingData {
  cacheStorage = "缓存存储", //
  cookies = "Cookies", //
  fileSystems = "文件系统", //
  indexedDB = "IndexedDB", //
  localStorage = "本地存储", //
  serviceWorkers = "Service Workers", //
  webSQL = "Web SQL", //
  appcache = "应用缓存",
  cache = "缓存",
  downloads = "下载",
  formData = "表单数据",
  history = "历史记录",
  passwords = "密码"
}
export type BrowsingDataType = keyof typeof BrowsingData

export const browsingDataOptions = Object.entries(BrowsingData).map(
  ([value, label]) => ({
    value,
    label
  })
)

export const currentTabOptions = browsingDataOptions?.slice(0, 7)

// 时间,1小时前，1天前，1周前，1月前，时间不限
export const timeOptions: {
  label: string
  value: number
}[] = [
  {
    label: "过去1小时",
    value: Date.now() - 3600 * 1000
  },
  {
    label: "过去24小时",
    value: Date.now() - 24 * 3600 * 1000
  },
  {
    label: "过去7天",
    value: Date.now() - 7 * 24 * 3600 * 1000
  },
  {
    label: "过去4周",
    value: Date.now() - 30 * 24 * 3600 * 1000
  },
  {
    label: "时间不限",
    value: 0
  }
]
export const gutter = [16, 16] as [number, number]
export const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 12,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
