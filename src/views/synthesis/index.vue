<template>
  <div class="tabs-con">
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab title="活动规则">
        <div class="rule-con">
          <p class="mt-[20px] text-[26px] !text-[red]">
            中国工商银行深圳市分行信用卡持卡客户参与本活动即视为理解并同意本活动的以下活动规则，请知晓。</p>
          <p class="rule_title ">一、活动时间：</p>
          <p class="">2024年11月6日-2024年12月31日<br/>每周一至每周五18:00-24:00</p>
          <div class="line"></div>

          <p class="rule_title ">二、活动对象：</p>
          <p class=" !text-[#0087c6] text-decoration: underline">中国工商银行深圳市分行信用卡客户</p>
          <div class="line"></div>

          <p class="rule_title ">三、活动渠道：</p>
          <p class="">“工银爱购深圳”微信公众号-热门活动-能量补给站</p>
          <div class="line"></div>

          <p class="rule_title ">四、活动内容：</p>
          <p class="">
            活动期间，中国工商银行深圳分行信用卡客户登录“e生活plus”小程序通过参与“一键打卡，元气加码”活动，点击打卡即可有机会领取1张能量券（8元滴滴快车微信立减金、8元美团APP外卖券、5元美团APP饮品券
            ，三选其一），<span>每位客户每个月最多领取2张，每打卡成功1次领取一张能量券。</span>客户在对应场景消费时，<span>使用工商银行深圳市分行信用卡支付即可享受满减优惠。</span>每活动日活动名额有限，先到先得，能量券领完即止。
          </p>
          <div class="line"></div>

          <p class="rule_title t40">五、详细活动规则</p>
          <p class="">1.本活动仅限实名注册<span>“e生活plus”</span>小程序的、并关注了<span>【工银爱购深圳】公众号 </span>的工商银行深圳市分行信用卡客户参与。
          </p>
          <p class="!mt-[20px]">2.同一客户每活动每自然月最多可参与2次领券，其中：</p>
          <p style="color: red;" class="!mt-[30px]">* 第一次领券</p>
          <p>实名注册<span>“e生活plus”小程序</span>的、并关注了<span>【工银爱购深圳】公众号</span>
            的工商银行深圳市分行信用卡客户，完成1次打卡，即可领券。</p>
          <p style="color: red;" class="!mt-[30px]">* 第二次领券</p>
          <p>实名注册<span>“e生活plus”</span>小程序、关注了<span>【工银爱购深圳】公众号</span>，并分享给好友助力。好友助力成功后，当月再完成第2次打卡（总共需要2次打卡），即可领取第二张券。
          </p>
          <p class="!text-[#0087c6] !font-bold !mt-[30px]">* 好友助力成功的标准：</p>
          <p style="color: #0087c6;">①
            好友是深圳工商银行信用卡客户，实名注册“e生活plus”小程序、并关注了【工银爱购深圳】公众号，且首次打卡、领券成功。</p>
          <p style="color: #0087c6;">② 同一中国工商银行深圳市分行信用卡客户仅能为他人助力一次。</p>
          <p class="text-[red]">③ 同一客户、同一天仅能打1次卡，即使好友助力成功，也需次日才能打第2次卡。</p>
          <p class="">
            3.同一身份证号、同一银行卡号、同一客户号、同一微信号、同一手机号码，满足以上任一条件均视为深圳工商银行的同一客户。</p>
          <p>
            4.分享助力需至少邀请1名好友成功参与活动，<span>好友需同为深圳工商银行信用卡客户，且同一客户至多给他人助力一次</span>。
          </p>
          <p>5.能量券包含：<span>8元滴滴快车微信立减金（深圳市地区滴滴快车满10元（含10元）可用）、8元美团APP加餐券（美团APP外卖类消费券满10元（含10元）可用）、5元美团APP饮品券（美团APP饮品类消费券满10元（含10元）可用）</span>。领券成功后，客户可通过【我的权益】查看能量券。在对应的场景消费时，使用中国工商银行深圳市分行信用卡支付时即可享受满减优惠（详见“我的权益”-能量券使用规则）。
          </p>
          <p><span>6.能量券自领取日起7天内（含7天）有效，逾期作废且不予补发。</span></p>
          <p>7.能量券为“满减”属性优惠券，不支持提现，领取后不可转赠、不可找零，不支持叠加使用。</p>
          <p>8.<span class="!text-[red]">注意！</span>参与本活动的客户，如领取的是微信立减金的，使用立减金的微信支付订单，如发生全额退款，且立减金仍在有效期内的，立减金将自动退还给用户。如发生部分退款，用户支付金额将按比例原路退还，立减金将按比例退还给用户，用户可继续使用(因部分退款退还的微信立减金，其使用门槛、有效期以实际显示为准)。如立减金已过期，则不退还给用户。<span>如领取的是美团APP外卖支付券红包或者美团APP饮品支付券红包发生退款的，仅退还客户订单实际支付金额，但能量券（即美团APP外卖支付券红包或者美团APP饮品支付券红包）不予退还</span>。
          </p>
          <p>9.中国工商银行深圳市分行信用卡持卡客户参与此活动即视为理解并同意本活动细则。</p>
          <p>10.活动服务商客服咨询电话：<span>4008808248</span>，服务时间：工作日09:00-12:00,14:00-18:30。</p>
          <div class="line"></div>

          <div class="my-[60px] explain_title">能量券（权益）使用说明</div>
          <p class="rule_title">【重要说明】：</p>
          <p class="">1、本活动仅支持<span>中国工商银行深圳省分行的行用卡</span>客户参与。</p>
          <p>2、本活动所有权益仅限<span>中国工商银行信用卡</span>消费达到指定门槛时抵扣使用。</p>
          <p>3、本活动所有权益一经领取成功到卡包，不支持退换。</p>
          <p>4、<span>每客户每月最多仅能领取2次能量券权益</span>。</p>
          <p>5、<span>能量券权益领取成功后，有效期为7天（含7天）</span>。</p>
          <p>
            6、<span>每月能量券（含滴滴打车快车券、美团APP外卖支付券、美团APP饮品支付券）总数量为5000张，且数量有限，先到先得</span>。
          </p>
          <p>7、如有问题，请咨询服务商广州蓝鼎客服：400-8848-248</p>
          <div class="line"></div>

          <p class="rule_title t60">一、滴滴快车微信立减金（8元打车券） </p>

          <p class="!mt-[30px] !font-bold">【立减金有效期/特别说明】：</p>
          <p>立减金领取后，有效期为：<span>7天（含7天）</span>，过期将无法使用，<span>且过期失效不会有提醒。注意立减金过期自动作废，未使用不退不补，已使用但在过期后发生退款的，立减金不再退回且不补发</span>
          </p>

          <p class="!mt-[30px] !font-bold">【立减金到账查看方法】：</p>
          <p>请到<span class="!text-[#333333]">微信APP -> 我的 -> 卡包 -> 券和礼品卡</span>，中查看立减金到账情况。</p>

          <p class="!mt-[30px] !font-bold">【使用场景/方法】</p>
          <p>
            立减金支持在深圳市地区使用滴滴打车APP、滴滴打车小程序软件<span>“滴滴快车”</span>消费满<span>10元（含10元）</span>，付款选择<span>微信支付</span>，选择<span>中国工商银行深圳市分行信用卡支付</span>时，自动抵扣，详见下方微信立减金的使用攻略。
          </p>

          <p class="!mt-[30px] !font-bold">【微信立减金使用规则】</p>
          <p>1、同一微信ID、同一手机号、同一身份证号、同一设备号符合其一则视为同一用户；</p>
          <p>2、立减金有效期为自领取至微信卡包之日起<span>7天（含7天）</span>内有效，到期后自动失效，滴滴快车选择微信支付选择中国工商银行深圳市分行信用卡消费<span>(大于或等于立减金面额)</span>即可自动抵扣。
          </p>
          <p>3、在中国境内商户使用<span>微信支付</span>即可使用，少数特定商户(包括但不限于:CoCo奶茶、Five Plus、Miss
            Sixty、ochirly、CovenGarden、Denham、孩子王、热风、太平鸟、优衣库、广东电信、星巴克、珠海城建、航联、微众银行、分付、零钱通、理财通、信用卡还款、腾安基金、哔哩哔哩、华为商城、北京市医院管理中心、上海公共交通卡、深圳通、怪兽充电、Apple迪卡侬、同程等)、以及社交支付(如转账、红包、个人收款码支付等)、合单支付(微信支付订单号为44开头的交易)无法使用立减金。
          </p>
          <p>
            4、使用立减金的微信支付订单，如发生全额退款，且立减金仍在有效期内的，立减金将自动退还给用户。如发生部分退款，用户支付金额将按比例原路退还，立减金将按比例退还给用户，用户可继续使用(因部分退款退还的微信立减金，其使用门槛、有效期以实际显示为准)。如立减金已过期，则不退还给用户。</p>
          <p>
            5、微信立减金可在微信卡包中查询，如立减金已过期或已核销则无法在以上路径查询，可在“微信支付”公众号或账单中查看消费记录(使用的立减金会展示在微信支付订单的“使用优惠”处)、或在「券和礼品卡-(右上角)历史记录」中查看已使用及过期立减金记录。</p>
          <div class="line"></div>

          <p class="rule_title t50">二、美团APP外卖支付券（8元加餐券）</p>
          <p class="text-[26px] !text-[#ff0000]">【注意事项】：办理中国工商银行深圳市分行的信用卡时、或者<span
              class="!text-[#ff0000]">“e生活plus”实名认证</span>预留的手机号，需与美团APP绑定的手机号一致，否则领取无法到账成功。
          </p>
          <p class="mt-[30px]">1.【券有效期】 <span>领券成功后7天内（含7天）可用</span>。</p>
          <p>2.【查询路径】 <span>美团APP-我的-红包/卡券-支付券</span>,或者<span>美团外卖App-我的钱包-支付券</span>。</p>
          <p>3.【支付方式】 仅限使用【美团支付-绑定中国工商银行深圳市分行信用卡】支付可用，美团月付不可用。</p>
          <p>4.【使用限制】美团App点外卖消费满10元（含10元）可用。</p>
          <p>5.【其他说明】
            美团支付券红包不可拆分，不可叠加，不可找零，不可转让。如发生退款的，仅限订单金额全额退款，即使支付券在有效期内发生退款的，不退还支付券，且券过期不补发。</p>
          <div class="line"></div>

          <p class="rule_title mt35 t50">三、美团APP茶饮支付券（5元饮品券）</p>
          <p class="!text-[26px] !text-[#ff0000]">【注意事项】：办理中国工商银行深圳市分行的信用卡时、或者<span
              class="!text-[#ff0000]">“e生活plus”实名认证</span>预留的手机号，需与美团APP绑定的手机号一致，否则领取无法到账成功。
          </p>
          <p class="mt-[30px]">1.【券有效期】 <span>领券成功后7天内（含7天）可用</span>。</p>
          <p>2.【查询路径】 <span>美团APP-我的-红包/卡券-支付券</span>,或者<span>美团外卖App-我的钱包-支付券</span>。</p>
          <p>3.【支付方式】 仅限使用【美团支付-绑定中国工商银行深圳市分行信用卡】支付可用，美团月付不可用。</p>
          <p>4.【使用限制】 美团App点饮品消费满10元（含10元）可用。</p>
          <p>5.【其他说明】
            美团支付券红包不可拆分，不可叠加，不可找零，不可转让。如发生退款的，仅限订单金额全额退款，即使支付券在有效期内发生退款的，不退还支付券，且券过期不补发。</p>
          <div class="line"></div>
        </div>
      </van-tab>
      <van-tab title="我的权益">
        <div class="prize-con">
          <template v-if="prizeList.length > 0">
            <div
                class="prize-box"
                v-for="(item, index) in prizeList"
                :key="index"
            >
              <div class="prize-box-l">
                <p class="amount">
                  ￥<span>{{ item.coupon_value }}</span>
                </p>
                <p class="condition">
                  满<span>{{ item.coupon_min }}元可用</span>
                </p>
              </div>
              <div class="line"></div>
              <div class="prize-box-r">
                <div class="">
                  <p class="title">{{ item.title }}</p>
                  <p class="date !font-bold !text-[#333333]">自领取日起7天内有效</p>
                  <p class="my-[4px]">{{ sku_data[item.sku_id]?.title }}</p>
                  <p>{{ item.obtain_time }}</p>
                </div>
                <div>
                  <div :class="btnState[item.obtain_status].class">
                    {{ btnState[item.obtain_status].name }}
                  </div>
                  <div class="viewInstructionsBtn" @click="active= 0">查看说明</div>
                </div>
              </div>
            </div>
          </template>
          <div v-else>
            <div class="foot">
              <p class="title">暂无数据</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="邀请记录">
        <div class="record-list">
          <div class="record-list-header">
            <!--            <div class="item">姓名</div>-->
            <div class="item mobile">电话</div>
            <div class="item">状态</div>
          </div>
          <div class="record-list-con" v-for="(item,index) in recordList" :key="index">
            <!--            <div class="text">{{ item.user_name }}</div>-->
            <div class="text mobile">{{ item.mobile }}</div>
            <div class="text" :class="item.status === 1 ? 'active' : ''">{{ state[item.status].name }}</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getAssistList, getOrderList} from "@/api/user";
import {showFailToast, showToast} from "vant";

const route = useRoute();
const active = ref(0);
const prizeList = ref([
  // {
  //   sku_id: "3135",
  //   title: "滴滴打车立减金",
  //   obtain_time: "发放时间：2024-11-01 12：33",
  //   coupon_value: 8,
  //   coupon_min: 10,
  //   obtain_status: 0
  // },
  // {
  //   sku_id: "3134",
  //   title: "滴滴打车立减金",
  //   obtain_time: "发放时间：2024-11-01 12：33",
  //   coupon_value: 8,
  //   coupon_min: 10,
  //   obtain_status: 1
  // },
  // {
  //   sku_id: "3133",
  //   title: "滴滴打车立减金",
  //   obtain_time: "发放时间：2024-11-01 12：33",
  //   coupon_value: 8,
  //   coupon_min: 10,
  //   obtain_status: 2
  // },
]);
const btnState = ref({
  0: {name: "发放中", class: "prize-box-btn1"},
  1: {name: "领取成功", class: "prize-box-btn2"},
  2: {name: "发放失败", class: "prize-box-btn3"}
});
const sku_data = ref({
  3133: {title: "微信APP-我的-卡包-券和礼品"},
  3134: {title: "美团APP-我的-红包/卡券-支付券,或者美团外卖App-我的钱包-支付券"},
  3135: {title: "美团APP-我的-红包/卡券-支付券,或者美团外卖App-我的钱包-支付券"}
});
const state = ref({
  1: {name: "已助力", class: ""},
  0: {name: "未助力", class: ""},
})
const recordList = ref([
  // {id: 1, user_name: '信息', mobile: 15425144512, status: 1},
  // {id: 2, user_name: '信息2', mobile: 15425144512, status: 0},
  // {id: 3, user_name: '信息3', mobile: 15425144512, status: 1},
  // {id: 4, user_name: '信息4', mobile: 15425144512, status: 0},
  // {id: 5, user_name: '信息5', mobile: 15425144512, status: 1},
  // {id: 6, user_name: '信息6', mobile: 15425144512, status: 0},
  // {id: 7, user_name: '信息7', mobile: 15425144512, status: 1},
])
onMounted(() => {
  active.value = Number(route.query.index);
  if (active.value !== 0) {
    handleOrderList()
    handleAssistList()
  }
});

const onClickTab = () => {
  if (active.value === 1) {
    handleOrderList()
  } else if (active.value === 2) {
    handleAssistList()
  } else {
  }
}

//我的权益
const handleOrderList = () => {
  getOrderList().then(res => {
    if (res.code !== 0) {
      showFailToast(res.msg)
    } else {
      prizeList.value = res.data
    }
  }).catch(error => {
    showFailToast(error.msg)
  })
}

//邀请记录
const handleAssistList = () => {
  getAssistList().then(res => {
    if (res.code !== 0) {
      showFailToast(res.msg)
    } else {
      recordList.value = res.data
    }
  }).catch(error => {
    showFailToast(error.msg)
  })
}
</script>

<style lang="less">
.tabs-con {
  position: relative;
  padding: 0 30px;
  width: 750px;
  height: auto;
  font-size: 30px;
  color: #454545;
  line-height: 1.6em;
  font-weight: 500;
  overflow: hidden;

  .van-tabs {
    --van-tabs-line-height: 90px;
    --van-tab-active-text-color: #000000;
    --van-tab-font-size: 30px;
    --van-tab-line-height: 1.6em;
    --van-tabs-bottom-bar-width: 70px;
    --van-tabs-bottom-bar-height: 12px;
    --van-tabs-bottom-bar-color: #0f5392;
  }

  .van-tab:not(:first-child)::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    bottom: 0; /* 或者指定一个高度 */
    width: 2px; /* 线条宽度 */
    height: 40px;
    background-color: #ededed; /* 线条颜色 */
    pointer-events: none; /* 防止伪元素干扰鼠标事件 */
    z-index: 100; /* 确保线条在内容下方 */
  }
}

.rule-con {
  position: relative;
  margin: 30px auto;
  width: 100%;
  height: 100%;

  p {
    margin: 10px auto;
    line-height: 1.6em;
    font-weight: 500;
    text-align: justify;
    color: #454545;

    span {
      color: #0087c6;
      text-decoration: underline
    }
  }

  .explain_title {
    text-align: center;
    font-size: 36px;
    line-height: 1.6em;
    color: #000000;
    font-weight: 600;
  }

  .rule_title {
    margin: 35px auto 15px;
    position: relative;
    color: #000000;
    font-size: 30px;
    font-weight: 600;
    text-align: left;
    z-index: 10;
  }

  .rule_title.t60::before {
    content: ""; /* 必须设置content属性，即使它是空的 */
    position: absolute; /* 绝对定位，相对于最近的已定位祖先元素 */
    bottom: -4px; /* 顶部位置 */
    left: -4px; /* 左侧位置，这里向左偏移了20px以展示效果 */
    width: 520px; /* 长方形的宽度 */
    height: 24px; /* 长方形的高度 */
    background-color: #a0e0fe; /* 长方形的背景色 */
    border-radius: 40px;
    z-index: -1;
  }

  .rule_title.t50::before {
    content: ""; /* 必须设置content属性，即使它是空的 */
    position: absolute; /* 绝对定位，相对于最近的已定位祖先元素 */
    bottom: -4px; /* 顶部位置 */
    left: -4px; /* 左侧位置，这里向左偏移了20px以展示效果 */
    width: 520px; /* 长方形的宽度 */
    height: 24px; /* 长方形的高度 */
    background-color: #a0e0fe; /* 长方形的背景色 */
    border-radius: 40px;
    z-index: -1;
  }

  .rule_title.t40::before {
    content: ""; /* 必须设置content属性，即使它是空的 */
    position: absolute; /* 绝对定位，相对于最近的已定位祖先元素 */
    bottom: -4px; /* 顶部位置 */
    left: -4px; /* 左侧位置，这里向左偏移了20px以展示效果 */
    width: 250px; /* 长方形的宽度 */
    height: 24px; /* 长方形的高度 */
    background-color: #a0e0fe; /* 长方形的背景色 */
    border-radius: 40px;
    z-index: -1;
  }

  .rule_title::before {
    content: ""; /* 必须设置content属性，即使它是空的 */
    position: absolute; /* 绝对定位，相对于最近的已定位祖先元素 */
    bottom: -4px; /* 顶部位置 */
    left: -4px; /* 左侧位置，这里向左偏移了20px以展示效果 */
    width: 200px; /* 长方形的宽度 */
    height: 24px; /* 长方形的高度 */
    background-color: #a0e0fe; /* 长方形的背景色 */
    border-radius: 40px;
    z-index: -1;
  }

  .line {
    margin: 40px auto;
    width: 100%;
    border: 1px dashed #dcdcdc;
  }
}

.prize-con {
  margin-top: 30px;
  width: 690px;
  height: auto;

  .foot {
    margin: 200px auto 0;

    p {
      text-align: center;
      font-size: 22px;
      line-height: 1.6em;
      font-weight: 500;
      color: #626263;
    }

    .title {
      font-size: 36px;
      color: #626263;
    }
  }

  .prize-box {
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    min-height: 192px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: #fef3f4;
    overflow: hidden;
    /* 上半圆 */

    &::before {
      content: '';
      position: absolute;
      top: -15px; /* 将半圆放置在长方形顶部外部 */
      left: 156px;
      width: 30px; /* 半圆宽度与长方形相同 */
      height: 30px; /* 半圆高度为长方形高度的一半 */
      border-radius: 0 0 100px 100px; /* 创建上半圆 */
      background-color: #ffffff; /* 半圆背景色与长方形相同 */
    }

    /* 下半圆 */

    &::after {
      content: '';
      position: absolute;
      bottom: -15px; /* 将半圆放置在长方形顶部外部 */
      left: 156px;
      width: 30px; /* 半圆宽度与长方形相同 */
      height: 30px; /* 半圆高度为长方形高度的一半 */
      border-radius: 100px 100px 0 0; /* 创建上半圆 */
      background-color: #ffffff; /* 半圆背景色与长方形相同 */
    }

    .line {
      width: 1px;
      min-height: 192px;
      border: 1px dashed #ff6f4b;
    }

    .prize-box-l {
      margin-top: 15px;
      width: 172px;
      height: auto;

      p {
        text-align: center;
        font-size: 24px;
        line-height: 1.6em;
        color: #ff6f4b;
      }

      .amount {
        font-weight: bold;

        span {
          font-size: 72px;
        }
      }

      .condition {
        margin-top: 4px;
      }
    }

    .prize-box-r {
      position: relative;
      padding: 20px 22px 20px 30px;
      flex: 1 1 482px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 482px;
      height: 100%;
      box-sizing: border-box;

      p {
        line-height: 1.4em;
        font-weight: 500;
        font-size: 20px;
        color: #838383;
      }

      .title {
        font-size: 32px;
        line-height: 1.5em;
        font-weight: bold;
        color: #000000;
      }

      .date {
        margin-top: 4px;
      }

      .viewInstructionsBtn {
        margin-top: 20px;
        width: 144px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        color: #ff6f4b;
        font-size: 24px;
        border: 1px solid #ff6f4b;
        background: #ffffff;
        border-radius: 40px;
      }

      .prize-box-btn1 {
        width: 144px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        color: #ffffff;
        font-size: 24px;
        border: 1px solid #0062f6;
        background: #3e8bff;
        border-radius: 40px;
      }

      .prize-box-btn2 {
        width: 144px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        color: #ffffff;
        font-size: 24px;
        font-weight: 600;
        background: #ff6f4b;
        border-radius: 40px;
      }

      .prize-box-btn3 {
        width: 142px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        color: #ffffff;
        font-size: 24px;
        background: #b2b2b2;
        border-radius: 40px;
      }
    }
  }

}

.record-list {
  position: relative;
  margin: 30px auto;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 1px 20px #eaeaea;

  .record-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
      padding: 10px 0;
      flex: 1 1 auto;
      text-align: center;
      line-height: 1.6em;
      color: #000000;
      font-size: 30px;
      font-weight: bold;
    }
  }

  .record-list-con {
    display: flex;
    align-items: center;
    justify-content: space-between;


    .text {
      padding: 16px 0;
      flex: 1 1 33%;
      text-align: center;
      line-height: 1.6em;
      color: #000000;
      font-size: 30px;
      font-weight: 500;

      &.active {
        color: #ff6f4b;
      }

    }
  }

  /* CSS样式 */

  .record-list-con:nth-child(odd) {
    background: #ffffff;
  }

  .record-list-con:nth-child(even) {
    background: #fafafa;
  }
}
</style>
