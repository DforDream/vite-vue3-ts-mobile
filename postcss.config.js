module.exports = {
  plugins:{
    "postcss-px-to-viewport-8-plugin": {
      unitToConvert: 'px',    // 需要转换的单位
      viewportWidth: 375,     // 设计图的视口宽度
      unitPrecision: 5,       // 单位转换后保留的精度
      propList: ['*'],        // 需要转换的属性 * 全部转换  ['*','!font-size']这种设置font-size不会被转换
      viewportUnit: 'vw',     // 转换后的单位
      fontViewportUnit: 'vw', // 字体使用的单位
      selectorBlackList: [],  // 需要忽略转换的CSS选择器
      minPixelValue: 1,       // 设置最小被转换的单位：小于1px的单位不会被装换
      mediaQuery: true,       // 媒体查询的单位是否被转换
      replace: true,          // 是否直接更换属性值
      exclude: [/node_modules/],     // 忽略某些文件夹下的文件或特定文件
      include: [/src/],     // 只有匹配到的文件才会被转换
      landscape: false,       // 是否添加根据 landscapeWidth 生成的媒体查询条件
      landscapeUnit: 'vw',    // 横屏时使用的单位
      landscapeWidth: 667     // 横屏时使用的视口宽度
    }
  }
}