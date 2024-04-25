import { Button, Checkbox, Col, Dropdown, Menu, Row, Select } from "antd"
import { useEffect, useState } from "react"

import cleanCode from "./clean-code.svg"
import {
  browsingDataOptions,
  currentTabOptions,
  gutter,
  particlesOptions,
  timeOptions
} from "./const.js"
import {
  IconCheckbox,
  IconCheckbox1,
  IconCheckbox2,
  IconSetting
} from "./icon.js"
import css from "./index.module.less"
import xz from "./xz.svg"

import "./particles.js"

import { icons } from "antd/es/image/PreviewGroup"

import { clearData, sleep, store } from "~utils"

// 获取manifest文件
const { version, name } = chrome.runtime.getManifest()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const particlesJS: any

const App = () => {
  const [reload, setReload] = useState(false)
  const [working, setWorking] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [currentSelected, setCurrentSelected] = useState<string[]>([])
  const [isCurrent, setIsCurrent] = useState<boolean>(false)
  const [since, setSince] = useState<{
    label: string
    value: number
  }>({
    label: "时间不限",
    value: 0
  })
  const reset = async () => {
    setWorking(false)
    setSelected([])
    setSince({
      label: "时间不限",
      value: 0
    })
    setIsCurrent(false)
    await store.set("selected", [])
    await store.set("since", {
      label: "时间不限",
      value: 0
    })
    await store.set("isCurrent", false)
    await store.set("currentSelected", [])
    await store.set("reload", false)
  }
  useEffect(() => {
    ;(async () => {
      const selected: any = await store.get("selected")
      const currentSelected: any = await store.get("currentSelected")
      const since: any = await store.get("since")
      const isCurrent: any = await store.get("isCurrent")
      const reload: any = await store.get("reload")
      setReload(reload)
      setSelected(selected || [])
      setCurrentSelected(currentSelected || [])
      setSince(since)
      setIsCurrent(isCurrent)
    })()
    particlesJS("particles-js", particlesOptions)
  }, [])
  const labelImage = <IconCheckbox color="rgba(255,255,255,0.1)" size={30} />
  const labelImage1 = <IconCheckbox1 color="rgba(255,255,255,0.1)" size={30} />
  const labelImage2 = <IconCheckbox2 color="rgba(255,255,255,0.1)" size={30} />
  const disabled = working
  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={(ev) => {
            ev.stopPropagation()
          }}>
          <Checkbox
            checked={reload}
            onChange={(e) => {
              setReload(e.target.checked)
              store.set("reload", e.target.checked)
            }}>
            清理后刷新页面
          </Checkbox>
        </div>
      )
    },
    {
      key: "2",
      label: "清空设置",
      onClick: reset
    }
  ]
  return (
    <div className={css.wrap}>
      <div className={css.particles} id="particles-js"></div>
      <div>
        <header>
          <div>
            <img src={cleanCode} alt="" />
            <h1>{name}</h1>
            <div
              style={{
                marginLeft: 10
              }}>
              V{version}
            </div>
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 5000,
              cursor: "pointer"
            }}>
            <Dropdown
              placement="bottomLeft"
              arrow={{ pointAtCenter: true }}
              menu={{
                items
              }}>
              <span>
                <IconSetting size={25} color="rgba(255,255,255,0.9)" />
              </span>
            </Dropdown>
          </div>
        </header>
        <article>
          <Row gutter={gutter}>
            <Col span={24}>
              <Row gutter={gutter}>
                <Col span={12}>
                  <Select
                    disabled={disabled}
                    labelInValue
                    value={since}
                    onChange={(v) => {
                      setSince(v)
                      store.set("since", v)
                    }}
                    placeholder="请选择时间"
                    options={timeOptions}
                    style={{
                      width: "100%"
                    }}
                  />
                </Col>
                <Col span={12}>
                  <Row justify="end">
                    <Col>
                      <Checkbox
                        disabled={disabled}
                        checked={isCurrent}
                        onChange={(e) => {
                          setIsCurrent(e.target.checked)
                          store.set("isCurrent", e.target.checked)
                        }}
                        defaultChecked>
                        {labelImage1}&nbsp;&nbsp;当前页面
                      </Checkbox>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              {isCurrent ? (
                <Checkbox.Group
                  disabled={disabled}
                  value={currentSelected}
                  onChange={(v) => {
                    setCurrentSelected(v as string[])
                    store.set("currentSelected", v)
                  }}
                  options={currentTabOptions?.map((item) => {
                    const { label, value } = item
                    return {
                      label: (
                        <>
                          {labelImage1}
                          {label}
                        </>
                      ),
                      value
                    }
                  })}
                />
              ) : (
                <Checkbox.Group
                  disabled={disabled}
                  value={selected}
                  onChange={(v) => {
                    setSelected(v as string[])
                    store.set("selected", v)
                  }}
                  options={browsingDataOptions?.map((item) => {
                    const { label, value } = item
                    return {
                      label: (
                        <>
                          {labelImage1}
                          {label}
                        </>
                      ),
                      value
                    }
                  })}
                />
              )}
            </Col>
          </Row>
        </article>
        <footer>
          <div className={css.btn}>
            <span
              onClick={async () => {
                setWorking(!working)
                await clearData(isCurrent ? currentSelected : selected)
                setWorking(false)
              }}>
              <img src={cleanCode} alt="" className={working ? css.img : ""} />
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default App
