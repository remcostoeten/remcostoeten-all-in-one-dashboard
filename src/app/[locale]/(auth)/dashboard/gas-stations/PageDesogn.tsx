export default function PageDesign(  ) {
    return (
        <div
  className="relative flex size-full min-h-screen flex-col bg-[#101823] dark group/design-root overflow-x-hidden"
  style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
>
  <div className="layout-container flex h-full grow flex-col">
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-80">
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#101823] p-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-base font-medium leading-normal">
              Price Finder
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#223249]">
                <div
                  className="text-white"
                  data-icon="House"
                  data-size="24px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium leading-normal">
                  Home
                </p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <div
                  className="text-white"
                  data-icon="GasPump"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium leading-normal">
                  Stations
                </p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <div
                  className="text-white"
                  data-icon="MapTrifold"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium leading-normal">
                  Map
                </p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <div
                  className="text-white"
                  data-icon="Heart"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium leading-normal">
                  Favorites
                </p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2">
                <div
                  className="text-white"
                  data-icon="User"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium leading-normal">
                  Profile
                </p>
              </div>
            </div>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3683f7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">New search</span>
          </button>
        </div>
      </div>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
            Find the best gas prices in your area
          </p>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Search area
        </h3>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              City
            </p>
            <input
              placeholder="San Francisco"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#304769] bg-[#182334] focus:border-[#304769] h-14 placeholder:text-[#8fa7cc] p-[15px] text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              State
            </p>
            <input
              placeholder="CA"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#304769] bg-[#182334] focus:border-[#304769] h-14 placeholder:text-[#8fa7cc] p-[15px] text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Price range
        </h3>
        <div className="@container">
          <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
            <p className="text-white text-base font-medium leading-normal w-full shrink-[3]">
              Price per gallon
            </p>
            <div className="flex h-[38px] w-full pt-1.5">
              <div className="flex h-1 w-full rounded-sm bg-[#304769] pl-[60%] pr-[15%]">
                <div className="relative">
                  <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                    <div className="size-4 rounded-full bg-[#3683f7]" />
                    <p className="text-white text-sm font-normal leading-normal">
                      $1.00
                    </p>
                  </div>
                </div>
                <div className="h-1 flex-1 rounded-sm bg-[#3683f7]" />
                <div className="relative">
                  <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                    <div className="size-4 rounded-full bg-[#3683f7]" />
                    <p className="text-white text-sm font-normal leading-normal">
                      $3.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Gasoline type
        </h3>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#223249] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">
              Unleaded 87
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#223249] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">
              Midgrade 89
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#223249] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">
              Premium 91
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#223249] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">
              Diesel
            </p>
          </div>
        </div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#3683f7] text-white text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Search Stations</span>
          </button>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Results
        </h3>
        <div className="px-4 py-3 @container">
          <div className="flex overflow-hidden rounded-xl border border-[#304769] bg-[#101823]">
            <table className="flex-1">
              <thead>
                <tr className="bg-[#182334]">
                  <th className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                    Station
                  </th>
                  <th className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                    Distance
                  </th>
                  <th className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                    Price
                  </th>
                  <th className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-480 px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#304769]">
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                    Shell
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-240 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    0.3 miles
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-360 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    $3.00
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#223249] text-white text-sm font-medium leading-normal w-full">
                      <span className="truncate">0%</span>
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-t-[#304769]">
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                    Exxon
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-240 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    0.5 miles
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-360 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    $2.95
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#223249] text-white text-sm font-medium leading-normal w-full">
                      <span className="truncate">-1.67%</span>
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-t-[#304769]">
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                    Chevron
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-240 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    0.7 miles
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-360 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    $2.90
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#223249] text-white text-sm font-medium leading-normal w-full">
                      <span className="truncate">-3.33%</span>
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-t-[#304769]">
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                    76
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-240 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    0.9 miles
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-360 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    $2.85
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#223249] text-white text-sm font-medium leading-normal w-full">
                      <span className="truncate">-5.00%</span>
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-t-[#304769]">
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                    Valero
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-240 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    1.1 miles
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-360 h-[72px] px-4 py-2 w-[400px] text-[#8fa7cc] text-sm font-normal leading-normal">
                    $2.80
                  </td>
                  <td className="table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#223249] text-white text-sm font-medium leading-normal w-full">
                      <span className="truncate">-6.67%</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                          @container(max-width:120px){.table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-120{display: none;}}\n                @container(max-width:240px){.table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-240{display: none;}}\n                @container(max-width:360px){.table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-360{display: none;}}\n                @container(max-width:480px){.table-f8ecc1d2-cf71-4f3f-9d25-099ae7f8a918-column-480{display: none;}}\n              "
            }}
          />
        </div>
        <div className="flex items-center justify-center p-4">
          <a href="#" className="flex size-10 items-center justify-center">
            <div
              className="text-white"
              data-icon="CaretLeft"
              data-size="18px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
              </svg>
            </div>
          </a>
          <a
            className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-[#223249]"
            href="#"
          >
            1
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
            href="#"
          >
            2
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
            href="#"
          >
            3
          </a>
          <a href="#" className="flex size-10 items-center justify-center">
            <div
              className="text-white"
              data-icon="CaretRight"
              data-size="18px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}