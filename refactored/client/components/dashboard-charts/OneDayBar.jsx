import React from 'react'

const OneDayBar = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Traffic by device</h3>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">Desktop</span>
            </div>
            <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
              Full report
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
          <div id="traffic-by-device" style="min-height: 378.7px;"><div id="apexchartsitovqtvz" className="apexcharts-canvas apexchartsitovqtvz apexcharts-theme-light" style="width: 1110px; height: 378.7px;"><svg id="SvgjsSvg1854" width="1110" height="378.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1856" className="apexcharts-inner apexcharts-graphical" transform="translate(368, 0)"><defs id="SvgjsDefs1855"><clipPath id="gridRectMaskitovqtvz"><rect id="SvgjsRect1858" width="382" height="400" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskitovqtvz"></clipPath><clipPath id="nonForecastMaskitovqtvz"></clipPath><clipPath id="gridRectMarkerMaskitovqtvz"><rect id="SvgjsRect1859" width="380" height="402" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1860" className="apexcharts-pie"><g id="SvgjsG1861" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle1862" r="115.31951219512197" cx="188" cy="188" fill="transparent"></circle><g id="SvgjsG1863" className="apexcharts-slices"><g id="SvgjsG1864" className="apexcharts-series apexcharts-pie-series" seriesName="Desktop" rel="1" data:realIndex="0"><path id="SvgjsPath1865" d="M 188 10.585365853658516 A 177.41463414634148 177.41463414634148 0 1 1 19.268656109001284 242.82413700203338 L 78.32462647085082 223.6356890513217 A 115.31951219512197 115.31951219512197 0 1 0 188 72.68048780487803 L 188 10.585365853658516 z" fill="rgba(22,189,202,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="252" data:startAngle="0" data:strokeWidth="2" data:value="70" data:pathOrig="M 188 10.585365853658516 A 177.41463414634148 177.41463414634148 0 1 1 19.268656109001284 242.82413700203338 L 78.32462647085082 223.6356890513217 A 115.31951219512197 115.31951219512197 0 1 0 188 72.68048780487803 L 188 10.585365853658516 z" stroke="#ffffff"></path></g><g id="SvgjsG1866" className="apexcharts-series apexcharts-pie-series" seriesName="Tablet" rel="2" data:realIndex="1"><path id="SvgjsPath1867" d="M 19.268656109001284 242.82413700203338 A 177.41463414634148 177.41463414634148 0 0 1 10.585365853658516 188.00000000000003 L 72.68048780487803 188 A 115.31951219512197 115.31951219512197 0 0 0 78.32462647085082 223.6356890513217 L 19.268656109001284 242.82413700203338 z" fill="rgba(253,186,140,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="18" data:startAngle="252" data:strokeWidth="2" data:value="5" data:pathOrig="M 19.268656109001284 242.82413700203338 A 177.41463414634148 177.41463414634148 0 0 1 10.585365853658516 188.00000000000003 L 72.68048780487803 188 A 115.31951219512197 115.31951219512197 0 0 0 78.32462647085082 223.6356890513217 L 19.268656109001284 242.82413700203338 z" stroke="#ffffff"></path></g><g id="SvgjsG1868" className="apexcharts-series apexcharts-pie-series" seriesName="Phone" rel="3" data:realIndex="2"><path id="SvgjsPath1869" d="M 10.585365853658516 188.00000000000003 A 177.41463414634148 177.41463414634148 0 0 1 187.96903530508644 10.585368555837903 L 187.97987294830617 72.68048956129464 A 115.31951219512197 115.31951219512197 0 0 0 72.68048780487803 188 L 10.585365853658516 188.00000000000003 z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="90" data:startAngle="270" data:strokeWidth="2" data:value="25" data:pathOrig="M 10.585365853658516 188.00000000000003 A 177.41463414634148 177.41463414634148 0 0 1 187.96903530508644 10.585368555837903 L 187.97987294830617 72.68048956129464 A 115.31951219512197 115.31951219512197 0 0 0 72.68048780487803 188 L 10.585365853658516 188.00000000000003 z" stroke="#ffffff"></path></g></g></g></g><line id="SvgjsLine1870" x1="0" y1="0" x2="376" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1871" x1="0" y1="0" x2="376" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1857" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend"></div><div className="apexcharts-tooltip apexcharts-theme-dark"><div className="apexcharts-tooltip-series-group" style="order: 3;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(22, 189, 202);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="order: 2;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(253, 186, 140);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(26, 86, 219);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div></div></div>
          {/* <!-- Card Footer --> */}
          <div className="flex items-center justify-between pt-4 lg:justify-evenly sm:pt-6">
            <div>
              <svg className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"></path>
              </svg>
              <h3 className="text-gray-500 dark:text-gray-400">Desktop</h3>
              <h4 className="text-xl font-bold dark:text-white">
                234k
              </h4>
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                  </svg>
                  4% 
                </span>
                vs last month
              </p>
            </div>
            <div>
              <svg className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>
                <path clip-rule="evenodd" fill-rule="evenodd" d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"></path>
              </svg>
              <h3 className="text-gray-500 dark:text-gray-400">Phone</h3>
              <h4 className="text-xl font-bold dark:text-white">
                94k
              </h4>
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-red-600 dark:text-red-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                  </svg>
                  1% 
                </span>
                vs last month
              </p>
            </div>
            <div>
              <svg className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M5 1a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H5zM3.5 4A1.5 1.5 0 015 2.5h10A1.5 1.5 0 0116.5 4v12a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 16V4zm5.25 11.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"></path>
              </svg>
              <h3 className="text-gray-500 dark:text-gray-400">Tablet</h3>
              <h4 className="text-xl font-bold dark:text-white">
                16k
              </h4>
              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-red-600 dark:text-red-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                  </svg>
                  0,6% 
                </span>
                vs last month
              </p>
            </div>
          </div>
        </div>
  )
}

export default OneDayBar