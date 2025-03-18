<script setup lang="ts">
const emits = defineEmits(["close"])
const handleCloseBtn = () => {
  emits("close")
}
</script>

<template>
<!--隐私政策-->
  <div class="privacy-policy">
    <div class="privacy-policy-modal">
      <div class="modal-con">
        <p class="title">隐私政策</p>
        <p><span style="font-family: Calibri,serif;"><span
            style="font-family: '宋体',serif;">本版本更新日期：【</span>202</span><span
            style="font-family: '宋体',serif;">4</span><span style="font-family: Calibri,serif;"><span
            style="font-family: '宋体',serif;">】年【</span> 09 <span
            style="font-family: '宋体',serif;">】月【 </span><span
            style="font-family: Calibri,serif;">05 </span><span
            style="font-family: '宋体',serif;">】日</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style=""><span style="font-family: Calibri,serif; "><span
                  style=" font-family: '宋体',serif;">本版本生效日期：【</span>202</span><span
                  style="font-family: '宋体',serif; ">4</span><span style="font-family: Calibri,serif; "><span
                  style=" font-family: '宋体',serif;">】年【</span> 09 <span
                  style=" font-family: '宋体',serif;">】月【 </span><span
                  style=" font-family: Calibri,serif;">05 </span><span
                  style=" font-family: '宋体',serif;">】日</span></span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">引言</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span
            style="font-family:'宋体',serif;">广州蓝鼎网络有限公司</span><span
            style="font-family:Calibri,serif;"><span
            style="font-family:'宋体',serif">非常重视用户的隐私和个人信息保护。您在使用我们的产品与</span>/<span
            style="font-family:'宋体',serif">或服务时，我们可能会收集和使用您的相关信息。我们希望通过《隐私政策》（以下简称</span><span
            style="font-family:Calibri,serif">“</span><span style="font-family:'宋体',serif">本隐私政策</span><span
            style="font-family:Calibri,serif">”</span><span
            style="font-family:'宋体',serif">）向您说明我们在您使用我们的产品与</span><span
            style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务时如何收集、使用、保存、共享、保护和转让这些信息，以及我们为您提供的访问、更新、删除和保护这些信息的方式。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">在您开始使用我们的产品和服务前，请您务必先仔细阅读和理解本隐私政策，特别应重点阅读我们以字体加粗</span>/<span
                  style="font-family:'宋体',serif">下划线标识的条款，确保您充分理解和同意之后再开始使用。本隐私政策中涉及的专业词汇，我们尽量以简明通俗的表述向您解释，以便于您理解。如对本隐私政策内容有任何疑问、意见或建议，您可通过本隐私政策文末的联系方式与我们联系。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">本隐私政策将帮助您了解以下内容：</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">1<span
              style="font-family:'宋体',serif">、我们如何收集和使用您的个人信息</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">2<span
              style="font-family:'宋体',serif">、我们如何使用 </span><span
              style="font-family:Calibri,serif">Cookie </span><span
              style="font-family:'宋体',serif">和同类技术</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、我们如何共享、转让、公开披露您的个人信息</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">4<span
              style="font-family:'宋体',serif">、我们如何保护和保存您的个人信息</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif,serif;">5<span
              style="font-family:'宋体',serif">、您如何管理个人信息</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">6<span
              style="font-family:'宋体',serif">、未成年人信息的保护</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">7<span
              style="font-family:'宋体',serif">、通知和修订</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">8<span
              style="font-family:'宋体',serif">、如何联系我们</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">&nbsp;</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">本隐私政策与您所使用的我们服务以及该服务所包括的各种业务功能（以下统称</span>“<span
                  style="font-family:'宋体',serif">我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务</span><span
                  style="font-family:Calibri,serif">”</span><span
                  style="font-family:'宋体',serif">）息息相关，希望您在使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务前仔细阅读并确认您已经充分理解本隐私政策所写明的内容，并让您可以按照本隐私政策的指引做出您认为适当的选择。本隐私政策中涉及的相关术语，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您更好地理解。您使用或在我们更新本隐私政策后（我们会及时提示您更新的情况）继续使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span
                  style="font-family:'宋体',serif">或服务，即意味着您同意本隐私政策</span><span
                  style="font-family:Calibri,serif">(</span><span
                  style="font-family:'宋体',serif">含更新版本</span><span
                  style="font-family:Calibri,serif">)</span><span style="font-family:'宋体',serif">内容，并且同意我们按照本隐私政策收集、使用、保存和共享您的相关信息。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">请您特别注意：本隐私政策适用于我们提供的产品或服务。如我们或我们关联公司的产品或服务中使用了我们提供的产品或服务但未设置独立隐私政策的，则本隐私政策同样适用于该部分产品或服务（包括、微信公众号、微信小程序等以及随技术发展出现的新形态）。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;"><br/></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">一、我们如何收集和使用您的个人信息</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">个人信息是指以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">敏感个人信息是指一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的个人信息，包括生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹等信息，以及不满十四周岁未成年人的个人信息。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">我们会遵循正当、合法、必要的原则，出于本隐私政策所述的以下目的，收集和使用您在使用产品与</span>/<span
                  style="font-family:'宋体',serif">或服务过程中主动提供或因使用产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务而产生的个人信息，以及从第三方获取您的相关个人信息。如果我们要将您的个人信息用于本隐私政策未载明的其它用途，或将基于特定目的收集而来的信息用于其他目的，我们将以合理的方式向您告知，并在使用前再次征得您的同意。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif"><br/></span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span
              style=" font-family: '宋体',serif;">（一）您须授权我们收集和使用您个人信息的情形</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">我们的产品与</span>/<span
                  style="font-family:'宋体',serif">或服务包括核心业务功能和附加功能。我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务包括一些核心功能，这些功能包含了实现网上购物或获得服务、参与活动所必须的功能、改进我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务所必须的功能及保障交易安全所必须的功能。我们可能会收集、保存和使用下列与您有关的信息才能实现上述这些功能。如果您不提供相关信息，您将无法享受我们提供的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span
                  style="font-family:'宋体',serif">或服务。这些功能包括：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">1、<span
              style="font-family:'宋体',serif">实现网上购物</span></span><span
              style="font-family:'宋体',serif;">、活动参与</span><span
              style=" font-family: '宋体',serif;">所必须的功能</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
              style="font-family:'宋体',serif">）用户</span></span><span
              style="font-family:'宋体',serif;">信息收集</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">当您</span><span style="font-family:'宋体',serif;"><span
            style="font-family:'宋体',serif">提交您的个人信息时（包括手机号、姓名、银行客户号、微信</span>OpenID<span
            style="font-family:'宋体',serif">、支付宝账号等信息）</span></span><span
            style=" font-family: '宋体',serif;">，您需要至少向我们提供您准备使用的您本人的手机号码，我们将通过发送短信验证码</span><span
            style="font-family:'宋体',serif;">&nbsp;</span><span style="font-family:Calibri,serif;">①</span><span
            style="font-family:'宋体',serif;">用于</span><span style="font-family:Calibri,serif;"><span
            style="font-family:'宋体',serif">验证您的身份是否有效；</span>②<span
            style="font-family:'宋体',serif">用于登录</span></span><span
            style="font-family:'宋体',serif;">、报名参加优惠券派发活动</span><span
            style=" font-family: '宋体',serif;">。这些信息将被上传并存储在我们的服务器中。</span><span
            style="font-family:'宋体',serif;">我们将用来查询您是否符合资格，并根据活动规则给您派发相应的奖励。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（</span><span
              style="font-family:'宋体',serif;">2</span><span
              style=" font-family: '宋体',serif;">）用户注册、登录</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">您首先需要注册一个我们账户成为我们用户。当您注册时，您需要至少向我们提供您准备使用的您本人的手机号码，我们将通过发送短信验证码</span>①<span
                  style="font-family:'宋体',serif">验证您的身份是否有效；</span><span
                  style="font-family:Calibri,serif">②</span><span style="font-family:'宋体',serif">用于登录您注册的我们账户。您的账号默认为您的注册手机号码，您可以在账户设置</span><span
                  style="font-family:Calibri,serif">→</span><span style="font-family:'宋体',serif">我的资料栏中补充填写您的地址、生日、昵称、上传头像，用于对您的账户进行个性化设置。这些信息将被上传并存储在我们的服务器中。您可以随时修改、删除该等信息，这些信息均属于您的</span><span
                  style="font-family:Calibri,serif">“</span><span style="font-family:'宋体',serif">账户信息</span><span
                  style="font-family:Calibri,serif">”</span><span style="font-family:'宋体',serif">。如果您不提供这些补充信息，不会影响您网上购物的基本功能。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（</span><span
              style="font-family:'宋体',serif;">3</span><span
              style=" font-family: '宋体',serif;">）商品信息展示和搜索</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">您可以通过搜索来精准地找到您所需要的商品或服务。我们会保留您的搜索内容以方便您重复输入或为您展示与您搜索内容相关联的商品。请您注意，您的搜索关键词信息无法单独识别您的身份，不属于您的个人信息，我们有权以任何的目的对其进行使用；为了向您提供更加优质的商品和搜索推荐服务，我们可能会将您的搜索关键词信息与您的其他个人信息相互结合，用于识别您的身份。只有当您的搜索关键词信息与您的其他信息相互结合使用并可以识别您的身份时，则在结合使用期间，我们会将您的搜索关键词信息作为您的个人信息，与您的搜索历史记录一同按照本隐私政策对其进行处理与保护。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（</span><span
              style="font-family:'宋体',serif;">4</span><span
              style=" font-family: '宋体',serif;">）交付产品或服务功能</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">在当您下单并选择在线完成支付后，我们或其关联方将通过与其合作的第三方公司或供应商（包括但不限于顺丰、圆通等物流公司；京东、爱奇艺、优酷、运营商、财付通等话费、会员、预付卡、立减金供应商）为您完成商品</span>/<span
                  style="font-family:'宋体',serif">服务配送</span><span style="font-family:Calibri,serif">/</span><span
                  style="font-family:'宋体',serif">安装或充值。您知晓并同意我们或其关联方或与我们合作的第三方公司会在上述环节内使用您的订单信息以保证您的订购的商品能够安全送达或交付。对于第三方公司或供应商收集、存储、使用您的个人信息的方式和规则，您可以参阅相应第三方公司或供应商的隐私政策或相关文件。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（</span><span
              style="font-family:'宋体',serif;">5</span><span
              style=" font-family: '宋体',serif;">）客服与售后功能</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">我们的电话客服和售后功能会使用您的账号信息和订单信息。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">为保证您的账号安全，我们的呼叫中心客服和在线客服会使用您的账号信息与您核验您的身份。当您需要我们提供与您订单信息相关的客服与售后服务时，我们将会查询您的订单信息。您有可能会在与我们的客服人员沟通时，提供给出上述信息外的其他信息，如当您要求我们变更配送地址、联系人或联系电话。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">2<span
              style="font-family:'宋体',serif">、保障交易安全所必须的功能</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span
                  style="font-family:'宋体',serif">为提高您使用我们的产品与</span>/<span
                  style="font-family:'宋体',serif">或服务时系统的安全性，更准确地预防钓鱼网站欺诈和保护账户安全，我们可能会通过了解您的浏览信息、订单信息、您的设备信息（设备型号、设备</span><span
                  style="font-family:Calibri,serif">Mac</span><span style="font-family:'宋体',serif">地址、</span><span
                  style="font-family:Calibri,serif">Android ID</span><span
                  style="font-family:'宋体',serif">、</span><span style="font-family:Calibri,serif">Wifi Mac </span><span
                  style="font-family:'宋体',serif">地址、应用进程列表、</span><span
                  style="font-family:Calibri,serif">IMEI</span><span style="font-family:'宋体',serif">设备识别码、操作系统及软件版本、设备状态、网络状况）、日志信息、面部信息、</span><span
                  style="font-family:Calibri,serif">IP</span><span style="font-family:'宋体',serif">地址、</span><span
                  style="font-family:'宋体',serif">、位置信息来判断您的账号风险，并可能会记录一些我们认为有风险的链接（</span><span
                  style="font-family:Calibri,serif">“URL”</span><span style="font-family:'宋体',serif">）；我们也会收集您的设备信息对于我们系统问题进行分析、统计流量并排查可能存在的风险、在您选择向我们发送异常信息时予以排查。如果您不提供上述信息，我们则无法在您使用我们服务过程中对您的服务及账号安全进行保护。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">3<span
              style="font-family:'宋体',serif">、消息通知功能</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">您知悉并同意，对于您在使用我们服务过程中提供您的联系方式（手机号码、电子邮箱），我们在运营过程中可能会向其发送多类通知，用于用户信息告知、身份验证、安全验证、用户使用体验调研用途。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">4<span
              style="font-family:'宋体',serif">、为您提供产品或服务信息展示</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">在您使用我们产品或服务过程中（含后台运行状态），为识别账号异常状态、设备异常状态、了解和</span>/<span
                  style="font-family:'宋体',serif">或优化产品适配性，我们可能会自动收集您的使用情况并存储为网络日志信息，包括：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">设备信息：在您使用我们产品或服务时（含后台运行状态），我们会自动接收并记录您设备上的信息，包括设备型号、地理位置、</span>Android ID<span
                  style="font-family:'宋体',serif">、</span><span style="font-family:Calibri,serif">MAC</span><span
                  style="font-family:'宋体',serif">地址、</span><span style="font-family:Calibri,serif">IMEI</span><span
                  style="font-family:'宋体',serif">独立设备标识符。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">服务日志信息：在您使用我们产品或服务时，我们会自动接收并记录您对我们产品或服务的详细使用情况，作为服务日志保存，包括浏览、点击查看、</span>IP<span
                  style="font-family:'宋体',serif">地址、</span><span
                  style="font-family:'宋体',serif">、电信运营商、访问日期和时间。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">为了帮助我们更好地了解我们产品或服务的运行情况，准确地定位问题，快速地响应和处理异常情况、修复故障，我们可能记录并分析相关信息，包括您使用我们产品或服务的频率、崩溃数据、异常服务数据、异常设备的系统运行状态、总体使用情况、性能数据等。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">系统日志信息：系统日志是记录系统中硬件、软件运行状态的信息，即系统中软件、硬件在运行过程中自动生成的供开发人员调试、参考使用的日志信息。其包含的信息范围会大于上述服务日志信息，这其中可能包含您在使用某些程序、三方应用时所必须的信息，可能包含部分个人信息及敏感个人信息。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">请注意，单独的设备信息、服务日志信息是无法识别特定自然人身份的信息。如果我们将这类非个人信息与其他信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，则在结合使用期间，这类非个人信息将被视为个人信息，除取得您授权或法律法规另有规定外，我们会将这类信息做匿名化或去标识化处理。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">系统日志信息非经您的明确授权、上传确认，我们不会主动搜集，我们仅会在设备系统出现故障，需要开发人员基于系统日志信息对系统进行调试时，才会向您发出申请，由您在评估必要性后主动上传上述信息。我们亦将在调试完成、排除故障后的</span>24<span
                  style="font-family:'宋体',serif">小时内完成对系统日志信息的删除处理。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;"><br/></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span
              style=" font-family: '宋体',serif;">（二）您可选择是否授权我们收集和使用您的个人信息的情形</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、为使您购物更便捷或更有乐趣，从而提升您在我们的网上购物体验，我们的以下附加功能中可能会收集和使用您的个人信息。如果您不提供这些个人信息，您依然可以进行网上购物，但您可能无法使用这些可以为您所带来购物乐趣的附加功能或在购买某些商品时需要重复填写一些信息。这些附加功能包括：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）基于摄像头（相机）的附加功能：您可以使用这个附加功能完成扫码以及人脸识别实名认证的功能。当您使用人脸识别实名认证功能时我们会收集您的面部信息，且在您的授权范围内使用。未来我们可能会将人脸识别技术应用于更多场景，但那时我们会再次与您确认您是否愿意我们使用您的面部信息来实现这些附加功能。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）基于通讯录信息的附加功能：我们将收集您的通讯录信息以方便您在购物时不再手动输入您通讯录中联系人的信息（比如您可以直接为通讯录中的电话号码充值）。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）基于地理位置（位置信息）的附加功能：当您通过系统授权开启移动设备的定位功能并使用基于位置提供的服务时，我们会收集和使用您的位置信息以便为您推荐周边的生活服务（例如您不需要手动输入所在地理位置就可获得相关服务，估算商家与您之间的实际距离方便您进行消费决策，为您推荐附近的服务品类和优惠信息等）。我们会使用有关技术获取您的位置信息（准确度会有所不同），这些技术包括</span><span
                  style="font-family:Calibri,serif">IP</span><span style="font-family:'宋体',serif">地址、</span><span
                  style="font-family:Calibri,serif">GPS</span><span
                  style="font-family:'宋体',serif">以及能够提供相关信息的</span><span style="font-family:Calibri,serif">WLAN</span><span
                  style="font-family:'宋体',serif">（如</span><span style="font-family:Calibri,serif">Wi-Fi</span><span
                  style="font-family:'宋体',serif">）接入点、蓝牙和基站、传感器信息。您可以在移动设备的系统中关闭定位服务停止我们对您所在位置信息的收集，但可能因此无法使用我们基于地理位置为您提供的服务，或者无法达到相关服务的预期效果。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
                  style="font-family:'宋体',serif">）基于剪切板的扩展功能：当您复制商品信息、标题、短信验证码，分享或接收被分享信息时，您的剪切板功能可能会被调用。剪切板信息仅会在您的设备上进行处理，我们不会存储您的剪切板信息用于任何其他途径。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>5<span
                  style="font-family:'宋体',serif">）当您上传头像时，需要您向我们开放相机或照片权限。如您不同意开启这些权限，可能无法进行拍照或上传照片进行头像更换，但不影响您使用我们提供的其他服务。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">上述附加功能可能需要您在您的设备中向我们开启您的地理位置（位置信息）、相机（摄像头）、相册（图片库）以及通讯录的访问权限，以实现这些功能所涉及的信息的收集和使用。您可以在您的设备系统中逐项查看您上述权限的开启状态，并可以决定将这些权限随时的开启或关闭。请您注意，您开启这些权限即代表您授权我们可以收集和使用这些个人信息来实现上述的功能，您关闭权限即代表您取消了这些授权，则我们将不再继续收集和使用您的这些个人信息，也无法为您提供上述与这些授权所对应的功能。您关闭权限的决定不会影响此前基于您的授权所进行的个人信息的处理。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;"><br/></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（三）收集和使用个人信息的其他规则</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、若您提供的信息中含有其他用户的个人信息，在向我们提供这些个人信息之前，您需确保您已经取得合法的授权。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、若我们将信息用于本隐私政策未载明的其他用途，或者将基于特定目的收集而来的信息用于其他目的，均会事先获得您的同意。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">3<span
                  style="font-family:'宋体',serif">、征得授权同意的例外</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">根据相关法律法规规定，以下情形中，我们收集、使用个人信息无需征得您的授权同意：（</span>1<span
                  style="font-family:'宋体',serif">）为订立、履行个人作为一方当事人的合同所必需；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）为履行法定职责或者法定义务所必需；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
                  style="font-family:'宋体',serif">）为公共利益实施新闻报道、舆论监督等行为，在合理的范围内处理个人信息；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>5<span
                  style="font-family:'宋体',serif">）依照《中华人民共和国个人信息保护法》的规定在合理的范围内处理个人自行公开或者其他已经合法公开的个人信息；或</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>6<span
                  style="font-family:'宋体',serif">）法律、行政法规规定的其他情形。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">4<span style="font-family:'宋体',serif">、请知悉，根据适用的法律，若我们对个人信息采取技术措施和其他必要措施进行处理，使得数据接收方无法重新识别特定个人且不能复原，或我们可能会对收集的信息进行去标识化地研究、统计分析和预测，用于改善我们的内容和布局，为商业决策提供产品或服务支撑，以及改进我们的产品和服务（包括使用匿名数据进行机器学习或模型算法训练）。经匿名化或去标识化处理后的个人信息无法与特定自然人直接关联，不属于个人信息。因此，则此类处理后数据的使用无需另行向您通知并征得您的同意。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;"><br/></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（四）我们从第三方获得您个人信息的情形</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">我们可能从第三方获取您授权共享的信息（头像、昵称、手机号码、地理位置及授权页面提示的信息）。我们会将依据与第三方的约定、对个人信息来源的合法性进行确认后，在符合相关法律和法规规定的前提下，使用您的这些个人信息。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;"><br/></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（五）您个人信息使用的规则</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">1<span
                  style="font-family:'宋体',serif">、我们会根据本隐私政策的约定并为实现我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span
                  style="font-family:'宋体',serif">或服务功能对所收集的个人信息进行使用。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、在收集您的个人信息后，我们将通过技术手段对数据进行去标识化处理，去标识化处理的信息将无法识别主体，与特定自然人直接关联。请您了解并同意，在此情况下我们有权使用已经去标识化的信息；并在不透露您个人信息的前提下，我们有权对用户数据库进行分析并予以商业化的利用。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">3<span
                  style="font-family:'宋体',serif">、请您注意，您在使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务时所提供的所有个人信息，除非您删除或通过系统设置拒绝我们收集，否则将在您使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除您的个人信息。在您注销账号后，对于因技术原因确实无法删除或法律、行政法规要求应当由我们继续存储的个人信息，我们将采取措施确保其不被用于除继续存储之外的其他用途。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">4<span
                  style="font-family:'宋体',serif">、我们会对我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务使用情况进行统计，并可能会与公众或第三方共享这些统计信息，以展示我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务的整体使用趋势。但这些统计信息不包含您的任何身份识别信息。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">5<span style="font-family:'宋体',serif">、当我们展示您的个人信息时，我们会采用包括内容替换、匿名处理方式对您的信息进行脱敏，以保护您的信息安全。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">6<span style="font-family:'宋体',serif">、当我们要将您的个人信息用于本隐私政策未载明的其它用途时，或基于特定目的收集而来的信息用于其他目的时，会通过您主动做出勾选的形式事先征求您的同意。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">7<span style="font-family:'宋体',serif">、在我们某些具体服务或功能项下，我们可能还会通过交互文案、产品界面或弹窗等方式向您另行告知处理个人信息的目的、方式或范围，若另行告知的内容与本隐私政策不一致的，以另行告知的内容为准。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif"><br/></span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span
              style="font-family:'宋体',serif">二、我们如何使用</span> Cookie <span style="font-family:'宋体',serif">和同类技术</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（一）</span>Cookies<span
                  style="font-family:'宋体',serif">的使用</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、为实现您联机体验的需求，使您获得更轻松的访问体验。我们会在您的计算机或移动设备上发送一个或多个名为</span><span
                  style="font-family:Calibri,serif">Cookies</span><span
                  style="font-family:'宋体',serif">的小数据文件，指定给您的</span><span
                  style="font-family:Calibri,serif">Cookies </span><span
                  style="font-family:'宋体',serif">是唯一的，它只能被将</span><span style="font-family:Calibri,serif">Cookies</span><span
                  style="font-family:'宋体',serif">发布给您的域中的</span><span
                  style="font-family:Calibri,serif">Web</span><span
                  style="font-family:'宋体',serif">服务器读取。我们向您发送</span><span
                  style="font-family:Calibri,serif">Cookies</span><span style="font-family:'宋体',serif">是为了简化您重复登录的步骤、存储您的购物偏好或您购物车中的商品等数据进而为您提供购物的偏好设置、帮助您优化对广告的选择与互动、帮助判断您的登录状态以及账户或数据安全。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、我们不会将 </span><span
                  style="font-family:Calibri,serif">Cookies </span><span style="font-family:'宋体',serif">用于本隐私政策所述目的之外的任何用途。您可根据自己的偏好管理或删除 </span><span
                  style="font-family:Calibri,serif">Cookies</span><span
                  style="font-family:'宋体',serif">。您可以清除计算机上保存的所有 </span><span
                  style="font-family:Calibri,serif">Cookies</span><span
                  style="font-family:'宋体',serif">，大部分网络浏览器会自动接受</span><span
                  style="font-family:Calibri,serif">Cookies</span><span style="font-family:'宋体',serif">，但您通常可根据自己的需要来修改浏览器的设置以拒绝 </span><span
                  style="font-family:Calibri,serif">Cookies</span><span style="font-family:'宋体',serif">；另外，您也可以清除软件内保存的所有</span><span
                  style="font-family:Calibri,serif">Cookies</span><span style="font-family:'宋体',serif">。但如果您这么做，您可能需要在每一次访问我们网站时亲自更改用户设置，而且您之前所记录的相应信息也均会被删除，并且可能会对您所使用服务的安全性有一定影响。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span
              style="font-family:'宋体',serif"><br/></span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（二）网络</span>Beacon<span
              style="font-family:'宋体',serif">和同类技术的使用</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">除</span> Cookie <span
                  style="font-family:'宋体',serif">外，我们还会在网站上使用网络</span><span
                  style="font-family:Calibri,serif">Beacon</span><span style="font-family:'宋体',serif">等其他同类技术。我们的网页上常会包含一些电子图像（称为</span><span
                  style="font-family:Calibri,serif">&quot;</span><span
                  style="font-family:'宋体',serif">单像素</span><span
                  style="font-family:Calibri,serif">&quot; GIF </span><span
                  style="font-family:'宋体',serif">文件或 </span><span
                  style="font-family:Calibri,serif">&quot;</span><span
                  style="font-family:'宋体',serif">网络 </span><span
                  style="font-family:Calibri,serif">beacon&quot;</span><span
                  style="font-family:'宋体',serif">）。我们使用网络</span><span
                  style="font-family:Calibri,serif">beacon</span><span style="font-family:'宋体',serif">的方式有：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">1<span
                  style="font-family:'宋体',serif">、通过在我们网站上使用网络</span><span
                  style="font-family:Calibri,serif">beacon</span><span
                  style="font-family:'宋体',serif">，计算用户访问数量，并通过访问 </span><span
                  style="font-family:Calibri,serif">cookie </span><span
                  style="font-family:'宋体',serif">辨认注册的我们用户。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、通过得到的</span><span
                  style="font-family:Calibri,serif">cookies</span><span
                  style="font-family:'宋体',serif">信息，为您提供便捷服务。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif"><br/></span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span
              style=" font-family: '宋体',serif;">三、我们如何共享、转让、公开披露您的个人信息</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（一）共享</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、我们不会与我们及其关联方以外的任何公司、组织和个人共享您的个人信息，但以下情况除外：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）事先获得您明确的同意或授权，并向您说明该第三方的联系方式、处理目的、处理方式和共享的个人信息种类；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况下进行提供。在该情况下，我们可能会在未事先征求您同意或授权的情况下，与相应第三方共享您的个人信息；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）在法律法规允许的范围内，为维护我们、我们的关联方或合作伙伴、您或其他我们用户或社会公众利益、财产或安全免遭损害而有必要提供；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
                  style="font-family:'宋体',serif">） 只有共享您的信息，才能实现我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span
                  style="font-family:'宋体',serif">或服务的核心功能或提供您需要的服务；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>5<span
                  style="font-family:'宋体',serif">）应您需求为您处理您与他人的纠纷或争议；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>6<span
                  style="font-family:'宋体',serif">）符合与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>7<span
                  style="font-family:'宋体',serif">）基于学术研究而使用；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>8<span
                  style="font-family:'宋体',serif">）基于符合法律法规的社会公共利益而使用。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、我们可能会将您的个人信息与我们的关联方共享。但我们只会共享必要的个人信息，且受本隐私政策中所声明目的的约束。我们的关联方如要改变个人信息的处理目的，将再次征求您的授权同意。关联方共享情形如下：暂无</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、我们可能会向第三方合作伙伴共享您的订单信息、账户信息、设备信息以及位置信息等个人信息，以保障为您提供的服务顺利完成。但我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的第三方合作伙伴无权将共享的个人信息用于任何其他用途，第三方联系方式及隐私政策（如有）详见第三方自行公示的信息。我们的第三方合作伙伴包括以下类型：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）商品或技术服务的供应商。我们可能会将您的个人信息（收货人姓名、收货地址、联系电话、订单号、订单金额、充值号码）共享给支持我们功能的第三方。这些支持包括为我们的供货或提供基础设施技术服务、物流配送服务、支付服务、数据处理。我们共享这些信息的目的是可以实现我们产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务的核心功能，我们必须与物流服务提供商共享您的订单信息才能安排送货；或者我们需要将您的订单号和订单金额与第三方支付机构共享以实现其确认您的支付指令并完成支付；或者我们需要将您的充值号码与第三方供应商共享以实现产品充值。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）第三方商家。我们必须将您的订单信息与交易有关的必要信息（包括商品名称、订单号、金额、数量、收货人姓名、收货地址、收货人联系方式、充值号码）与第三方商家共享来实现您购买或接受其商品或服务的需求，并促使其可以完成后续的售后服务。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）委托我们进行推广的合作伙伴。有时我们会代表其他企业向使用我们产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务的用户群提供营销推广的服务。我们可能会使用您的个人信息（手机号码、</span><span
                  style="font-family:Calibri,serif">openid</span><span style="font-family:'宋体',serif">、收货地址、地理位置）以及您的非个人信息集合形成的间接用户画像与委托我们进行推广的合作伙伴（</span><span
                  style="font-family:Calibri,serif">“</span><span style="font-family:'宋体',serif">委托方</span><span
                  style="font-family:Calibri,serif">”</span><span style="font-family:'宋体',serif">）共享，但我们仅会向这些委托方提供推广的覆盖面和有效性的信息，而不会提供您的个人身份信息，或者我们将这些信息进行汇总，以便它不会识别您个人。我们可以告知该委托方有多少人看了他们的推广信息或在看到这些信息后购买了委托方的商品，或者向他们提供不能识别个人身份的统计信息，帮助他们了解其受众或顾客；或者我们可能将您的个人信息共享给委托方用于数据分析、对账支撑的目的。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">4<span style="font-family:'宋体',serif">、对我们与之共享个人信息的公司、组织和个人，我们会与其签署严格的保密协定，要求他们按照我们的说明、本隐私政策以及其他任何相关的保密和安全措施来处理个人信息。在个人敏感数据使用上，我们要求第三方采用数据脱敏和加密技术，从而更好地保护用户数据。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">5<span style="font-family:'宋体',serif">、为了遵守法律、执行或适用我们的使用条件和其他协议，或者为了保护我们、您或其他我们客户的权利及其财产或安全，比如为防止欺诈等违法活动和减少信用风险，或者为统计、分析数据而与其他公司和组织交换信息。不过</span><span
                  style="font-family:Calibri,serif">,</span><span style="font-family:'宋体',serif">这并不包括违反本隐私政策中所作的承诺而为获利目的出售、出租、共享或以其它方式披露的个人信息。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;"><br/></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（二）转让</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">1<span
                  style="font-family:'宋体',serif">、事先获得您明确的同意或授权；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况进行提供；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、符合与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">4<span style="font-family:'宋体',serif">、在涉及合并、收购、资产转让或类似的交易时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本隐私政策的约束，否则</span><span
                  style="font-family:Calibri,serif">,</span><span style="font-family:'宋体',serif">我们将要求该公司、组织重新向您征求授权同意。我们会向您告知接收方的名称或者姓名和联系方式。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;"><br/></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（三）公开披露</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们仅会在以下情况下，且采取符合业界标准的安全防护措施的前提下，才会公开披露您的个人信息：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、根据您的需求，在征求您单独的同意后，在您明确同意的披露方式下披露您所指定的个人信息；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求的个人信息类型和披露方式公开披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求必须出具与之相应的法律文件，如传票或调查函。我们坚信，对于要求我们提供的信息，应该在法律允许的范围内尽可能保持透明。我们对所有的请求都进行了慎重的审查，以确保其具备合法依据，且仅限于执法部门因特定调查目的且有合法权利获取的数据。在法律法规许可的前提下，我们披露的文件均在加密密钥的保护之下。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、如果我们确定您出现违反法律法规或严重违反我们相关协议及规则的情况，或为保护我们用户或公众的人身财产安全免遭侵害，我们可能披露关于您的个人信息，包括相关违规行为以及我们已对您采取的措施。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;"><br/></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">四、我们如何保护和保存您的个人信息</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（一）我们保护您个人信息的技术与措施</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们非常重视个人信息安全，并采取一切合理可行的措施，保护您的个人信息：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
            <span style="font-family:Calibri,serif;">1<span
                style="font-family:'宋体',serif">、数据安全技术措施</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">我们会采用符合业界标准的安全防护措施，包括建立合理的制度规范、安全技术来防止您的个人信息遭到未经授权的访问使用、修改，避免数据的损坏或丢失。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span
                  style="font-family:'宋体',serif">我们的网络服务采取了传输层安全协议等加密技术，通过</span>https<span
                  style="font-family:'宋体',serif">等方式提供浏览服务，确保用户数据在传输过程中的安全。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们采取加密技术对用户个人信息进行加密保存，并通过隔离技术进行隔离。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">在个人信息使用时，包含个人信息展示、个人信息关联计算，我们会采用包括内容替换、</span>SHA256<span
                  style="font-family:'宋体',serif">在内多种数据脱敏技术增强个人信息在使用中安全性。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们采用严格的数据访问权限控制和多重身份认证技术保护个人信息，避免数据被违规使用。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们采用代码安全自动检查、数据访问日志分析技术进行个人信息安全审计。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">2<span
                  style="font-family:'宋体',serif">、我们为保护个人信息采取的其他安全措施</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们通过建立数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范个人信息的存储和使用。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们通过信息接触者保密协议、监控和审计机制来对数据进行全面安全控制。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">我们建立数据安全委员会并下设信息保护专职部门、数据安全应急响应组织来推进和保障个人信息安全。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">加强安全意识。我们还会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、我们仅允许有必要知晓这些信息的我们及我们关联方的员工、合作伙伴访问个人信息，并为此设置了严格的访问权限控制和监控机制。我们同时要求可能接触到您个人信息的所有人员履行相应的保密义务。如果未能履行这些义务，可能会被追究法律责任或被中止与我们的合作关系。我们同时要求可能接触到您个人信息的所有人员履行相应的保密义务。如果未能履行这些义务，可能会被追究法律责任或被中止与我们的合作关系。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">4<span style="font-family:'宋体',serif">、我们会采取一切合理可行的措施，确保未收集无关的个人信息。我们只会在达成本隐私政策所述目的所需的期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">5<span style="font-family:'宋体',serif">、互联网并非绝对安全的环境，我们会尽力保护您的个人信息。我们也请您理解，任何安全措施都无法做到无懈可击。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">6<span style="font-family:'宋体',serif">、互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。如果我们的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">7<span
                  style="font-family:'宋体',serif">、安全事件处置</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">在通过我们网站与第三方进行网上商品或服务的交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址等。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">为应对个人信息泄露、损毁和丢失等可能出现的风险，我们制定了多项制度，明确安全事件、安全漏洞的分类分级标准及相应的处理流程。我们也为安全事件建立了专门的应急响应团队，按照安全事件处置规范要求，针对不同安全事件启动安全预案，进行止损、分析、定位、制定补救措施、联合相关部门进行溯源和打击。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们同时将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">8<span style="font-family:'宋体',serif">、如果您对我们的个人信息保护有任何疑问，可通过本隐私政策最下方约定的联系方式联系我们。如您发现自己的个人信息泄密，尤其是您的账户及密码发生泄露，请您立即通过本隐私政策最下方【如何联系我们】约定的联系方式联络我们，以便我们采取相应措施。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;"><br/></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">（二）您个人信息的保存</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、您的个人信息将全被存储于中华人民共和国境内。如您使用跨境交易服务，且需要向境外传输您的个人信息完成交易的，我们会单独征得您的授权同意并要求接收方按照我们的说明、本隐私政策以及其他任何相关的保密和安全措施来处理这些个人信息。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">2<span
                  style="font-family:'宋体',serif">、在您使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务期间，您的个人信息将在为了实现本隐私政策所述目的之期限内保存，同时将结合法律有强制的留存要求期限的规定确定，如《中华人民共和国电子商务法》要求商品和服务信息、交易信息保存时间自交易完成之日起不少于三年。我们判断个人信息的存储期限主要参考以下标准并以其中较长者为准：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）完成与您相关的交易或服务目的、维护相应交易或服务记录，以应对您可能的查询或投诉；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）保证我们为您提供服务的安全和质量；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）您是否同意更长的留存期间；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
                  style="font-family:'宋体',serif">）是否存在关于保留期限的其他特别约定或法律法规规定。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">在超出保存期间后，我们会根据适用法律的要求删除您的个人信息，或进行匿名化处理。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、请您注意，当您成功注销我们账户后，我们将对您的个人信息进行删除或匿名化处理。当您或我们协助您删除相关信息后，因为适用的法律和安全技术限制，我们可能无法立即从备份系统中删除相应的信息，我们将安全地存储您的个人信息并限制对其的任何进一步的处理，直到备份可以删除或实现匿名化。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">4<span
                  style="font-family:'宋体',serif">、对于因技术原因确实无法删除</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">匿名化或法律、行政法规要求应当由我们继续存储的个人信息，我们将采取措施保证其安全，并确保其不被用于除继续存储之外的其他用途。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;"><br/></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">五、您如何管理您的个人信息</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">我们非常重视您对个人信息的关注，并尽全力保护您对于您个人信息访问、更正、删除以及撤回同意的权利，以使您拥有充分的能力保障您的隐私和安全。您的权利包括：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">1<span
              style="font-family:'宋体',serif">、访问和更正您的个人信息</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">除法律法规规定外，您有权随时访问和更正您的个人信息，具体包括：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）您的账户信息：具体路径为：首页</span><span
                  style="font-family:Calibri,serif">--“</span><span style="font-family:'宋体',serif">我的</span><span
                  style="font-family:Calibri,serif">”--”</span><span
                  style="font-family:'宋体',serif">注销账户</span><span style="font-family:Calibri,serif">&quot;</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）对于您在使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务过程中产生的其他个人信息需要访问或更正，请随时联系我们。我们会根据本隐私政策所列明的方式和期限响应您的请求。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）您无法访问和更正的个人信息：除上述列明的信息外，您的部分个人信息我们还无法为您提供访问和更正的服务，这些信息主要是为了提升您的用户体验和保证交易安全所收集的您的设备信息、您使用附加功能时产生的个人信息。上述信息我们会在您的授权范围内进行使用，您无法访问和更正，但您可联系我们进行删除或做匿名化处理。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">2<span
              style="font-family:'宋体',serif">、删除您的个人信息</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span
                  style="font-family:'宋体',serif">您在我们的产品与</span>/<span style="font-family:'宋体',serif">或服务页面中可以直接清除或删除的信息：暂无。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">在以下情形中，您可以向我们提出删除个人信息的请求：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）如果我们处理个人信息的行为违反法律法规；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）如果我们收集、使用您的个人信息，却未征得您的同意；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）如果我们处理个人信息的行为违反了与您的约定；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
                  style="font-family:'宋体',serif">）如果我们终止服务及运营。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。当您从我们的服务中删除信息后，我们可能不会立即备份系统中删除相应的信息，但会在备份更新时删除这些信息。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">3<span
              style="font-family:'宋体',serif">、改变您授权同意的范围或撤回您的授权</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">您可以通过删除信息、关闭设备功能、在手机设置中进行隐私设置等方式改变您授权我们继续收集个人信息的范围或撤回您的授权。您也可以通过注销账户的方式，撤回我们继续收集您个人信息的全部授权。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">请您理解，每个业务功能需要一些基本的个人信息才能得以完成，当您撤回同意或授权后，我们无法继续为您提供撤回同意或授权所对应的服务，也不再处理您相应的个人信息。但您撤回同意或授权的决定，不会影响此前基于您的授权而开展的个人信息处理。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">4<span
              style="font-family:'宋体',serif">、注销账户</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">您可以通过以下方式申请注销您的账户：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）在</span><span style="font-family:Calibri,serif">“</span><span
                  style="font-family:'宋体',serif">我的</span><span style="font-family:Calibri,serif">--</span><span
                  style="font-family:'宋体',serif">注销账户 </span><span style="font-family:Calibri,serif">”</span><span
                  style="font-family:'宋体',serif">提交账户注销申请；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）联系客服，申请注销您的账户。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">关于您注销账户应满足的条件，请详见《账户注销须知》。您注销账户后，我们将停止为您提供产品与</span>/<span
                  style="font-family:'宋体',serif">或服务，并依据您的要求，除法律法规另有规定外，我们将删除您的个人信息，或进行匿名化处理。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">5<span
              style="font-family:'宋体',serif">、获取您的个人信息副本</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">您有权获取您的个人信息副本。如您需要获取我们收集的您的个人信息副本，您随时联系我们。在符合相关法律规定且技术可行的前提下，我们将根据您的要求向您提供相应的个人信息副本。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;">6<span
              style="font-family:'宋体',serif">、响应您的请求</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">如果您无法通过上述方式访问、更正或删除您的个人信息，或您需要访问、更正或删除您在使用我们产品与</span>/<span
                  style="font-family:'宋体',serif">或服务时所产生的其他个人信息，或您认为我们存在任何违反法律法规或与您关于个人信息的收集或使用的约定，您均可以发送电子邮件至</span><span
                  style="font-family:Calibri,serif">76549742@qq.com</span><span style="font-family:'宋体',serif">或通过本协议下方的其他方式与我们联系。为了保障安全，我们可能需要您提供书面请求，或以其他方式证明您的身份，我们将在</span><span
                  style="font-family:Calibri,serif">15</span><span style="font-family:'宋体',serif">个工作日内答复您的请求。对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（包含需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（包含涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span
              style=" font-family: '宋体',serif;">在以下情形中，按照法律法规要求，我们将无法响应您的请求：</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
              style="font-family:'宋体',serif">）与国家安全、国防安全有关的；</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
              style="font-family:'宋体',serif">）与公共安全、公共卫生、重大公共利益有关的；</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
              style="font-family:'宋体',serif">）与犯罪侦查、起诉和审判等有关的；</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
              style="font-family:'宋体',serif">）有充分证据表明您存在主观恶意或滥用权利的；</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>5<span
              style="font-family:'宋体',serif">）响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的。</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:Calibri,serif;"><span
              style="font-family:'宋体',serif"><br/></span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">六、未成年人的个人信息保护</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">1<span
                  style="font-family:'宋体',serif">、我们非常重视对未成年人个人信息的保护。若您是</span><span
                  style="font-family:Calibri,serif">18</span><span
                  style="font-family:'宋体',serif">周岁以下的未成年人，在使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务前，应事先取得您家长或法定监护人的书面同意。我们根据国家相关法律法规的规定保护未成年人的个人信息。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、我们不会主动直接向未成年人收集其个人信息。对于经父母或法定监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、如果有事实证明未成年人并未取得监护人同意的情况下注册使用了我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span style="font-family:'宋体',serif">或服务，我们会与相关监护人协商，并设法尽快删除相关个人信息。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">4<span
                  style="font-family:'宋体',serif">、对于可能涉及的不满</span><span
                  style="font-family:Calibri,serif">14</span><span style="font-family:'宋体',serif">周岁的儿童个人信息，我们进一步采取以下措施予以保障：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）对于收集到的儿童个人信息，我们除遵守本隐私政策关于用户个人信息的约定外，还会秉持正当必要、知情同意、目的明确、安全保障、依法利用的原则，严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用、披露，且不会超过实现收集、使用目的所必须的期限，到期后我们会对儿童个人信息进行删除或匿名化处理。我们会指定专人负责儿童个人信息保护事宜。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）当您作为监护人为被监护的儿童选择使用我们相关服务时，我们可能需要向您收集被监护的儿童个人信息，用于向您履行相关服务之必要。在具体服务中需要向您收集儿童个人信息的，我们会事先取得您的授权同意，并告知您收集的目的和用途。如果您不提供前述信息，您将无法享受我们提供的相关服务。此外，您在使用晒单、评价及问答功能分享商品相关信息时可能会主动向我们提供儿童个人信息，请您明确知悉并谨慎选择。您作为监护人应当正确履行监护职责，保护儿童个人信息安全。若儿童本人需要注册或使用我们的产品与</span><span
                  style="font-family:Calibri,serif">/</span><span
                  style="font-family:'宋体',serif">或服务，您应正确引导并予以监护。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）儿童或其监护人有权随时访问和更正儿童个人信息，还可以向我们提出更正和删除的请求。如您对儿童个人信息相关事宜有任何意见、建议或投诉、举报，请联系我们。我们会随时为您提供帮助。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">&nbsp;</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">七、通知和修订</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、为给您提供更好的服务以及随着我们业务的发展，本隐私政策也会随之更新。但未经您明确同意，我们不会削减您依据本隐私政策所应享有的权利。我们会通过在我们移动端上发出更新版本并在生效前通过网站公告或以其他适当方式提醒您相关内容的更新，也请您访问我们以便及时了解最新的隐私政策。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、对于重大变更，我们还会提供更为显著的通知（如向您提供弹窗提示）。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">本隐私政策所指的重大变更包括但不限于：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）个人信息共享、转让或公开披露的主要对象发生变化；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
                  style="font-family:'宋体',serif">）您参与个人信息处理方面的权利及其行使方式发生重大变化；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>5<span
                  style="font-family:'宋体',serif">）我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>6<span
                  style="font-family:'宋体',serif">）个人信息安全影响评估报告表明存在高风险时。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、如您在本隐私政策更新生效后继续使用我们的服务，即代表您已充分阅读、理解并接受更新后的政策并愿意受更新后的政策约束。我们鼓励您在每次使用我们服务时都查阅本隐私政策。您可以通过</span><span
                  style="font-family:Calibri,serif">“</span><span style="font-family:'宋体',serif">我的</span><span
                  style="font-family:Calibri,serif">-</span><span style="font-family:'宋体',serif">设置</span><span
                  style="font-family:Calibri,serif">-</span><span style="font-family:'宋体',serif">关于我们</span><span
                  style="font-family:Calibri,serif">-</span><span style="font-family:'宋体',serif">隐私协议</span><span
                  style="font-family:Calibri,serif">”</span><span
                  style="font-family:'宋体',serif">中查看本隐私政策。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif"><br/></span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">八、如何联系我们</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">1<span style="font-family:'宋体',serif">、如您对本隐私政策或您个人信息的相关事宜有任何问题、意见或建议，请发送邮件至</span><span
                  style="font-family:'宋体',serif">或拨打我们的客服电话</span></span><span
            style="font-family:'宋体',serif;">400-8808-248</span><span
            style=" font-family: '宋体',serif;">与我们联系。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、我们设立了个人信息保护专职部门，您可以通过发送邮件至</span><span
                  style="font-family:Calibri,serif">76549742@qq.com</span><span style="font-family:'宋体',serif">的方式与我们联系。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、我们会积极进行查证、处理并在十五个工作日内答复。如果您对我们的回复不满意，特别是我们的个人信息处理行为损害了您的合法权益，您还可以向网信、电信、公安及市场监管等监管部门进行投诉或举报。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">4<span style="font-family:'宋体',serif">、如果您对我们的回复不满意，特别是您认为我们的个人信息处理行为损害了您的合法权益，您还可以通过向被告住所地有管辖权的法院提起诉讼来寻求解决方案。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">5<span
                  style="font-family:'宋体',serif">、公司名称：</span></span><span style="font-family:'宋体',serif;">广州蓝鼎网络有限公司</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:'宋体',serif;"><span
              style="font-family:'宋体',serif">联系地址：广州市黄埔区黄埔大道东</span>840<span
              style="font-family:'宋体',serif">号保利鱼珠港</span><span
              style="font-family:Calibri,serif">A1</span><span
              style="font-family:'宋体',serif">栋行信中心</span><span
              style="font-family:Calibri,serif">2401-02</span></span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:'宋体',serif;">联系电话：400-8808-248</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style="font-family:'宋体',serif;"><span
              style="font-family:'宋体',serif">服务时间：工作日</span>9:00-18:00</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">&nbsp;</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">附件：</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <strong><span style=" font-family: '宋体',serif;">账号注销须知</span></strong>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">亲爱的用户：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">您在申请注销流程中点击同意前，应当认真阅读《账号注销须知》（以下称</span>“<span
                  style="font-family:'宋体',serif">《注销须知》</span><span
                  style="font-family:Calibri,serif">”</span><span style="font-family:'宋体',serif">）。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span
                  style=" font-family: '宋体',serif;">请您务必审慎阅读、充分理解《注销须知》中相关条款内容，其中包括：</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">1<span
                  style="font-family:'宋体',serif">、与您约定免除或限制责任的条款；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;">2<span
                  style="font-family:'宋体',serif">、其他以粗体标识的重要条款。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">如您对本《注销须知》有任何疑问，可拨打我们的客服电话</span><span
            style="font-family:'宋体',serif;">400-8808-248</span><span
            style=" font-family: '宋体',serif;">联系客服。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">【特别提示】当您按照注销页面提示填写信息、阅读并同意本《注销须知》及相关条款与条件且完成全部注销程序后，即表示您已充分阅读、理解并接受本《注销须知》的全部内容。阅读本《注销须知》的过程中，如果您不同意相关任何条款和条件约定，请您立即停止账号注销程序。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style=" font-family: '宋体',serif;">我们在此善意地提醒您，您注销账号的行为会给您的售后维权带来诸多不便，且注销本账号后，您的个人信息我们会在我们系统中去除，使其保持不可被检索、访问的状态，或对其进行匿名化处理。</span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
            <span style="font-family:Calibri,serif;">1<span
                style="font-family:'宋体',serif">、如果您仍执意注销账号，您的账号需同时满足以下条件：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）自愿放弃账号在我们产品上的资产和虚拟权益（包括但不限于余额、优惠券、红包等），并确保账号中无无欠款；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）账号内无未完成的订单和服务；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）账号无正在进行中的投诉举报或被投诉举报；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>4<span
                  style="font-family:'宋体',serif">）账号已经解除与其他网站、其他</span><span
                  style="font-family:Calibri,serif">APP</span><span
                  style="font-family:'宋体',serif">、小程序、公众号的授权登录或绑定关系；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>5<span
                  style="font-family:'宋体',serif">）账号当前为有效账号，非冻结状态。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">2<span style="font-family:'宋体',serif">、本账号一旦注销，您的个人信息和相关数据将会在我们系统中去除或匿名化处理，以后将不可检索、访问，请您在操作之前自行备份本账号相关的所有信息和数据。请您保存好订单商品和服务的交易凭证、票据等资料，否则您有可能须支付额外的账号和订单查询费用，或无法享受售后服务。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">3<span style="font-family:'宋体',serif">、在本账号注销期间，如果您的账号涉及争议纠纷，包括但不限于投诉、举报、诉讼、仲裁、国家有权机关调查等，我们有权自行终止该账号的注销而无需另行得到您的同意。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">4<span style="font-family:'宋体',serif">、注销本账号，您将无法再使用本账号，也将无法找回您本账号中及与该账号相关的任何内容或信息，包括但不限于：</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>1<span
                  style="font-family:'宋体',serif">）您将无法登录、使用本账号；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>2<span
                  style="font-family:'宋体',serif">）本账号的个人资料和历史信息（包括但不限于用户名、头像、订单信息等）都将无法找回，请及时保存、备份；</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
              <span style="font-family:Calibri,serif;"><span style="font-family:'宋体',serif">（</span>3<span
                  style="font-family:'宋体',serif">）您通过本账号使用、授权登录或绑定本账号后使用的我们相关或第三方的其他服务的所有记录将无法找回。您将无法再登录、使用前述服务，您曾获得的余额、优惠券、红包及其他卡券等视为您自行放弃，将无法继续使用。您理解并同意，我们无法协助您重新恢复前述服务。请您在提交注销申请前，务必先了解您须解绑的其他相关账号信息，具体可与我们的客服联系。</span></span>
        </p>
        <p style="margin-right:0;margin-left:0;text-indent:0;text-align:justify;text-justify:inter-ideograph;line-height:31px">
          <span style="font-family:Calibri,serif;">5<span style="font-family:'宋体',serif">、注销本账号并不代表本账号注销前的账号行为和相关责任得到豁免或减轻。</span></span>
        </p>
      </div>
    </div>
    <div class="close-btn" @click="handleCloseBtn"></div>
  </div>
</template>

<style scoped lang="less">
.privacy-policy {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 644px;
  height: auto;
  z-index: 2024;

  .privacy-policy-modal {
    width: 644px;
    height: 1085px;
    padding: 15px;
    background: linear-gradient(to bottom, #ebc38f, #e7b87f);
    border-radius: 30px;
    box-sizing: border-box;
  }

  .modal-con {
    padding: 45px 24px 24px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border-radius: 20px;
    background-color: #fff;
    box-sizing: border-box;

    p {
      text-align: justify;
      font-size: 28px;
      line-height: 1.6em;
      color: #2a2a2a;
    }

    .title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      color: #eb822c;
    }

    .h1 {
      font-size: 20px;
      color: #000000;
      font-weight: bold;
    }
  }

  .close-btn {
    margin: 33px auto 0;
    width: 78px;
    height: 78px;
    background: url("@/assets/image/button_close.png") no-repeat;
    background-size: contain;
  }
}
</style>
