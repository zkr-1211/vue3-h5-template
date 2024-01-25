const obj = {
  templateName: '供灯祈福',
  templateSkin: 1,
  templateList: [
    'cop-title',
    'cop-blurb',
    'cop-banner',
    'cop-merit',
    'cop-donaName',
    'cop-donaPhone',
    'cop-donaWish',
    'cop-submitButton'
  ],
  templateContent: {
    'cop-title': {
      value: '灵光宝寺'
    },
    'cop-banner': {
      model: 2,
      value: []
    },

    'cop-bgm': {
      // 资源地址
      value: 'https://scene-star.obs.cn-east-3.myhuaweicloud.com:443/3fabf853-8932-4a66-93e8-c362056ca301.mp3'
    },

    'cop-blurb': {
      value: '灵光宝寺简介/推广/介绍简介/推广/介绍'
    },

    'cop-donaType': {
      name: 'donaType',
      // 是否必填（true-必填，false-非必填）
      require: true,
      // 字段标签，默认：捐赠金额
      label: '捐赠金额',
      // 标题
      title: '捐赠金额',
      // 是否随喜（true-打开，false-关闭）
      manual: true,
      // 自定义随缘金额
      // value: [100, 300, 500, 1000, 10000],
      value: [100, 300, 500, 1000, 99999.99],
      // 自定义随缘金额（大写）
      upper: ['壹圆', '叁圆', '伍圆', '拾圆']
    },

    'cop-merit': {
      title: '功德榜',
      limit: 50,
      field: ['time', 'name', 'type', 'amt'],
      value: [
        {
          time: '2021-01-01',
          name: '张三',
          type: '事业灯',
          amt: 100
        },
        {
          time: '2021-01-01',
          name: '张三',
          type: '事业灯',
          amt: 100
        },
        {
          time: '2021-01-01',
          name: '张三',
          type: '事业灯',
          amt: 100
        },
        {
          time: '2021-01-01',
          name: '张三',
          type: '事业灯',
          amt: 100
        },
        {
          time: '2021-01-01',
          name: '张三',
          type: '事业灯',
          amt: 100
        },
        {
          time: '2021-01-01',
          name: '张三',
          type: '事业灯',
          amt: 100
        }
      ]
    },
    'cop-submit': {
      'cop-donaType': {
        name: 'donaType',
        require: true,
        label: '捐赠类型',
        length: 10,
        list: []
      },
      'cop-donaName': {
        name: 'donaName',
        require: true,
        hide: true,
        label: '祈福姓名',
        length: 10
      },
      'cop-donaPhone': {
        name: 'donaPhone',
        require: true,
        hide: true,
        label: '祈福手机',
        length: 11
      },
      'cop-donaWish': {
        name: 'donaWish',
        hide: true,
        require: true,
        label: '祈福心愿',
        inline: true,
        value: '',
        list: []
      },
      'cop-submitButton': {
        value: '立即捐赠',
        label: '提交按钮'
      }
    }
  }
};

export default obj;
