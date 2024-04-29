module.exports = {
  overrides: [
    // 扫描.vue/html文件中的<style>标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ],
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-less', 'stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    // 设置颜色函数的表示方式为传统风格
    'color-function-notation': 'legacy',
    // 否允许空的源
    'no-empty-source': null,
    // 对 at-rule 名称的大小写不作要求
    'at-rule-name-case': null,
    // 允许使用供应商前缀
    'value-no-vendor-prefix': null,
    // 禁用类名命名模式检查
    'selector-class-pattern': null,
    // 禁止未知的规则stylelint-config-standard-less会报错（暂未解决）所以没有引入，直接配置不检测规则
    'at-rule-no-unknown': null,
    // 兼容自定义标签名和默认命名空间
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace']
      }
    ],
    // 空的属性顺序规则，不对属性顺序进行检查
    'order/properties-order': [],
    // 插件'rational-order'规则配置：不强制边框在盒模型属性组中；不强制在属性组之间留空行
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false
      }
    ],
    // 禁止未知的伪类选择器，但忽略 'deep' 伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    // 缩进为 2 个空格
    'indentation': 2,
    // 字符串使用单引号
    'string-quotes': 'single',
    // 禁止出现重复的选择器
    'no-duplicate-selectors': true,
    // 十六进制颜色值使用小写字母
    'color-hex-case': 'lower',
    // 十六进制颜色值使用简写形式（如 #fff 而不是 #ffffff）
    'color-hex-length': 'short',
    // 选择器组合器（如 >, +, ~）后面始终有一个空格
    'selector-combinator-space-after': 'always',
    // 属性选择器的运算符前面不能有空格
    'selector-attribute-operator-space-before': 'never',
    // 属性选择器的运算符后面不能有空格
    'selector-attribute-operator-space-after': 'never',
    // 属性选择器的方括号内部不能有空格
    'selector-attribute-brackets-space-inside': 'never',
    // 声明块的最后一行必须有分号
    'declaration-block-trailing-semicolon': 'always',
    // 单行声明块中只能有一个声明
    'declaration-block-single-line-max-declarations': 1,
    // 声明中的冒号前不能有空格
    'declaration-colon-space-before': 'never',
    // 声明中的冒号后必须有一个空格
    'declaration-colon-space-after': 'always',
    // 注释内容内部必须有空格
    'comment-whitespace-inside': 'always',
    // 伪类选择器的括号内部不能有空格
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // 媒体特征范围运算符前必须有一个空格
    'media-feature-range-operator-space-before': 'always',
    // 媒体特征范围运算符后必须有一个空格
    'media-feature-range-operator-space-after': 'always',
    // 媒体特征的括号内部不能有空格
    'media-feature-parentheses-space-inside': 'never',
    // 媒体特征中的冒号前不能有空格
    'media-feature-colon-space-before': 'never',
    // 媒体特征中的冒号后必须有一个空格
    'media-feature-colon-space-after': 'always',
    // 禁用检查 CSS 选择器的特异性顺序
    'no-descending-specificity': null
  }
};
