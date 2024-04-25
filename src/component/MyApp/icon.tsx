// 有size就不需要width和height了
type Props = {
  size?: number;
  color?: string;
};

export const IconCheckbox = (props: Props) => {
  const { color = "transparent", size = 128 } = props;
  return (
    <>
      <svg
        className="icon"
        viewBox="0 0 1027 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="68175"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
      >
        <path
          d="M272.11328 686.592c0 0 328.128-441.216 565.376-561.728 0 0 139.136-31.488 174.4 0 0 0 51.776 50.048-37.056 90.816 0 0-400.512 239.168-556.224 535.808 0 0-94.528 170.496-163.136 161.28-68.608-9.28-81.6-14.848-128-85.248-46.336-70.528-96.384-216.96-122.304-241.024-25.984-24.128 50.048-111.296 137.216-87.168C229.48928 523.456 272.11328 686.592 272.11328 686.592"
          fill={color}
          p-id="68176"
        ></path>
      </svg>
    </>
  );
};

export const IconCheckbox1 = (props: Props) => {
  const { color = "transparent", size = 128 } = props;
  return (
    <>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="104766"
        width={size}
        height={size}
      >
        <path
          d="M82.363 422c27.674 18.556 322.062 193.237 322.062 193.237S823.232 256.064 919.724 164.35c0 0 91.333-74.223-64.413 128.825C699.686 496.161 404.425 872.888 404.425 872.888S31.914 388.035 82.363 422z"
          fill={color}
          p-id="104767"
        ></path>
      </svg>
    </>
  );
};

export const IconCheckbox2 = (props: Props) => {
  const { color = "transparent", size = 128 } = props;
  return (
    <>
      <svg
        viewBox="0 0 1051 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="146401"
        width={size}
        height={size}
      >
        <path
          d="M0 649.724846l294.373717-176.62423 140.87885 273.347023S693.880903 159.802875 1030.308008 0c0 0-44.156057 285.963039 21.026694 393.199179 0 0-250.217659 79.901437-599.26078 630.800821 0 0-384.788501-391.096509-452.073922-374.275154z"
          fill={color}
          p-id="146402"
        ></path>
      </svg>
    </>
  );
};
export const IconSetting = (props: Props) => {
  const { color = "#fff", size = 128 } = props;
  return (
    <>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="88116"
        width={size}
        height={size}
      >
        <path
          d="M64 752h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48H960v64H777.3c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48H64M64 480h182.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48H960v64H393.3c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48H64M64 208h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48H960v64H777.3c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48H64"
          p-id="88117"
          fill={color}
        ></path>
      </svg>
    </>
  );
};
