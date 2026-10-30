(function () {
	'use strict';

	var STORAGE_KEY = 'yukimiichie-language';
	var ZH_COUNTRIES = ['JP', 'CN', 'TW', 'SG'];
	var IP_COUNTRY_ENDPOINT = 'https://ipapi.co/country_code/';
	var REQUEST_TIMEOUT_MS = 1800;

	var en = {
		'首頁': 'Home',
		'2026–27 雪季': '2026–27 Winter',
		'隨身紀錄': 'Trip Photography',
		'日式文化': 'Japanese Culture',
		'日式文化體驗': 'Japanese Culture Experiences',
		'會員介紹': 'Membership',
		'會員方案': 'Membership Plans',
		'聯絡諮詢': 'Contact',
		'一路的想像與實現': 'Our Story',
		'與我們聊聊': 'Talk to Us',
		'網站主要導覽': 'Main navigation',
		'主要選單': 'Main menu',
		'雪見一會主題入口': 'Yukimi Ichie highlights',
		'雪見一會品牌首頁': 'Yukimi Ichie home',
		'進入 2026–27 北海道雪季活動頁': 'Explore the 2026–27 Hokkaido winter season',
		'查看 Ski 與 Snowboard 服務': 'Explore ski and snowboard services',
		'查看隨身影像紀錄服務': 'Explore trip photography',
		'查看日本文化體驗服務': 'Explore Japanese cultural experiences',
		'進入雪見一會會員介紹頁': 'Explore Yukimi Ichie membership',
		'主題切換': 'Featured experiences',
		'雪季主題切換': 'Winter highlights',
		'2026–27 北海道雪季主題輪播': '2026–27 Hokkaido winter highlights',
		'查看品牌首頁': 'View the brand introduction',
		'查看 2026–27 北海道雪季': 'View the 2026–27 Hokkaido winter season',
		'查看 2026–27 北海道雪季服務': 'View 2026–27 Hokkaido winter services',
		'查看滑雪體驗': 'View ski and snowboard experiences',
		'查看隨身紀錄拍攝': 'View trip photography',
		'查看日式文化活動': 'View Japanese cultural experiences',
		'查看會員介紹': 'View membership options',
		'雪見一會會員介紹': 'Yukimi Ichie membership',
		'雪場選擇與雪地同行支援': 'Resort selection and on-snow support',
		'前往雪見一會品牌介紹': 'Read the Yukimi Ichie story',
		'雪見一會品牌故事': 'The Yukimi Ichie story',
		'聯絡雪見一會': 'Contact Yukimi Ichie',
		'查看雪見一會雪季服務': 'Explore Yukimi Ichie winter services',
		'了解雪見一會的陪伴理念': 'Learn about our approach to guest support',
		'查看 Ski 與 Snowboard 滑雪服務': 'Explore ski and snowboard services',
		'透過 LINE 加入好友並諮詢': 'Contact Yukimi Ichie on LINE',
		'寄送 Email 至 info@yukimiichie.com': 'Email info@yukimiichie.com',
		'寄送 Email': 'Send us an email',
		'前往雪見一會 Instagram': 'Visit Yukimi Ichie on Instagram',
		'前往雪見一會 Facebook': 'Visit Yukimi Ichie on Facebook',
		'前往 Instagram': 'Visit Instagram',
		'前往 Facebook': 'Visit Facebook',
		'回到頁面最上方': 'Back to top',
		'上一張 Banner': 'Previous banner',
		'下一張 Banner': 'Next banner',
		'滑雪體驗 / 隨身記錄拍攝 / 日式文化活動': 'Ski experiences / travel photography / Japanese culture',
		'滑雪體驗': 'Ski & Snowboard',
		'隨身紀錄拍攝': 'On-Trip Photography',
		'日式文化活動': 'Japanese Cultural Experiences',
		'滑雪體驗支援': 'Snow Experience Support',
		'滑雪教練課程': 'Ski & Snowboard Lessons',
		'滑雪攝影加購': 'Snow Photography Add-on',
		'日本文化體驗': 'Japanese Cultural Experiences',
		'專屬的服務': 'Private, Personalised Experiences',
		'被理解的安心陪伴': 'Support in Your Language',
		'重視安全與體驗品質': 'Safety, Comfort and Quality',
		'Social／Gold 會員介紹': 'Social / Gold Membership',
		'兩種入會方式，共享指定服務會員價格': 'Two ways to join, with the same member pricing on selected services.',
		'加入會員享受最優惠價格': 'Join to access our best member pricing',
		'私人／小團體教學，依照程度與同行成員安排': 'Private or small-group lessons tailored to your level and companions.',
		'把滑行、笑容與同行片刻，留成旅程之後仍能重溫的畫面': 'Keep the runs, smiles and moments together as images you can revisit after the trip.',
		'從茶道、和服到和菓子，感受日本文化的細緻日常': 'Experience the quiet details of Japanese life through tea ceremony, kimono and wagashi.',
		'兩種入會方式，共享指定服務會員價格': 'Two membership options with the same member prices on selected services.',
		'嗨！在尋找專屬於你的': 'Ready to make winter memories',
		'日式回憶？': 'in Japan?',
		'從初雪的驚喜到落日時分的柔光，結合滑雪、雪景攝影與日式文化體驗，讓你在雪國裡走一回屬於自己的心靈旅程。': 'From your first glimpse of fresh snow to the soft glow of sunset, discover Hokkaido through skiing, photography and meaningful encounters with Japanese culture.',
		'踏上粉雪，在雪國靜謐之中，感受身體與心靈逐漸展開的自由。': 'Glide through Hokkaido powder and enjoy the freedom of finding your own rhythm on the snow.',
		'每一個稍縱即逝的片刻，我們以影像細心記錄，留住當下最真實的感動。': 'We capture the laughter, movement and little moments that make your time in Japan unforgettable.',
		'身著和服正坐在日式空間中，握住茶碗的瞬間，細品千年的美感與寧靜。': 'Slow down with tea ceremony, kimono and seasonal traditions, and experience the quiet beauty of Japanese culture.',
		'兩種會員方案，同享指定服務會員價格，依需求選擇適合自己的入會方式。': 'Choose the Social or Gold option that suits you; both receive member prices on selected services.',
		'雪場選擇、雪地同行與現場協助；此項為旅程支援，並非滑雪教學服務。': 'Help choosing a resort, navigating the snow and handling practical details on the day. This is travel support, not ski instruction.',
		'「真正的旅程是深入體驗、不是匆匆走過」的人。從北海道生活體驗中領悟到「一期一會」的珍貴，我們結合文化體驗、影像紀錄、多語支援與全方位旅遊媒合，打造無需做功課、無需煩惱的深度旅遊模式，陪你安心探索日本雪國與文化之美。': 'We believe the best journeys are felt, not rushed. Inspired by the Japanese idea of ichigo ichie—treasuring each once-in-a-lifetime encounter—we combine cultural experiences, photography, multilingual support and thoughtful travel coordination, so you can enjoy Hokkaido without having to plan every detail yourself.',
		'在雪國．遇見．觸及心靈的感動': 'A More Personal Way to Experience Hokkaido',
		'從雪景到茶道，在溫柔陪伴中，體驗專屬自己的雪國生活': 'From powder snow to tea ceremony, enjoy a winter journey shaped around you.',
		'只屬於你與重要的人，安心共享的雪國時光。在這段旅程中，沒有陌生的同團旅客，不受外人的打擾，只有你與朋友、家人，專心投入每一刻滑行與體驗。': 'Share Hokkaido with the people who matter most. Our private arrangements are designed for your own family or friends, without being grouped with strangers.',
		'在雪國的每一個時刻，你不需要擔心語言的距離。我們提供中文、台語、英文與日語的隨身協助，陪你自在溝通、安心體驗，讓你專心感受眼前的風景與當下的感動。': 'Enjoy the journey without worrying about language barriers. Support is available in Mandarin Chinese, Taiwanese, English and Japanese, helping you communicate with confidence throughout your experience.',
		'實際教學與服務內容將依人員安排、現場規範及可預約狀況確認。我們重視體驗品質、服務細節，以及你在雪地上的安全與信任。': 'Lesson and service details are confirmed according to staff availability, local rules and booking availability. We value service quality, careful attention and your safety and trust on the snow.',
		'你可選擇喜歡的方式跟我們聯繫': 'Let’s start planning your Hokkaido experience',
		'告訴我們預計日期、人數、滑雪經驗與感興趣的服務，我們會再與你確認適合的安排。': 'Tell us your dates, group size, ski experience and services of interest. We will follow up to confirm a suitable arrangement.',
		'北海道滑雪': 'Your Hokkaido Winter',
		'一起滑進雪國': 'Starts Here',
		'我們的服務': 'Our Services',
		'精選服務項目與待正式確認的初版參考價格。Social Member 與 Gold Member 在指定服務享有相同會員價格。': 'Explore our core winter services and preliminary pricing. Final availability and rates will be confirmed during consultation. Social and Gold Members receive the same member rate on selected services.',
		'私人與小團體滑雪教學': 'Private and small-group ski or snowboard instruction',
		'私人／小團體滑雪教學，依程度與同行組成討論雙板或單板課程。': 'Private ski or snowboard lessons tailored to your experience level and the people travelling with you.',
		'會員價': 'Member price',
		'一般參考價': 'General reference price',
		'加購價': 'Add-on price',
		'¥68,000 起': 'From ¥68,000',
		'¥120,000 起': 'From ¥120,000',
		'¥18,000 起': 'From ¥18,000',
		'¥30,000 起': 'From ¥30,000',
		'¥15,000／人起': 'From ¥15,000 per person',
		'¥20,000／人起': 'From ¥20,000 per person',
		'茶道和服與和菓子等日本文化體驗': 'Japanese cultural experiences including tea ceremony, kimono and wagashi',
		'茶道、和服、和菓子等文化體驗，實際內容依諮詢與可預約狀況確認。': 'Discover tea ceremony, kimono, wagashi and other Japanese traditions. Available experiences are confirmed during consultation.',
		'滑雪旅程攝影紀錄': 'Snow-trip photography',
		'記錄滑行與同行片刻，須搭配滑雪相關服務，不獨立接受攝影預約。': 'Capture the runs, smiles and moments you share on the mountain. Photography is available only as an add-on to a ski-related service, not as a stand-alone booking.',
		'詢問滑雪課程': 'Plan Your Lesson',
		'詢問體驗支援': 'Ask About Winter Support',
		'詢問文化體驗': 'Explore Cultural Experiences',
		'詢問拍照加購': 'Add Photography',
		'※ 上述金額為待正式確認的初版報價。雪票、裝備、交通、保險及其他費用是否包含，將於正式方案公告時逐項說明。': '※ These are preliminary prices pending final confirmation. Whether lift passes, equipment, transport, insurance and other costs are included will be stated item by item when the final plans are announced.',
		'實際服務地點與內容須依各雪場規範、商業活動相關許可確認結果、天候及可預約狀況安排；送出諮詢不代表預約成立。': 'Actual locations and services depend on resort rules, confirmation of permits for commercial activity, weather and availability. Sending an enquiry does not constitute a confirmed booking.',
		'會員價格資訊銜接': 'Clear Member Pricing',
		'若適用服務提供經確認的會員優惠，將於諮詢時依條件說明。': 'Where a confirmed member benefit applies, its conditions will be explained during consultation.',
		'Social／Gold 會員優惠': 'Social / Gold Member Benefits',
		'兩種會員在指定服務享有相同會員價格；其他內容依會員頁公告。': 'Both memberships receive the same member prices on selected services; other details are as stated on the membership page.',
		'依需求提供服務建議': 'A Plan Built Around You',
		'依日期、人數、經驗與感興趣的項目，討論適合的安排與報價。': 'We discuss suitable arrangements and pricing based on dates, group size, experience and interests.',
		'費用不包含項目': 'Not Included',
		'除另有明確說明外': 'Unless expressly stated otherwise',
		'雪票': 'Lift passes',
		'裝備租借': 'Equipment rental',
		'交通': 'Transport',
		'住宿': 'Accommodation',
		'餐飲': 'Meals',
		'保險': 'Insurance',
		'其他第三方費用': 'Other third-party costs',
		'價格依日期、場地、服務安排、人數與實際狀況調整，實際報價以確認後為準。': 'Prices vary by date, location, service arrangement, group size and actual conditions. The confirmed quotation is final.',
		'出發前，': 'Good to Know',
		'你可能想知道': 'Before You Go',
		'完全沒有滑雪經驗，也適合嗎？': 'Is this suitable if I have never skied before?',
		'可以。諮詢時請告訴我們是否第一次接觸雪地、同行人數與年齡組成，我們會依實際條件討論合適的安排。': 'Yes. Tell us whether this is your first time in snow, your group size and age composition. We will discuss an arrangement suited to the actual conditions.',
		'雙板與單板應該怎麼選？': 'How should I choose between skis and a snowboard?',
		'兩者有不同的入門感受。你可以依旅行目標、過往運動經驗與同行者選擇；還不確定時，也可先在諮詢中討論。': 'They offer different beginner experiences. Choose according to your travel goals, sports background and companions, or discuss it with us if you are unsure.',
		'目前可以在哪些北海道雪場預約？': 'Which Hokkaido resorts can currently be booked?',
		'服務雪場與商業活動相關許可仍在確認中，將依各雪場規範及實際可預約狀況安排。目前不預先承諾特定雪場。': 'Service resorts and permits for commercial activity are still being confirmed. Arrangements will follow each resort’s rules and actual availability; no particular resort is promised at this stage.',
		'頁面價格已經確定了嗎？': 'Are the prices on this page final?',
		'目前顯示的是待正式確認的初版報價，最終費用與包含項目將在諮詢時依服務內容確認。': 'The prices shown are preliminary and await final confirmation. Final charges and inclusions will be confirmed during consultation based on the services provided.',
		'可以直接在網站付款嗎？': 'Can I pay directly on the website?',
		'目前網站不提供會員登入或線上付款。請先透過聯絡管道提出需求，後續流程將由專人說明。': 'The website currently has no member login or online payment. Please contact us first; a team member will explain the next steps.',
		'告訴我們你的日期、人數與需求': 'Tell Us About Your Ideal Hokkaido Trip',
		'取得雪見一會的專屬報價': 'Receive a Personalised Proposal',
		'你可選擇喜歡的方式跟我們聯繫。初版報價、實際內容與可預約狀況確認後，我們會再與你說明後續安排。': 'Share your preferred dates, group size and interests through any of the contact options below. We will check availability, confirm the details and provide a preliminary quotation before explaining the next steps.',
		'雙板或單板，': 'Ski or Snowboard—',
		'從適合你的方式開始': 'Start at Your Own Pace',
		'私人／小團體滑雪教學，依程度、同行成員與希望的體驗方式討論安排。': 'Private or small-group instruction arranged around your ability, companions and preferred experience.',
		'了解服務': 'See How It Works',
		'詢問滑雪服務': 'Plan Your Snow Day',
		'Ski 與 Snowboard 合併介紹': 'Choose the Style That Feels Right',
		'不論偏好雙板或單板，都會先了解滑雪經驗、同行者與旅行期待，再討論適合的服務方向。': 'Whether you prefer skis or a snowboard, we first learn about your experience, companions and expectations before discussing the right service.',
		'雙板 Ski': 'Ski',
		'適合希望循序理解站姿、轉向與速度控制的旅客；實際課程內容依程度與現場條件調整。': 'For guests who want to build stance, turning and speed control step by step. Lesson content varies with ability and on-site conditions.',
		'單板 Snowboard': 'Snowboard',
		'從裝備適應、基本姿勢到滑行節奏逐步討論；安排仍須依教學條件與可預約狀況確認。': 'Progress from equipment familiarity and basic posture to riding rhythm. Arrangements remain subject to teaching conditions and availability.',
		'私人／小團體': 'Private / Small Group',
		'以同行成員為單位討論，不自行併入陌生團體；適合家人、朋友或希望專注練習的旅客。': 'Arranged for your own party without combining you with strangers—ideal for families, friends or guests seeking focused practice.',
		'行前需求確認': 'Pre-trip Consultation',
		'請告訴我們日期、人數、年齡組成與滑雪經驗；雪場、教學與裝備需求將於諮詢中確認。': 'Tell us your dates, group size, age composition and experience. Resort, instruction and equipment needs will be confirmed during consultation.',
		'以下為待正式確認的初版報價。實際內容須依雪場規範、相關許可、雪況與可預約時段安排。': 'These are preliminary prices pending final confirmation. Actual services depend on resort rules, relevant permits, snow conditions and available times.',
		'取得專屬報價': 'Request a Personalised Quote',
		'※ 費用不包含項目將依正式方案說明；雪票、裝備租借、交通、住宿、餐飲、保險及其他第三方費用，請於諮詢時逐項確認。': '※ Exclusions will be stated in the final plan. Please confirm lift passes, equipment rental, transport, accommodation, meals, insurance and other third-party costs item by item during consultation.',
		'先聊聊你想像中的雪日': 'Let’s Plan Your Day in the Snow',
		'告訴我們預計日期、人數、滑雪經驗與想嘗試 Ski 或 Snowboard，我們會再與你確認適合的安排。': 'Tell us your dates, group size, experience and whether you would like to try skiing or snowboarding. We will follow up with a suitable arrangement.',
		'把滑行與笑容，': 'Your Favourite Winter Moments,',
		'留成旅程之後的畫面': 'Captured Naturally',
		'滑雪攝影為滑雪相關服務的加購項目，記錄同行片刻，不獨立接受攝影預約。': 'Snow photography is an add-on to a snow-related service. It records your time together and is not available as a stand-alone booking.',
		'了解拍攝方式': 'See How It Works',
		'詢問攝影加購': 'Add Photography',
		'不打斷體驗的隨身紀錄': 'Natural Photography, Without Interrupting the Day',
		'拍攝內容會依滑雪安排、同行人數、天候與現場規範確認，讓影像自然融入旅程。': 'Photography is confirmed according to the ski arrangement, group size, weather and local rules so it remains a natural part of the journey.',
		'滑行片刻': 'Moments on the Snow',
		'記錄雪地移動、練習與同行互動，實際可拍內容依安全與現場條件調整。': 'Captures movement, practice and interaction on the snow. What can be photographed varies with safety and on-site conditions.',
		'同行回憶': 'Memories Together',
		'保留家人或朋友一起旅行的畫面，讓旅程結束後仍能重溫。': 'Preserve images of travelling with family or friends so the journey can be revisited later.',
		'搭配滑雪服務': 'Paired With a Snow Service',
		'此服務必須搭配滑雪相關服務，不獨立接受攝影預約。': 'This service must accompany a snow-related service; stand-alone photography bookings are not accepted.',
		'事前溝通': 'Advance Discussion',
		'可先告訴我們偏好的照片氛圍與同行成員，實際成果依天候及行程狀況為準。': 'Tell us your preferred photographic mood and who is travelling with you. Results depend on weather and itinerary conditions.',
		'待正式確認的初版加購價格，須與滑雪相關服務一併討論。': 'A preliminary add-on price pending final confirmation, to be discussed together with a snow-related service.',
		'告訴我們日期、人數、滑雪安排與希望保留的旅程片刻，我們會再確認適合的拍攝方式。': 'Tell us your dates, group size, snow plans and the moments you hope to preserve. We will confirm a suitable approach.',
		'慢下來，感受日本文化': 'Slow Down and Discover',
		'細緻而安靜的日常': 'the Quiet Beauty of Japanese Culture',
		'茶道、和服、和菓子等文化體驗，依日期、人數與實際可預約內容討論安排。': 'Tea ceremony, kimono, wagashi and other cultural experiences arranged according to dates, group size and actual availability.',
		'查看體驗方向': 'Explore the Possibilities',
		'從一席茶、一件和服開始': 'A More Meaningful Way to Experience Japan',
		'我們以人工諮詢了解你感興趣的文化內容，再依日期、地點及可預約狀況確認安排。': 'A personal consultation helps us understand your interests before arrangements are confirmed by date, location and availability.',
		'茶道': 'Tea Ceremony',
		'在安靜的節奏中認識茶席禮序與當下感受，具體內容依體驗單位安排。': 'Discover tea-room etiquette and presence at a quiet pace. Details are determined by the experience provider.',
		'和服': 'Kimono',
		'依季節、活動與可預約狀況討論穿著體驗，不預先承諾特定店家或合作關係。': 'Kimono experiences are discussed according to season, activity and availability. No particular shop or partnership is promised in advance.',
		'和菓子': 'Wagashi',
		'從季節造型與風味感受日本飲食文化，實際課程內容依當日方案確認。': 'Experience Japanese food culture through seasonal forms and flavours. Actual lesson content depends on the day’s programme.',
		'人工安排': 'Personal Arrangement',
		'請先提供日期、人數與感興趣項目，我們再回覆可行內容及後續安排。': 'Provide your dates, group size and interests, and we will respond with feasible options and next steps.',
		'以下為待正式確認的初版價格，最終內容與費用依實際體驗方案確認。': 'These are preliminary prices pending final confirmation. Final content and cost depend on the actual experience plan.',
		'告訴我們日期、人數與感興趣的文化內容，我們會再與你確認可預約項目及安排。': 'Tell us your dates, group size and cultural interests. We will confirm the available experiences and arrangements.',
		'Social 或 Gold，由你選擇': 'Choose Social or Gold',
		'比較會員方案': 'Compare Memberships',
		'免費入會': 'Free to join',
		'本季申請截止：2027 年 3 月 30 日': 'This season’s application deadline: 30 March 2027',
		'須先透過 LINE 或 Instagram 洽詢，由公司人工審核通過後取得資格': 'Enquire first through LINE or Instagram; eligibility is granted after manual company review and approval.',
		'原規劃須同時追蹤雪見一會 Instagram、Facebook、Threads 三個官方帳號，並經人工審核': 'The original plan requires following all three official Yukimi Ichie accounts—Instagram, Facebook and Threads—and passing manual review.',
		'享有指定服務會員價格': 'Member prices on selected services.',
		'不享有 Gold Member 的其他專屬權益': 'Does not include other Gold Member-exclusive benefits.',
		'會員到期日與資格維持條件尚待確認': 'Membership expiry and ongoing eligibility conditions are yet to be confirmed.',
		'2027 年 3 月 30 日為本季申請截止日期，並非會員到期日期': '30 March 2027 is this season’s application deadline, not the membership expiry date.',
		'諮詢 Social Member': 'Enquire About Social Membership',
		'¥12,000／年': '¥12,000 / year',
		'會籍有效期限一年': 'Membership valid for one year',
		'採人工諮詢、審核通過後付款入會': 'Join through personal consultation and payment after approval.',
		'享有與 Social Member 相同的指定服務會員價格': 'The same member prices on selected services as Social Members.',
		'不定期收到日本旅遊會員專屬電子資訊卡': 'Occasional member-only digital information cards about travel in Japan.',
		'保留會員活動、早鳥資訊及服務洽詢權益': 'Access to member events, early-bird information and service enquiries.',
		'不提供折扣優惠券或個別化旅程規劃兌換券': 'No discount coupons or vouchers for personalised itinerary planning.',
		'諮詢 Gold Member': 'Enquire About Gold Membership',
		'簡單、透明的人工入會流程': 'A Simple, Transparent, Personal Joining Process',
		'選擇聯絡方式': 'Choose a Contact Method',
		'可先透過 LINE 或 Instagram 洽詢，也可使用 Facebook 或 Email 聯繫。': 'Start through LINE or Instagram, or contact us by Facebook or email.',
		'人工諮詢與審核': 'Personal Consultation and Review',
		'告訴我們希望加入的會員類型，由公司確認申請條件並進行人工審核。': 'Tell us which membership you want. The company will confirm the application requirements and conduct a manual review.',
		'完成入會': 'Complete Membership',
		'Social Member 於審核通過後取得資格；Gold Member 於審核通過後依說明付款，會籍自確認日起一年。': 'Social Member eligibility begins after approval. Gold Members pay as instructed after approval, and membership lasts one year from confirmation.',
		'會員須經由審核後獲得加入，無自動付款或線上填表申請。': 'Membership is granted after review; there is no automatic payment or online application form.',
		'選擇你方便的方式，開始會員諮詢': 'Choose a Convenient Way to Start a Membership Enquiry',
		'告訴我們想加入 Social Member 或 Gold Member，我們會再與你確認申請條件、人工審核及後續安排。': 'Tell us whether you want Social or Gold Membership. We will confirm the requirements, manual review and next steps.',
		'返回 2026–27 北海道雪季': 'Return to the 2026–27 Hokkaido Winter',
		'你是否也曾有這樣的感受？': 'Have You Ever Felt This Way?',
		'工作繁忙，渴望旅行，卻沒有時間規劃行程。': 'You long to travel but work leaves no time to plan.',
		'不想再參加制式團體旅遊，只想真正體驗當地。': 'You no longer want a standard group tour; you want to experience the place itself.',
		'喜歡獨自旅行，卻難以留下屬於當下的美好記憶。': 'You enjoy travelling alone but find it hard to preserve the moment.',
		'希望旅程不只是打卡，而能留下值得回味的影像故事。': 'You want more than check-ins—you want a visual story worth remembering.',
		'期待滑雪是在安全、鼓勵與陪伴中，享受每一次進步。': 'You want to enjoy every step of progress on the snow with safety, encouragement and support.',
		'一期一會，為你而生的服務': 'Ichigo Ichie—A Service Made for You',
		'「一期一會」──每一次相遇，都是無法重來的珍貴時刻。': 'Ichigo ichie: every encounter is a precious moment that can never be repeated.',
		'我們的目標': 'Our Goals',
		'讓旅客真正在地體驗，用心感受，而非匆匆走過。': 'Help guests experience the local place with care instead of rushing through it.',
		'提供無縫串連的整合式支援，讓每趟旅程都值得珍藏。': 'Provide seamless, integrated support that makes every journey worth keeping.',
		'依實際條件確認可行內容，重視文化交流與在地尊重。': 'Confirm what is feasible under actual conditions, with respect for cultural exchange and local communities.',
		'雪見一會合同会社': 'Yukimi Ichie LLC'
		,'雪見一會': 'Yukimi Ichie'
		,'© 雪見一會合同会社': '© Yukimi Ichie LLC'
		,'北海道體驗': 'Hokkaido Experiences'
		,'滑雪教學、雪地支援、文化體驗與影像紀錄': 'Ski lessons, snow support, cultural experiences and photography'
		,'品牌首頁': 'Brand Home'
		,'2026–27 北海道雪季': '2026–27 Hokkaido Winter'
		,'Ski・Snowboard 雪季體驗': 'Ski & Snowboard Winter Experiences'
		,'我們熱愛日本文化，深信旅遊不該只是匆匆停留的探索。 多年來，在各自忙碌的工作與生活中， 我們深刻體會到：即使渴望放鬆、渴望旅行、渴望文化體驗， 卻往往因為忙碌而無暇規劃； 結果不是走進千篇一律的觀光路線， 就是錯過真正觸動心靈的瞬間。': 'We love Japanese culture and believe travel should be more than a hurried visit. Through years of busy work and daily life, we came to understand that even when people long to relax, travel and experience another culture, they often have no time to plan. The result can be a standard tourist route—or missing the moments that truly move them.'
		,'在北海道長期的生活與體驗中， 我們感受到茶道的靜謐與專注、 和菓子的細緻與雅致、 祭典的熱烈與真實。 這些片刻告訴我們： 真正值得回憶的旅程， 不在於行程有多滿、多快， 而在於你是否能在當下，用心感受每一刻。': 'Living and spending time in Hokkaido, we experienced the still focus of tea ceremony, the refinement of wagashi and the vivid authenticity of local festivals. Those moments taught us that a memorable journey is not defined by how full or fast the itinerary is, but by whether you can be present and truly feel each moment.'
		,'「一期一會」──每一次相遇，都是無法重來的珍貴時刻。 因此，我們將文化體驗、影像紀錄、多語支援、 旅遊媒合與全方位陪伴整合， 從裝備準備、交通安排、文化課程， 到滑雪體驗與影像記錄， 我們替你細心安排每一個環節， 只為讓你安心走進雪國，專心感受屬於自己的旅程。': 'Ichigo ichie means every encounter is a precious moment that cannot be repeated. We therefore bring together cultural experiences, photography, multilingual help, travel coordination and comprehensive support—from equipment and transport to cultural activities, snow experiences and visual memories. We carefully arrange each stage so you can enter snow country with confidence and focus on the journey that is yours.'
		,'雪見一會｜北海道滑雪與日本文化體驗': 'Yukimi Ichie | Hokkaido Skiing and Japanese Cultural Experiences'
		,'2026–27 北海道雪季｜雪見一會': '2026–27 Hokkaido Winter | Yukimi Ichie'
		,'Ski＋Snowboard 滑雪服務｜雪見一會': 'Ski & Snowboard Services | Yukimi Ichie'
		,'隨身紀錄拍攝｜雪見一會': 'Travel Photography | Yukimi Ichie'
		,'日本文化體驗｜雪見一會': 'Japanese Cultural Experiences | Yukimi Ichie'
		,'會員介紹｜雪見一會': 'Membership | Yukimi Ichie'
		,'雪見一會提供北海道滑雪、雪地體驗、旅程影像紀錄與日本文化活動諮詢。': 'Yukimi Ichie offers consultation for Hokkaido skiing, snow experiences, travel photography and Japanese cultural activities.'
		,'雪見一會 2026–27 北海道雪季：私人滑雪教學、雪地體驗支援、日本文化體驗與滑雪攝影。': 'Yukimi Ichie 2026–27 Hokkaido winter: private lessons, snow-experience support, Japanese cultural experiences and snow photography.'
		,'雪見一會雙板 Ski 與單板 Snowboard 私人及小團體滑雪服務介紹。': 'Private and small-group ski and snowboard services from Yukimi Ichie.'
		,'雪見一會滑雪攝影加購與旅程影像紀錄介紹。': 'Snow-photography add-ons and travel photography from Yukimi Ichie.'
		,'雪見一會茶道、和服、和菓子等日本文化體驗介紹。': 'Tea ceremony, kimono, wagashi and other Japanese cultural experiences from Yukimi Ichie.'
		,'雪見一會 Social Member 與 Gold Member 靜態會員方案介紹。': 'Yukimi Ichie Social and Gold Membership plans.'
	};

	var originalText = [];
	var originalAttributes = [];
	var originalTitle = document.title;

	function translateTextNodes() {
		var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
		var node;
		while ((node = walker.nextNode())) {
			if (!node.parentElement || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement.tagName)) continue;
			var trimmed = node.nodeValue.trim();
			var key = trimmed.replace(/\s+/g, ' ');
			if (!trimmed || !en[key]) continue;
			originalText.push([node, node.nodeValue]);
			var leading = node.nodeValue.match(/^\s*/)[0];
			var trailing = node.nodeValue.match(/\s*$/)[0];
			node.nodeValue = leading + en[key] + trailing;
		}
	}

	function translateAttributes() {
		['aria-label', 'alt', 'title', 'content'].forEach(function (attribute) {
			document.querySelectorAll('[' + attribute + ']').forEach(function (element) {
				var value = element.getAttribute(attribute);
				if (value && en[value]) {
					originalAttributes.push([element, attribute, value]);
					element.setAttribute(attribute, en[value]);
				}
			});
		});
	}

	function restoreChinese() {
		originalText.forEach(function (entry) { entry[0].nodeValue = entry[1]; });
		originalAttributes.forEach(function (entry) { entry[0].setAttribute(entry[1], entry[2]); });
		originalText = [];
		originalAttributes = [];
		document.title = originalTitle;
	}

	function renderSwitcher(language) {
		var old = document.querySelector('.language-switcher');
		if (old) old.remove();
		var box = document.createElement('div');
		box.className = 'language-switcher';
		box.setAttribute('role', 'group');
		box.setAttribute('aria-label', language === 'en' ? 'Language' : '語言');
		box.innerHTML = '<button type="button" data-language="zh-Hant">繁中</button><span aria-hidden="true">/</span><button type="button" data-language="en">EN</button>';
		box.querySelectorAll('button').forEach(function (button) {
			var isActive = button.getAttribute('data-language') === language;
			button.classList.toggle('is-active', isActive);
			button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
			button.addEventListener('click', function () {
				var next = button.getAttribute('data-language');
				localStorage.setItem(STORAGE_KEY, next);
				applyLanguage(next);
			});
		});
		var navigation = document.querySelector('.site-nav');
		(navigation || document.body).appendChild(box);
	}

	function renderEnglishSupportNote(language) {
		document.querySelectorAll('.english-support-note').forEach(function (note) { note.remove(); });
		if (language !== 'en') return;
		document.querySelectorAll('.winter-contact__inner').forEach(function (contact) {
			var note = document.createElement('p');
			note.className = 'english-support-note';
			note.setAttribute('aria-label', 'English-language support available');
			note.innerHTML = '<span aria-hidden="true">✓</span> English-language enquiries and assistance are available.';
			var anchor = contact.querySelector('.winter-contact__invite');
			if (anchor) anchor.insertAdjacentElement('afterend', note);
			else contact.insertBefore(note, contact.querySelector('.winter-contact__links'));
		});
	}

	function applyLanguage(language) {
		restoreChinese();
		document.documentElement.lang = language;
		if (language === 'en') translateTextNodes();
		if (language === 'en') translateAttributes();
		if (language === 'en' && en[originalTitle]) document.title = en[originalTitle];
		renderEnglishSupportNote(language);
		renderSwitcher(language);
	}

	function browserFallback() {
		var languages = navigator.languages || [navigator.language || ''];
		return languages.some(function (item) { return /^(zh|ja)(-|$)/i.test(item); }) ? 'zh-Hant' : 'en';
	}

	function countryDefault() {
		var controller = new AbortController();
		var timer = setTimeout(function () { controller.abort(); }, REQUEST_TIMEOUT_MS);
		return fetch(IP_COUNTRY_ENDPOINT, { signal: controller.signal, cache: 'no-store', referrerPolicy: 'no-referrer' })
			.then(function (response) {
				if (!response.ok) throw new Error('country lookup failed');
				return response.text();
			})
			.then(function (country) {
				country = country.trim().toUpperCase();
				if (!/^[A-Z]{2}$/.test(country)) throw new Error('invalid country code');
				return ZH_COUNTRIES.indexOf(country) !== -1 ? 'zh-Hant' : 'en';
			})
			.catch(browserFallback)
			.finally(function () { clearTimeout(timer); });
	}

	function start() {
		var saved = localStorage.getItem(STORAGE_KEY);
		if (saved === 'en' || saved === 'zh-Hant') {
			applyLanguage(saved);
			return;
		}
		applyLanguage(browserFallback());
		countryDefault().then(applyLanguage);
	}

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
	else start();
}());
