export default function PageDesign(  ) {
    return (
        <div
  className="relative flex size-full min-h-screen flex-col bg-[#101823] dark group/design-root overflow-x-hidden"
  style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
>
  <div className="layout-container flex h-full grow flex-col">
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      
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