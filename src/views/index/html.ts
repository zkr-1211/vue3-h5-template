export const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title></title>
  </head>
  <body onload="load()">
  fff
    <form id="form" action="https://wap.dev.psbc.com/mobilebank/CashierDeskStart.do" method="post">
      <input type="hidden" name="MercName" id="MercName" value="青海智尔软件科技有限公司" />
      <input type="hidden" name="MercCode" id="MercCode" value="1100529319992199476" />
      <input type="hidden" name="TransAmt" id="TransAmt" value="1" />
      <input type="hidden" name="OrderNum" id="OrderNum" value="024011510015100000000000000043" />
      <input type="hidden" name="MercDtTm" id="MercDtTm" value="20240115105518" />
      <input type="hidden" name="MerCustId" id="MerCustId" value="asdf1234poiu" />
      <input
        type="hidden"
        name="Plain"
        id="Plain"
        value="{'PlatMercCode':'1100529319992199476','TransChannl':'01','InstType':'1111110','QpLtAcctType':'1111','GwLtAcctType':'111011','OlLtAcctType':'01','MercDtTm':'20240115105518','OrderNum':'024011510015100000000000000043','MercCode':'8299000007077701045','TransAmt':'1','MercUrl':'http://20.200.26.76:6500/ts/api/channel/thirdpayLargeMerchants','ReSuccUrl':'https://polardaytest.postar.cn/v1/payfly/hhh?code=123&plan=q?out_trade_no=024011510015100000000000000043','OrderUrl':'','Remark1':'','Remark2':'','ValidTime':'30','MercName':'青海智尔软件科技有限公司','BizTp':'110001','OrderTitle':'polarday-payfly&attach','OrderCount':'1','OrderDetail':[{'SubMercCode':'8299000007077701045','SubMercName':'青海智尔软件科技有限公司','TotalAmt':'1','TotalNum':'1','MerUnitDetail':'polarday-payfly&attach^0.01^1'}],'PlfmNm':'','TrxDevcInf':'ABCD:EF01:2345:6789:ABCD:EF01:2345:6789|F0E1D2C3B4A5|010102020303040|01020304050 6070|00112233445566778899|5A4B3C2D1E0F|116.123456,-39.987654|','PyeeAcctIssrId':'C1040311005293','PyeeAcctTp':'05','PyeeAcctId':'933004010015870832','PyeeNm':'青海智尔软件科技有限公司','TerminalIp':'127.0.0.1','MerCustId':'asdf1234poiu','PayEnv':'01','QpTranChnl':'1','GwTranChnl':'1','InterAcctno':'1115602000587641','InterAcctOrganCode':'11005293','DevOrganCode':'44001418','WchatAppId':'','OpenId':'','ReserveParam':'','CreditorWalletName':'漳州片仔癀药业股份有限公司','CreditorWalletId':'0082000010531185','CreditorWalletType':'WT09','CreditorWalletLevel':'WL01','MerCertType':'IT01','MerCerId':'350628199305100011','TradeBizType':'D204','TradeCategoryCode':'00800','AreaInfo':'120101','NativeFlag':'00','PageFlag':'1','AtvFlag':''}"
      />
      <input
        type="hidden"
        name="Signature"
        id="Signature"
        value="3e31dafa65dbafd911a36e4173d7937b0f375dc388cef6d90146d5086d1532e04043cb67a9dcbaf3a5ce0db653c415d70c39592dcbf216bc00697ee4861b96e4f5ace037c4e5cc6fc135d9e1ff1baad67b4d871b785b107334c09bfc5f571403acf499b1626b893a42a761192c1607482ae8ae1c93a2138610338706fe42f71c"
      />
      <input type="hidden" name="OpenFlag" id="OpenFlag" value="11111101111000000000000000000000000000000000000000" />
      <input type="hidden" name="PayChannel" id="PayChannel" value="00" />
      <input type="hidden" name="QPayChannel" id="QPayChannel" value="00" />
      <input type="hidden" name="Flag" id="Flag" value="110110" />
      <input type="hidden" name="MrchntNo" id="MrchntNo" value="010650082990000" />
      <input type="hidden" name="MerType" id="MerType" value="8299" />
      <input type="hidden" name="PayValidityTime" id="PayValidityTime" value="20240115112518" />
      <input type="hidden" name="GlobalBusiTrackNo" id="GlobalBusiTrackNo" value="20240115105518991001430039490001" />
      <input type="hidden" name="SubtxNo" id="SubtxNo" value="99100143003910000000000000000000" />
      <input type="hidden" name="SubMercCode" id="SubMercCode" value="8299000007077701045" />
      <input type="hidden" name="DctDetail" id="DctDetail" value="[]" />
      <input type="hidden" name="NativeFlag" id="NativeFlag" value="00" />
      <input type="hidden" name="PageFlag" id="PageFlag" value="1" />
      <input type="hidden" name="CdFlag" id="CdFlag" value="21" />
      <input type="hidden" name="GatewayFlag" id="GatewayFlag" value="03" />
    </form>
  </body>
  <script type="text/javascript">
    var formDom = document.getElementById('form')
    function load() {
      formDom.submit()
    }
  </script>
</html>`;
