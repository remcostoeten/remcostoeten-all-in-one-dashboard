type IconProps = {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
};

export function QuestionIcon({ className, fill, width, height }: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9683 23.0883C18.9683 23.606 18.5485 24.0258 18.0308 24.0258C17.513 24.0258 17.0933 23.606 17.0933 23.0883C17.0933 22.5705 17.513 22.1508 18.0308 22.1508C18.5485 22.1508 18.9683 22.5705 18.9683 23.0883Z"
        fill={fill || "#7F7F7F"}
      />
      <path
        d="M16.1558 16.5258C16.1558 15.4903 16.9952 14.6508 18.0308 14.6508C19.0663 14.6508 19.9058 15.4903 19.9058 16.5258V16.586C19.9058 17.5883 19.0933 18.4008 18.091 18.4008C17.7126 18.4008 17.4058 18.7076 17.4058 19.086V20.2758C17.4058 20.621 17.6856 20.9008 18.0308 20.9008C18.3759 20.9008 18.6558 20.621 18.6558 20.2758V19.5988C20.0786 19.3338 21.1558 18.0857 21.1558 16.586V16.5258C21.1558 14.7999 19.7566 13.4008 18.0308 13.4008C16.3049 13.4008 14.9058 14.7999 14.9058 16.5258C14.9058 16.871 15.1856 17.1508 15.5308 17.1508C15.8759 17.1508 16.1558 16.871 16.1558 16.5258Z"
        fill={fill || "#7F7F7F"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1695 11.1254C14.6084 10.164 16.3002 9.65079 18.0308 9.65079C20.3514 9.65079 22.577 10.5727 24.2179 12.2136C25.8589 13.8545 26.7808 16.0801 26.7808 18.4008C26.7808 20.1314 26.2676 21.8231 25.3061 23.262C24.3446 24.701 22.9781 25.8225 21.3793 26.4847C19.7804 27.147 18.0211 27.3203 16.3237 26.9826C14.6264 26.645 13.0673 25.8117 11.8436 24.588C10.6199 23.3643 9.78651 21.8051 9.44889 20.1078C9.11127 18.4105 9.28455 16.6511 9.94681 15.0523C10.6091 13.4535 11.7306 12.0869 13.1695 11.1254ZM13.864 24.6368C15.0974 25.4609 16.5474 25.9008 18.0308 25.9008C20.0199 25.9008 21.9275 25.1106 23.3341 23.7041C24.7406 22.2976 25.5308 20.3899 25.5308 18.4008C25.5308 16.9174 25.0909 15.4674 24.2668 14.234C23.4427 13.0006 22.2713 12.0393 20.9009 11.4717C19.5304 10.904 18.0224 10.7555 16.5676 11.0449C15.1128 11.3343 13.7764 12.0486 12.7275 13.0975C11.6786 14.1464 10.9643 15.4828 10.6749 16.9376C10.3855 18.3925 10.534 19.9005 11.1017 21.2709C11.6693 22.6413 12.6306 23.8127 13.864 24.6368Z"
        fill={fill || "#7F7F7F"}
      />
    </svg>
  );
}

export function SettingsIcon({ className, fill, width, height }: IconProps) {
  return (
    <svg
      className={className}
      width={width || "16"}
      height={height || "16"}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6556 9.65057C13.3104 9.65057 13.0306 9.93039 13.0306 10.2756V12.2131C11.5931 12.5256 10.5306 13.7756 10.5306 15.2756C10.5306 16.7756 11.5931 18.0256 13.0306 18.3381V26.5256C13.0306 26.8707 13.3104 27.1506 13.6556 27.1506C14.0008 27.1506 14.2806 26.8707 14.2806 26.5256V18.3381C15.7181 18.0256 16.7806 16.7756 16.7806 15.2756C16.7806 13.7756 15.7181 12.5256 14.2806 12.2131V10.2756C14.2806 9.93039 14.0008 9.65057 13.6556 9.65057ZM15.5306 15.2756C15.5306 16.3381 14.7181 17.1506 13.6556 17.1506C12.5931 17.1506 11.7806 16.3381 11.7806 15.2756C11.7806 14.2131 12.5931 13.4006 13.6556 13.4006C14.7181 13.4006 15.5306 14.2131 15.5306 15.2756Z"
        fill={fill || "#7F7F7F"}
      />
      <path
        d="M22.4056 27.1506C22.7508 27.1506 23.0306 26.8707 23.0306 26.5256V24.5881C24.4681 24.2756 25.5306 23.0256 25.5306 21.5256C25.5306 20.0256 24.4681 18.7756 23.0306 18.4631V10.2756C23.0306 9.93039 22.7508 9.65057 22.4056 9.65057C22.0604 9.65057 21.7806 9.93039 21.7806 10.2756V18.4631C20.3431 18.7756 19.2806 20.0256 19.2806 21.5256C19.2806 23.0256 20.3431 24.2756 21.7806 24.5881V26.5256C21.7806 26.8707 22.0604 27.1506 22.4056 27.1506ZM20.5306 21.5256C20.5306 20.4631 21.3431 19.6506 22.4056 19.6506C23.4681 19.6506 24.2806 20.4631 24.2806 21.5256C24.2806 22.5881 23.4681 23.4006 22.4056 23.4006C21.3431 23.4006 20.5306 22.5881 20.5306 21.5256Z"
        fill={fill || "#7F7F7F"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0306 3.40057C9.91816 3.40057 3.53064 9.7881 3.53064 17.9006C3.53064 26.013 9.91816 32.4006 18.0306 32.4006C26.1431 32.4006 32.5306 26.013 32.5306 17.9006C32.5306 9.7881 26.1431 3.40057 18.0306 3.40057ZM4.78064 17.9006C4.78064 10.3173 10.4473 4.65057 18.0306 4.65057C25.6139 4.65057 31.2806 10.3173 31.2806 17.9006C31.2806 25.4838 25.6139 31.1506 18.0306 31.1506C10.4473 31.1506 4.78064 25.4838 4.78064 17.9006Z"
        fill={fill || "#7F7F7F"}
      />
    </svg>
  );
}

export function ExitIcon({ className, fill, width, height }: IconProps) {
  return (
    <svg
      className={className}
      width={width || "16"}
      height={height || "16"}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0307 3.4007C9.91822 3.4007 3.5307 9.78822 3.5307 17.9007C3.5307 26.0132 9.91822 32.4007 18.0307 32.4007C26.1432 32.4007 32.5307 26.0132 32.5307 17.9007C32.5307 9.78822 26.1432 3.4007 18.0307 3.4007ZM4.7807 17.9007C4.7807 10.3174 10.4474 4.6507 18.0307 4.6507C25.614 4.6507 31.2807 10.3174 31.2807 17.9007C31.2807 25.484 25.614 31.1507 18.0307 31.1507C10.4474 31.1507 4.7807 25.484 4.7807 17.9007Z"
        fill={fill || "#7F7F7F"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8273 13.7274C13.0932 13.4615 13.5163 13.4615 13.7822 13.7274L18.0307 17.9759L22.2792 13.7274C22.5451 13.4615 22.9682 13.4615 23.2341 13.7274C23.5 13.9933 23.5 14.4164 23.2341 14.6823L18.9856 18.9308L23.2341 23.1793C23.5 23.4452 23.5 23.8683 23.2341 24.1342C22.9682 24.4001 22.5451 24.4001 22.2792 24.1342L18.0307 19.8857L13.7822 24.1342C13.5163 24.4001 13.0932 24.4001 12.8273 24.1342C12.5614 23.8683 12.5614 23.4452 12.8273 23.1793L17.0758 18.9308L12.8273 14.6823C12.5614 14.4164 12.5614 13.9933 12.8273 13.7274Z"
        fill={fill || "#7F7F7F"}
      />
    </svg>
  );
}

export function UserIcon({ className, fill, width, height }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 33"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-0.00823975"
        y="0.390198"
        width="32"
        height="32"
        rx="6.4"
        fill="white"
        fill-opacity="0.02"
      />
      <rect
        x="0.49176"
        y="0.890198"
        width="31"
        height="31"
        rx="5.9"
        stroke="white"
        stroke-opacity="0.09"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9918 16.3901C17.8806 16.3901 19.4118 14.8589 19.4118 12.9701C19.4118 11.0813 17.8806 9.5501 15.9918 9.5501C14.1029 9.5501 12.5718 11.0813 12.5718 12.9701C12.5718 14.8589 14.1029 16.3901 15.9918 16.3901ZM15.9918 17.5301C18.5102 17.5301 20.5518 15.4885 20.5518 12.9701C20.5518 10.4517 18.5102 8.4101 15.9918 8.4101C13.4733 8.4101 11.4318 10.4517 11.4318 12.9701C11.4318 15.4885 13.4733 17.5301 15.9918 17.5301Z"
        fill="white"
        fill-opacity="0.6"
      />
      <path
        d="M14.2817 18.6701C12.0781 18.6701 10.2917 20.4564 10.2917 22.6601V23.8001C10.2917 24.1149 10.5469 24.3701 10.8617 24.3701C11.1766 24.3701 11.4317 24.1149 11.4317 23.8001V22.6601C11.4317 21.0861 12.7077 19.8101 14.2817 19.8101H17.7017C19.2758 19.8101 20.5517 21.0861 20.5517 22.6601V23.8001C20.5517 24.1149 20.8069 24.3701 21.1217 24.3701C21.4366 24.3701 21.6917 24.1149 21.6917 23.8001V22.6601C21.6917 20.4564 19.9053 18.6701 17.7017 18.6701H14.2817Z"
        fill="white"
        fill-opacity="0.6"
      />
    </svg>
  );
}
