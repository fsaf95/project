<script setup lang="ts">
const emits = defineEmits(["close"]);
const handleCloseBtn = () => {
  emits("close");
};
</script>

<template>
  <div class="service-agreement-modal">
    <div class="service-agreement-modal_b">
      <div class="service-box">
        <div class="service-title">服务协议</div>
        <div class="service-modal-con">
          <p style="text-align: justify">
            <span style="font-size: 14px">本版本生效日期：</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >【 2024&nbsp;】年【 09 】月【 05 】日</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">【特别提示】</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >您完成注册程序或使用第三方账号登录本平台，使用本平台服务，即视为您已充分阅读、理解本协议，并自愿受本协议的约束。阅读本协议过程中，如果您不同意本协议或其中任何条款，请立即停止注册程序并停止使用本平台服务。本"特别提示"是本协议正文的组成部分。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >在您开始注册或使用本平台前，请您务必先仔细阅读和理解本协议，特别应重点阅读我们以字体加粗/下划线标识的条款，确保您充分理解和同意之后再开始注册或使用。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">1. 定义</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1.1
              本平台：是指广州蓝鼎网络有限公司及其关联公司（以下称我们）经营的互联网平台，包括但不限于客户端、小程序、公众号、H5网站等。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1.2
              用户服务协议：即本协议，指您与我们订立的旨在约定您登录、使用我们平台，以及通过我们平台提交信息、下达订单、购买商品、支付货款、收取商品、获得奖励、获得优惠券等整个购物或获得服务过程中，您与我们之间的权利、义务的书面合同。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1.3
              我们规则：包括所有我们已经发布或将来可能发布、修订的各类规则、规范、通知、公告等。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1.4关联公司：即广州蓝鼎网络有限公司全资或控股子公司。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px">2. 协议范围及变更</span></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2.1
              协议范围。我们规则为本协议不可分割的一部分，与协议正文具有同等法律效力。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2.2
              协议变更。为给您提供更好的服务，我们将根据业务变化，相应调整本协议。我们将按照法律法规规定对修订内容提前进行公示，修订后的协议一经实施，将完全替代修订前的协议。您应当及时关注和了解本协议的修订情况、公告、提示信息等，如果您不同意修订后协议，请您立即停止使用我们平台，否则即视为您同意并完全接受修订后的协议。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px">3. 账户注册与使用</span></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">3.1 用户资格</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >在注册我们用户账户之前，您应当确认并承诺，您具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >此外，您还需确保您不是任何国家、地区或国际组织实施的贸易限制、经济制裁或其他法律法规限制的对象，也未直接或间接为前述对象提供资金、商品或服务，否则您应当停止使用本平台服务，同时您理解违反前述要求可能会造成您无法正常注册及使用本平台服务。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">3.2 账户注册</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序或您使用第三方平台账户登录时授权我们使用该账户信息（微信昵称、微信头像、手机号码），您可获得本平台账户并成为本平台用户。在使用本平台服务时，您应当按本平台页面的提示准确完整地提供您的信息，以便我们与您联系。您了解并同意，您有义务保持您提供信息的真实性及有效性。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">3.3 账户保管</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >您的账户由您自行设置并保管，我们任何时候均不会主动要求您提供您的账户密码。因您保管账号、密码不当而造成的所有后果，将由您自行承担。凡经您的账号和密码成功登录使用我们平台，即视为您的使用行为；您应当对您的账户进行的所有活动及后果负法律责任。您不得以任何形式擅自转让或授权他人使用您的账户，因您主动泄露、出借账户信息或因您遭受他人攻击、诈骗等行为导致的损失及后果，我们并不承担责任，您可以通过司法、行政等救济途径向侵权行为人追偿。</span
            >
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"><br /></span
            ></strong>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"
                >4. 商品及/或服务的购买</span
              ></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">4.1 订单信息的确认</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >当您在我们平台购买商品或服务时，请您务必仔细确认所购商品的名称、价格、数量、型号、规格或服务的时间、内容、限制性要求等重要事项，并在下单时核实您的联系地址、电话、收货人等信息。如您填写的收货人非您本人，则该收货人的行为和意思表示产生的法律后果均由您承担。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">4.2 交易秩序</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >您的购买行为应当基于真实的消费需求，不得实施恶意购买、恶意维权等扰乱我们平台正常交易秩序的行为。基于维护我们平台交易秩序及交易安全的需要，我们发现上述情形时有权采取关闭相关交易订单、限制账户使用功能、中止或终止服务等措施而无需事先通知您。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">4.3 合同的成立与生效</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >您理解并同意：本平台上销售商展示的商品/服务和价格等信息仅仅是要约邀请，您下单时须填写您希望购买的商品数量、价款及充值号码、同额支付方式、收货人、联系方式、收货地址（合同履行地点）、合同履行方式等内容；系统生成的订单信息是计算机信息系统根据您填写的内容自动生成的数据，仅是您向我们或第三方商家发出的合同要约；我们或第三方商家收到您的订单信息后，在我们或第三方商家将您在订单中订购的商品从仓库实际直接向您发出时（以商品出库为标志）或完成充值时，视为您与我们或第三方商家之间就实际直接向您发出的商品建立了合同关系；如果您在一份订单里订购了多种商品并且我们或第三方商家只给您发出了部分商品时，您与我们或第三方商家之间仅就实际直接向您发出的商品建立了合同关系，只有在我们或第三方商家实际直接向您发出了订单中订购的其他商品时，您和我们或第三方商家之间就订单中其他已实际直接向您发出的商品才成立合同关系；对于影视会员、数字音乐、在线手机充值等数字化商品，您下单并支付货款后合同即成立。当您作为消费者为生活消费需要下单并支付货款的情况下，您货款支付成功后即视为您与我们或第三方商家之间就已支付货款部分的订单建立了合同关系。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >尽管我们或第三方商家做出最大的努力，但由于市场变化及各种以合理商业努力难以控制因素的影响，本网站无法避免您提交的订单信息中的商品出现缺货、价格标示错误等情况；如您下单所购买的商品出现以上情况，您有权取消订单，我们或第三方商家亦有权依法、依约取消订单，若您已经付款，则为您办理退款，并提供订单处理方案。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">4.4 商品信息</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >除另有明确说明外，本平台上销售的商品/服务的相关信息部分由第三方商家自行制作、上传，我们尽可能通过与商家签订合作协议及发布平台规则等方式约束商家提供准确、完整、可靠、有效、没有错误和误导性的商品描述。然而，您充分理解，我们平台上存在海量信息，因为互联网技术及人力的局限性，我们不能保证平台上所有商品的信息均准确、完整、可靠、有效、没有错误和没有误导性。除我们有明显过错外，对于因商品信息导致的纠纷，我们不承担任何责任。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">4.5 异常订单的处理</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >我们保留对单个商品的总出售数量进行限制、对单个订单的商品购买数量及同一IP地址对同类商品购买数量进行限制，并对异常订单、异常用户采取监控、限制等措施的权利。如我们发现您通过我们平台下达的订单存在违反法律规定或者本协议约定的异常情形的，我们有权采取关闭相关交易订单、限制账户使用功能、中止或终止服务等措施而无需事先通知您。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">4.6 违规行为的处理</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >如果您使用本平台时存在违反国家法律法规、本协议、侵害他人利益、我们利益或社会公共利益、严重违背社会公德等情形，我们有权采取屏蔽相关信息、中止或终止提供服务等处理措施。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">4.7 法律责任</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >您理解并同意，因您违反本协议或我们规则而产生的第三方索赔请求，由您自行承担法律责任；由此导致我们遭受损失的，您也应当一并赔偿。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px">5. 所有权及知识产权</span></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >5.1
              平台的知识产权。我们提供的服务中包含的任何编码、商标、服务标志、商号、图形、美术品、照片、肖像、文字内容、音频、视频、按钮图标以及计算机软件、标识、数码下载、数据汇编等都是我们或其内容提供者的财产，受到中华人民共和国版权、商标权和其他财产所有权法律法规的保护。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >5.2
              对平台的授权。对于您在任何时间以任何形式向我们提供或在我们平台发表的信息或资料（包括但不限于文字、图片、视频、音频等）相关知识产权，您同意免费授予我们及其关联公司获得全球排他的许可使用权利及再授权给其他第三方使用的权利。您同意我们及其关联公司存储、使用、复制、修订、编辑、发布、展示、翻译、分发您的非个人信息或制作其派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其他作品内。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">6. 用户守则</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >6.1
              禁止行为。您不得进行任何侵犯我们知识产权的行为，或者进行其他有损于我们或其他用户合法权益的行为，包括但不限于：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1) 删除或修改我们平台上的版权信息；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2)
              对我们平台及其中的相关信息擅自出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点，借助我们平台发展与之有关的衍生产品、作品、服务、插件、外挂、兼容、互联等；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >3)
              在我们平台中内置各种插件程序或者其他的第三方程序，或者制作、发布、传播上述程序，而无论是否出于商业目的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >4)
              进行编译、反编译、反向工程或者以其他方式破解我们平台的行为；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >5) 使用我们平台外挂和/或利用我们平台当中的 BUG
              来获得不正当的利益；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >6)
              利用劫持域名服务器等技术非法侵入、破坏我们平台的服务器软件系统，或者修改、增加、删除、窃取、截留、替换我们平台的客户端和或服务器软件系统中的数据，或者非法挤占我们平台的服务器空间，或者实施其他的使之超负荷运行的行为；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >7) 假冒我们或商家在我们平台当中发布任何诈骗或虚假信息；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >8) 利用我们平台故意传播恶意程序或计算机病毒。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >6.2
              信息发布。您应当遵守国家有关法律法规，不得在我们平台当中发表、转发或者传播含有下列内容的信息：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">1) 反对宪法所确定的基本原则的；</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2)
              危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">3) 损害国家荣誉和利益的；</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >4) 煽动民族仇恨、民族歧视，破坏民族团结的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >5) 破坏国家宗教政策，宣扬邪教和封建迷信的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >6) 散布谣言，扰乱社会秩序，破坏社会稳定的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >8) 侮辱或者诽谤他人，侵害他人合法权益的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >9) 含有法律、行政法规禁止的其他内容的。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >6.3
              法律责任。您需要对您在我们平台的言论及行为承担法律责任，若您违反国家法律法规的规定，我们平台的系统记录有可能成为您违反法律法规的证据。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">7. 有限责任</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >7.1
              我们依照法律规定履行基础保障义务，但对于下述原因导致的合同履行障碍、履行瑕疵、履行延后或履行内容变更等情形，我们并不承担相应的违约责任：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1）因自然灾害、罢工、暴乱、战争、政府行为、司法行政命令等不可抗力因素；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2）因电力供应故障、通讯网络故障等公共服务因素或第三人因素；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >3）如因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行原因、第三方服务瑕疵或政府行为等原因，导致无法正常服务；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >4）在我们已尽善意管理的情况下，因常规或紧急的设备与系统维护、设备与系统故障、网络信息与数据安全等因素。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >7.2除法律法规规定外，我们有权单方面地中止或者终止我们平台所提供的服务而无须提前通知您。您理解并同意，我们需要定期或者不定期地对我们平台、设备进行维护或者检修，因此造成的我们服务在合理时间内的中断，我们无需为此承担任何责任，但我们将尽可能事先通知您。</span
            >
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"><br /></span
            ></strong>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"
                >8. 个人信息保护及授权</span
              ></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">8.1 授权收集</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >您充分理解并同意我们可能通过本平台在您自愿选择服务或提供信息的情况下收集您的个人信息，例如您的姓名、电子邮箱、地址、电话号码及其他身份信息等。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">8.2 隐私政策</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >我们非常重视用户个人信息（即能够独立或与其他信息结合后识别用户身份的信息）的保护，在您使用我们提供的服务时，您同意我们按照在本平台上公布的隐私政策收集、存储、使用、披露和保护您的个人信息。如我们其他平台网站或客户端未设独立隐私政策但使用了本平台账号登陆相应网站或客户端的，为保护您的个人信息，我们将参照适用本平台公布的隐私政策的要求对您的个人信息进行收集、存储、使用、披露和保护。我们希望通过隐私政策向您清楚地介绍我们对您个人信息的处理方式，因此我们建议您完整地阅读隐私政策，以帮助您更好地保护您的个人信息。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">8.3 技术的有限性</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >我们将使用各种安全技术和程序防止您及其他用户个人信息的丢失、不当使用、未经授权阅览或披露。但您充分理解并同意：由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">8.4弹窗消息推送</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >在您使用我们平台过程中，我们将在下列情形下使用弹窗形式向您推送消息：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">申请获得您的授权。</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >①如您使用您的微信账号登录本平台，我们会获取您的微信昵称、微信头像、手机号码。如您不同意授权，您可能无法使用本平台全部或部分功能。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >②当您使用本平台"查找附近停车场"、"停车缴费"或您搜索功能时，我们需获取您当时的</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">地理位置，以便为您提供服务。</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >③当您使用本平台"来访"及室内地图具有导航的功能时，我们需获取您当时的地理位置信息及您手机的方向、动作、蓝牙权限，以便为您提供导航服务。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >④当您使用本平台"扫码缴费"、"扫一扫"、拍摄照片功能或人脸识别时，我们需获取您的相机（摄像头）及相册（照片）权限。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >⑤当您使用本平台搜索您附近的商家、服务品类和优惠信息功能时，我们需获取您当时地理位置信息，以便为您提供搜索服务。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >⑥如您在购物或充值时想使用自动填写联系人、联系号码或充值号码功能时，我们需获取您的通讯录权限。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >⑦当您使用本平台存储、消息、上传图片（照片）功能时，我们需获取您的相册（照片）权限。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >⑧当我们想给您发送通知（包括提示、声音、图标标记）时，我们需获取您的通知权限。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">提醒功能。</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >①当您登录或使用本平台时，我们会提醒您阅读并同意本协议及隐私政策。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >②当您注册、登录本平台时，我们会提醒您输入验证码。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >③当本协议或隐私政策更新后，我们会提醒您阅读并同意更新后的本协议及隐私政策。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >④当您使用本平台导航功能但又未授权我们获取您的当时地理位置及/或蓝牙权限时，我们会提醒您定位失败的原因。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >⑤当您完成相应操作步骤或系统存在故障或活动未开始或活动结束等情形，系统会自动发出相应提醒信息，如操作成功、绑定成功、下单完成、系统故障、活动已结束等系统信息。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px">9. 期限、解除和终止</span></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >9.1 期限。本协议自您确认同意之日起生效并长期有效。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >9.2
              账户的注销。您可以按照《隐私政策》公示的方式要求注销账户，终止本协议。注销账户的条件在《隐私政策》中公示。您知晓并理解以下情况：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1)
              注销账户后，您将放弃账户信息以及该账户在我们的资产、虚拟权益等，且我们无法为您恢复前述服务。这可能对您主张售后服务带来不便。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2)
              您注销账户后，您的个人信息在我们前台将不可检索、访问。您知晓并理解，相关交易记录须在法律规定的期限内予以保存。</span
            >
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"><br /></span
            ></strong>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">9.3 协议的终止</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >9.3.1您有权通过以下任一方式终止本协议：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1）在满足本平台《隐私政策》公示的账户注销条件时您通过网站自助服务或联系我们客服注销您的账户的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2）变更事项生效前您停止使用并明示不愿接受变更事项的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >3）您明示不愿继续使用本平台服务，且符合本平台终止条件的。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >9.3.2出现以下情况时，我们可以本协议第12条的所列的方式通知您终止本协议：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1）您违反本协议约定，我们依据本协议约定终止本协议的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2）您盗用他人账户、发布违禁信息、骗取他人财物、售假、扰乱市场秩序、采取不正当手段谋利等行为，本平台依据平台规则对您的账户予以查封的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >3）除上述情形外，因您多次违反本平台规则相关规定且情节严重，本平台依据平台规则对您的账户予以查封的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >5）您在本平台有欺诈、发布或销售假冒伪劣/侵权商品、侵犯他人合法权益或其他严重违法违约行为的；</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">6）其它应当终止服务的情况。</span>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">9.4 后续事项</span></strong>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"
                >本协议终止后，我们仍享有下列权利：</span
              ></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >1)
              自本协议终止或解除之日起，我们将关闭您在本平台的账户权限。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >2)
              本协议终止或解除后，我们有权保留您的注册信息及交易行为记录等数据，但我们不承担在协议终止后向您或第三方提供任何数据信息的义务，也不就协议终止向您或任何第三方承担责任，但法律法规另有规定的除外。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >3)
              本协议终止或解除后，我们仍保留对您过往的违约行为追究责任的权利。</span
            >
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"><br /></span
            ></strong>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">10. 不可抗力</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >由于不可抗力事件导致一方不能及时履行或者不能履行该方在本协议下的任何义务（付款义务除外）的，不构成违约。但是受不可抗力事件影响的一方应立即把不可抗力事件的性质和程度通知对方，并积极采取相应补救措施，以最大程度地减少和避免损失。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px">11. 法律适用及管辖</span></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >11.1
              法律适用。本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国大陆地区法律；如法律无相关规定的，参照商业惯例及/或行业惯例。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >11.2
              约定管辖。对于因本协议而产生的或者与本协议有关的争议，双方均应努力通过友好协商的方式进行解决。协商不成的，任何一方均有权提起诉讼，且双方一致同意由我们住所地有管辖权的人民法院管辖。</span
            >
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"><br /></span
            ></strong>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">12. 通知</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >12.1
              有效联系方式。您在注册本平台账户时所填写的联系电话、电子邮箱地址、联系地址视为您的有效通知地址。若上述信息发生变更您应当及时进行更新，如果因您提供的联系方式不准确，或不及时告知变更后的联系方式，使相关通知（包括但不限于协议变更、法律文书等）无法送达或未及时送达，由您自行承担可能产生的法律后果。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >12.2
              通知送达。我们通过上述联系方式向您发出通知，其中以电子的方式发出的书面通知，包括但不限于在我们平台公告，向您提供的联系电话发送手机短信，向您提供的电邮箱发送电子邮件，向您的我们用户账户发送系统消息以及站内信信息，在发送成功后即视为送达；以纸质载体发出的书面通知，按照提供联系地址交邮后的第五个自然日即视为送达。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >12.3
              法律文书的送达。对于与我们平台有关的任何纠纷，您同意行政、公安、司法等有权机关可以通过手机短信、电子邮件、系统消息或站内信等方式向您送达法律文书，有权机关向上述联系方式发出法律文书即视为送达；若同时采取以上多种方式向您送达法律文书，送达时间以最先送达的为准。您同意上述送达方式适用于行政、仲裁、司法等法定程序全过程。</span
            >
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"><br /></span
            ></strong>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px"
                >13. 未成年人的个人信息保护</span
              ></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >13.1我们非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用我们的产品与/或服务前，应事先取得您家长或法定监护人的书面同意。我们根据国家相关法律法规的规定保护未成年人的个人信息。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >13.2我们不会主动直接向未成年人收集其个人信息。对于经父母或法定监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >13.3如果有事实证明未成年人并未取得监护人同意的情况下注册使用了我们的产品与/或服务，我们会与相关监护人协商，并设法尽快删除相关个人信息。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >13.4对于可能涉及的不满14周岁的儿童个人信息，我们进一步采取以下措施予以保障：</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >（1）对于收集到的儿童个人信息，我们除遵守本隐私政策关于用户个人信息的约定外，还会秉持正当必要、知情同意、目的明确、安全保障、依法利用的原则，严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用、披露，且不会超过实现收集、使用目的所必须的期限，到期后我们会对儿童个人信息进行删除或匿名化处理。我们会指定专人负责儿童个人信息保护事宜。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >（2）当您作为监护人为被监护的儿童选择使用我们相关服务时，我们可能需要向您收集被监护的儿童个人信息，用于向您履行相关服务之必要。在具体服务中需要向您收集儿童个人信息的，我们会事先取得您的授权同意，并告知您收集的目的和用途。如果您不提供前述信息，您将无法享受我们提供的相关服务。此外，您在使用晒单、评价及问答功能分享商品相关信息时可能会主动向我们提供儿童个人信息，请您明确知悉并谨慎选择。您作为监护人应当正确履行监护职责，保护儿童个人信息安全。若儿童本人需要注册或使用我们的产品与/或服务，您应正确引导并予以监护。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >（3）儿童或其监护人有权随时访问和更正儿童个人信息，还可以向我们提出更正和删除的请求。如您对儿童个人信息相关事宜有任何意见、建议或投诉、举报，请联系我们。我们会随时为您提供帮助。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong><span style="font-size: 14px">14. 其他</span></strong>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >14.1
              条款的独立性。如果根据适用的法律认定本协议中的任何条款或者任何条款中的任何部分无效、违法或者不具有可执行性，这种无效、违法或者不具有可执行性不影响本协议中的任何其它条款或者这些条款中的任何其它部分的效力。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >14.2
              平台权利的保留。本协议未明示授权的其他权利仍由我们保留，用户未经我们书面许可不得行使，且我们未行使前述任何权利并不构成放弃权利。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >14.3
              条标的作用。本协议条款的标题仅作参考使用，不界定、影响或限制本协议条款的含义、描述及解释。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">14.4协议的变更。</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >我们可根据国家法律法规变化及维护交易秩序需要，不时修改本协议，变更后的协议将通过法定程序并以本协议第12条约定的方式通知您。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >如您不同意变更事项，您有权于变更事项确定的生效日前联系我们反馈意见。如反馈意见得以采纳，我们将酌情调整变更事项。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >如您对已生效的变更事项仍不同意的，您应当于变更事项确定的生效之日起停止使用淘宝平台服务，变更事项对您不产生效力；如您在变更事项生效后仍继续使用淘宝平台服务，则视为您同意已生效的变更事项。</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"><br /></span>
          </p>
          <p style="text-align: justify">
            <strong
              ><span style="font-size: 14px">15.我们的联系方式</span></strong
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px"
              >联系地址：广州市黄埔区黄埔大道东840号保利鱼珠港A1栋行信中心2401-02</span
            >
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">联系电话：400-8808-248</span>
          </p>
          <p style="text-align: justify">
            <span style="font-size: 14px">服务时间：工作日9:00-18:00</span>
          </p>
          <p>
            <br />
          </p>
        </div>
      </div>
    </div>
    <div class="close-btn" @click="handleCloseBtn" />
  </div>
</template>

<style scoped lang="less">
.service-agreement-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 644px;
  height: auto;
  z-index: 2024;

  .service-agreement-modal_b {
    width: 644px;
    height: 1085px;
    padding: 15px;
    background: linear-gradient(to bottom, #ebc38f, #e7b87f);
    border-radius: 30px;
    box-sizing: border-box;
  }

  .service-box {
    padding: 45px 24px 24px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border-radius: 20px;
    background-color: #fff;
    box-sizing: border-box;

    .service-title {
      padding: 0 10px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      color: #eb822c;
    }

    .service-modal-con {
      margin: 20px auto;
      width: 100%;
      height: auto;
      box-sizing: border-box;

      p {
        text-align: justify;
        font-size: 28px;
        line-height: 1.6em;
        color: #2a2a2a;

        span {
          font-family: "宋体", serif;
        }
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
  }

  .modal-con {
    padding: 45px 24px 24px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border-radius: 20px;
    background-color: #fff;
    box-sizing: border-box;

    .modal-t {
      margin-top: 15px;
      font-weight: bold;
    }

    p {
      text-align: justify;
      font-size: 28px;
      line-height: 1.6em;
      color: #2a2a2a;

      span {
        color: red;
      }
    }

    .title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      color: #2a2a2a;
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
