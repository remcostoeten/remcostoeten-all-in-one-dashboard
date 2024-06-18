import React from 'react'

interface GlowBackgroundProps {
    fill: string
    style: React.CSSProperties
}

export default function GlowBackground({
    fill = '#fff',
    style,
    ...props
}: GlowBackgroundProps) {
    const svgMarkup = encodeURIComponent(`
    <svg  width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_134_5206)">
        <rect width="1440" height="900" fill="#060606"/>
        <g filter="url(#filter0_f_134_5206)">
          <ellipse cx="277.274" cy="383.668" rx="932.75" ry="944.25" transform="rotate(-123.339 277.274 383.668)" fill="url(#paint0_linear_134_5206)"/>
        </g>
        <g filter="url(#filter1_f_134_5206)">
          <ellipse cx="735.902" cy="-440.872" rx="630.75" ry="638" transform="rotate(5.11905 735.902 -440.872)" fill="${fill}"/>
        </g>
        <g filter="url(#filter2_f_134_5206)">
          <ellipse cx="453.039" cy="-600.748" rx="515.25" ry="521.5" transform="rotate(5.11905 453.039 -600.748)" fill="#FFF4D7" fill-opacity="0.8"/>
        </g>
        <g filter="url(#filter3_f_134_5206)">
          <path d="M1427.81 912.798C1667.81 440.951 1411.87 -189.342 539.524 -435.257C1332.69 -25.6495 1291.54 531.872 1177.89 939.926L1427.81 912.798Z" fill="url(#paint1_linear_134_5206)" fill-opacity="0.85"/>
        </g>
        <g filter="url(#filter4_f_134_5206)">
          <path d="M1646.95 699.919C1890.49 417.348 1821.26 -56.9995 1265.61 -371.893C1739.56 41.7148 1617.71 416.335 1471.36 676.484L1646.95 699.919Z" fill="url(#paint2_linear_134_5206)" fill-opacity="0.85"/>
        </g>
        <g filter="url(#filter5_f_134_5206)">
          <path d="M962.394 849.925C1148.1 472.981 938.564 -24.6919 243.678 -211.028C877.376 106.035 850.373 548.963 764.308 873.992L962.394 849.925Z" fill="url(#paint3_linear_134_5206)" fill-opacity="0.7"/>
        </g>
        <g filter="url(#filter6_f_134_5206)">
          <path d="M654.886 880.767C753.746 472.355 440.535 32.4883 -278.274 2.48119C409.388 173.426 -222.639 677.991 -235.608 1013.97L654.886 880.767Z" fill="#060606"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_134_5206" x="-1163.63" y="-1052.67" width="2881.8" height="2872.68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_134_5206"/>
        </filter>
        <filter id="filter1_f_134_5206" x="-394.945" y="-1578.85" width="2261.7" height="2275.96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_134_5206"/>
        </filter>
        <filter id="filter2_f_134_5206" x="-562.293" y="-1622.23" width="2030.66" height="2042.97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_134_5206"/>
        </filter>
        <filter id="filter3_f_134_5206" x="289.523" y="-685.257" width="1473.76" height="1875.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_134_5206"/>
        </filter>
        <filter id="filter4_f_134_5206" x="1015.61" y="-621.893" width="1014.7" height="1571.81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_134_5206"/>
        </filter>
        <filter id="filter5_f_134_5206" x="68.6797" y="-386.028" width="1133.03" height="1435.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="87.5" result="effect1_foregroundBlur_134_5206"/>
        </filter>
        <filter id="filter6_f_134_5206" x="-578.273" y="-297.519" width="1550.96" height="1611.49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_134_5206"/>
        </filter>
        <linearGradient id="paint0_linear_134_5206" x1="33.0243" y1="871.668" x2="277.274" y2="1327.92" gradientUnits="userSpaceOnUse">
          <stop stop-color="#060606"/>
          <stop offset="1" stopColor="#FF3D00"/>
        </linearGradient>
        <linearGradient id="paint1_linear_134_5206" x1="1204.55" y1="211.559" x2="1513.42" y2="968.919" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="1" stopColor="0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_134_5206" x1="1612.01" y1="182.512" x2="1696.11" y2="752.713" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="1" stopColor="0"/>
        </linearGradient>
        <linearGradient id="paint3_linear_134_5206" x1="892.552" y1="528.34" x2="-275.334" y2="-775.975" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="1" stopColor="0"/>
        </linearGradient>
        <clipPath id="clip0_134_5206">
          <rect width="1440" height="900" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `)

    return (
        <div
            className='hero-bg'
            style={{
                backgroundColor: fill,
                backgroundImage: `url('data:image/svg+xml;utf8,${svgMarkup}')`,
                ...style
            }}
            {...props}
        />
    )
}
