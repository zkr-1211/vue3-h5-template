/**
* 数字金额转汉字金额
* val为字符串类型
*/

export const useToChinese = (val: any): string => {
  // 汉字的数字
  const cnNums: string[] = [
    '零',
    '壹',
    '贰',
    '叁',
    '肆',
    '伍',
    '陆',
    '柒',
    '捌',
    '玖'
  ];
  // 基本单位
  const cnIntRadice: string[] = ['', '拾', '佰', '仟'];
  // 对应整数部分扩展单位
  const cnIntUnits: string[] = ['', '万', '亿', '兆'];
  // 对应小数部分单位
  // const cnDecUnits = ["角", "分", "毫", "厘"];
  // 整数金额时后面跟的字符
  const cnInteger: string = ''; // 整
  // 整型完以后的单位
  const cnIntLast: string = '点';
  // 最大处理的数字
  const maxNum: number = 99999.99;
  // 金额整数部分
  let integerNum: string;
  // 金额小数部分
  let decimalNum: string;
  // 输出的中文金额字符串
  let chineseStr: string = '';
  // 分离金额后用的数组，预定义
  let parts: string[];

  if (val === '' || val == undefined) {
    return '';
  }

  val = parseFloat(val);

  if (val > maxNum) {
    // 超出最大处理数字
    return '';
  }
  if (val === 0) {
    // chineseStr = cnNums[0] + cnIntLast + cnInteger;
    chineseStr = cnNums[0];
    return chineseStr;
  }
  // 转换为字符串
  val = val.toString();
  if (val.indexOf('.') === -1) {
    integerNum = val;
    decimalNum = '';
  } else {
    parts = val.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }

  // 获取整型部分转换
  if (parseInt(integerNum, 10) >= 0) {
    let zeroCount: number = 0;
    const IntLen: number = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      const n: string = integerNum.substr(i, 1);
      const p: number = IntLen - i - 1;
      const q: number = p / 4;
      const m: number = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        // 归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }

    if (parseInt(integerNum, 10) === 0) {
      // 零点几的情况
      chineseStr += cnNums[0] + cnIntLast;
    } else if (decimalNum) {
      // todo判断0.00的情况
      chineseStr += cnIntLast;
    }
  }

  // 小数部分
  if (decimalNum !== '') {
    const decLen: number = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      const n: string = decimalNum.substr(i, 1);
      if (n !== '0') {
        chineseStr += cnNums[Number(n)]; // + cnDecUnits[i]
      }
    }
  }

  console.log(decimalNum, '===chineseStr=', chineseStr);

  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
};
