const TRANSLATIONS = {
    en: {
        'page-title': 'Support Andrew',
        'back': '← Back',
        'back-home': '← Back to homepage',
        'back-try': '← Go back and try again',
        'last-updated': 'Last updated: <strong>September 2025</strong>',

        // tip/index.html
        'header-h1': 'Support Andrew',
        'subtitle': 'Liked my content?<br>Support with a quick tip.',
        'preset-3-label': 'Thank you',
        'preset-5-label': 'Cheers',
        'preset-10-label': 'Made my day',
        'preset-50-label': 'You are the best',
        'from-placeholder': 'From (optional)',
        'message-placeholder': 'Write a short message (optional)',
        'char-hint': 'Maximum 250 characters reached',
        'agree-full': 'I agree to the <a href="policy/terms.html" target="_blank">Terms</a>, <a href="policy/privacy.html" target="_blank">Privacy</a> &amp; <a href="policy/refund.html" target="_blank">Refund Policy</a>.',
        'stripe-btn': 'Send Tip (via Stripe)',
        'da-btn': 'Send with Donation Alerts',
        'secure-note': '🔒 Secured payment powered by Stripe',

        // success.html
        'success-title': 'Thank you! 🙌',
        'success-p1': 'Your donation is being processed.<br>I really appreciate your support.',
        'success-p2': 'You can safely close this page.<br>Stay tuned for more content!',

        // cancel.html
        'cancel-title': 'Payment cancelled',
        'cancel-p1': 'No worries — nothing was charged.<br>You can try again anytime.',

        // policy/terms.html
        'terms-title': 'Terms of Service',
        'terms-h-nature': 'Nature of Tips',
        'terms-h-refund': 'Refund Policy',
        'terms-h-user': 'User Responsibility',
        'terms-h-content': 'Optional User Content',
        'terms-h-3rdparty': 'Third-Party Payment Processor',
        'terms-h-limit': 'Limitation of Liability',
        'terms-h-changes': 'Changes to These Terms',
        'terms-p-intro': 'By accessing this website and leaving an optional tip, you agree to these Terms of Service.',
        'terms-p-nature': 'All payments made on this website are <strong>optional tips</strong> intended to support the creator\'s content. Tips are not payments for goods, services, subscriptions, or digital products. No goods, services, or guaranteed benefits are provided in exchange for a tip.',
        'terms-p-refund1': 'Tips are generally <strong>non-refundable</strong>.',
        'terms-p-refund2': 'Once a tip is completed, it cannot be reversed or refunded, except where required by applicable law.',
        'terms-p-user': 'You are solely responsible for entering the correct tip amount and currency before confirming payment.',
        'terms-p-content': 'Any nickname or message submitted with a tip is optional and voluntary. We reserve the right to remove or hide any content that is abusive, offensive, misleading, or otherwise inappropriate.',
        'terms-p-3rdparty': 'Payments are processed securely by <strong>Stripe</strong>. By leaving a tip, you also agree to Stripe\'s terms, policies, and privacy practices.',
        'terms-p-limit1': 'This website is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis.',
        'terms-p-limit2': 'We are not responsible for payment issues, interruptions, or errors caused by Stripe, banks, card issuers, or other third parties involved in the payment process.',
        'terms-p-changes': 'We may update these Terms of Service at any time. Continued use of this website after changes are published constitutes acceptance of the updated terms.',

        // policy/privacy.html
        'privacy-title': 'Privacy Policy',
        'privacy-h-controller': 'Data Controller',
        'privacy-h-collect': 'Information We Collect',
        'privacy-h-payments': 'Payments',
        'privacy-h-use': 'How We Use Your Data',
        'privacy-h-legal': 'Legal Basis for Processing (UK/EU)',
        'privacy-h-retention': 'Data Retention',
        'privacy-h-rights': 'Your Rights',
        'privacy-h-contact': 'Contact',
        'privacy-p-intro': 'This website allows users to leave <strong>optional tips</strong>. We respect your privacy and collect only the minimum data required to operate this service.',
        'privacy-p-controller': 'This website is operated by the site owner, who acts as the data controller for personal data collected through this service.',
        'privacy-p-collect': 'When you leave a tip, we may collect:',
        'privacy-li-amount': 'Tip amount and currency',
        'privacy-li-nickname': 'Optional nickname (if you choose to provide one)',
        'privacy-li-message': 'Optional message attached to the tip',
        'privacy-li-date': 'Date and time of the transaction',
        'privacy-li-source': 'Referral source or campaign identifier (if provided)',
        'privacy-p-payments1': 'All payments are processed securely by <strong>Stripe</strong>. We do <strong>not</strong> collect, store, or process your card details.',
        'privacy-p-payments2': 'Stripe may collect personal and technical data in accordance with its own privacy policy:<br><a href="https://stripe.com/privacy" target="_blank" rel="noopener">https://stripe.com/privacy</a>',
        'privacy-li-use1': 'To process and record your optional tip',
        'privacy-li-use2': 'To display your nickname or message (if provided)',
        'privacy-li-use3': 'To prevent fraud and abuse',
        'privacy-li-use4': 'To meet accounting and legal obligations',
        'privacy-p-legal': 'If you are located in the UK or EU, we process personal data based on:',
        'privacy-li-legal1': 'Performance of a transaction (optional tip processing)',
        'privacy-li-legal2': 'Legitimate interests (security and fraud prevention)',
        'privacy-li-legal3': 'Legal obligations (accounting and compliance)',
        'privacy-p-retention': 'Tip records are retained only as long as necessary for accounting, legal, and security purposes. Optional personal data (nickname or message) may be deleted upon request.',
        'privacy-p-rights': 'If you are located in the UK or EU, you have the right to:',
        'privacy-li-rights1': 'Access your personal data',
        'privacy-li-rights2': 'Request correction or deletion of optional personal data',
        'privacy-li-rights3': 'Object to or restrict certain processing',
        'privacy-p-contact': 'For privacy-related questions or data requests, please contact:<br><strong>support@andrewautohub.com</strong>',

        // policy/refund.html
        'refund-title': 'Refund Policy',
        'refund-h-policy': 'Refund Policy',
        'refund-h-exceptions': 'Exceptions',
        'refund-p-intro': 'This website accepts <strong>optional tips only</strong>. Tips are made as a gesture of support and are not payments for goods, services, subscriptions, or digital products.',
        'refund-p-general': 'Tips are generally <strong>non-refundable</strong>.',
        'refund-p-acknowledge': 'By completing a tip, you acknowledge and agree that:',
        'refund-li-optional': 'The tip is optional',
        'refund-li-chosen': 'The tip amount is chosen by you',
        'refund-li-not-product': 'You are not purchasing a product or service',
        'refund-li-no-goods': 'No goods, services, or benefits are provided in exchange',
        'refund-p-not-issued': 'Refunds will <strong>not</strong> be issued for:',
        'refund-li-accidental': 'Accidental tips',
        'refund-li-incorrect': 'Incorrect tip amounts',
        'refund-li-mind': 'Change of mind',
        'refund-p-exceptions': 'Refunds may be provided only where required by applicable law, or in cases of confirmed fraud or technical error.',
        'refund-p-no-guarantee': 'Submitting a refund request does not guarantee that a refund will be issued.',

        // root index.html
        'root-title': 'Andrew Auto Hub',
        'root-h1': 'Andrew Auto Hub',
        'root-p1': 'I create automotive content about cars, ownership, maintenance, and real-world driving experience.',
        'root-p2': 'My content is published on:',
        'root-p3': 'If you enjoy my content, you can leave an optional tip to support my work. Tips are optional and do not provide access to additional content or services.',
        'root-cta': 'Leave a tip',
    },

    ru: {
        'page-title': 'Поддержать Андрея',
        'back': '← Назад',
        'back-home': '← На главную',
        'back-try': '← Вернуться и попробовать снова',
        'last-updated': 'Последнее обновление: <strong>Сентябрь 2025</strong>',

        'header-h1': 'Поддержать Андрея',
        'subtitle': 'Понравился контент?<br>Оставь чаевые.',
        'preset-3-label': 'Спасибо',
        'preset-5-label': 'Отлично',
        'preset-10-label': 'Лучший день',
        'preset-50-label': 'Ты лучший',
        'from-placeholder': 'От кого (необязательно)',
        'message-placeholder': 'Написать сообщение (необязательно)',
        'char-hint': 'Достигнут максимум 250 символов',
        'agree-full': 'Я принимаю <a href="policy/terms.html" target="_blank">Условия</a>, <a href="policy/privacy.html" target="_blank">Конфиденциальность</a> и <a href="policy/refund.html" target="_blank">Политику возврата</a>.',
        'stripe-btn': 'Отправить через Stripe',
        'da-btn': 'Отправить через Donation Alerts',
        'secure-note': '🔒 Безопасная оплата через Stripe',

        'success-title': 'Спасибо! 🙌',
        'success-p1': 'Ваши чаевые обрабатываются.<br>Я очень ценю вашу поддержку.',
        'success-p2': 'Эту страницу можно закрыть.<br>Следите за новым контентом!',

        'cancel-title': 'Платёж отменён',
        'cancel-p1': 'Ничего не было списано.<br>Вы можете попробовать снова.',

        'terms-title': 'Условия использования',
        'terms-h-nature': 'Характер чаевых',
        'terms-h-refund': 'Политика возврата',
        'terms-h-user': 'Ответственность пользователя',
        'terms-h-content': 'Пользовательский контент',
        'terms-h-3rdparty': 'Платёжный процессор',
        'terms-h-limit': 'Ограничение ответственности',
        'terms-h-changes': 'Изменения условий',
        'terms-p-intro': 'Используя этот сайт и оставляя чаевые, вы принимаете настоящие Условия использования.',
        'terms-p-nature': 'Все платежи на этом сайте являются <strong>добровольными чаевыми</strong> в поддержку контента автора. Чаевые не являются оплатой товаров, услуг, подписок или цифровых продуктов. Никакие товары, услуги или гарантированные привилегии не предоставляются в обмен на чаевые.',
        'terms-p-refund1': 'Чаевые, как правило, <strong>не возвращаются</strong>.',
        'terms-p-refund2': 'После завершения транзакции чаевые не могут быть отменены или возвращены, за исключением случаев, предусмотренных законодательством.',
        'terms-p-user': 'Вы несёте полную ответственность за правильное указание суммы и валюты перед подтверждением платежа.',
        'terms-p-content': 'Никнейм или сообщение, прилагаемые к чаевым, являются добровольными. Мы вправе удалить любой контент, который является оскорбительным, вводящим в заблуждение или неуместным.',
        'terms-p-3rdparty': 'Платежи обрабатываются защищённо через <strong>Stripe</strong>. Оставляя чаевые, вы также принимаете условия, политику и практику конфиденциальности Stripe.',
        'terms-p-limit1': 'Сайт предоставляется «<strong>как есть</strong>» и «<strong>по мере доступности</strong>».',
        'terms-p-limit2': 'Мы не несём ответственности за проблемы, перебои или ошибки, вызванные Stripe, банками, эмитентами карт или иными третьими сторонами.',
        'terms-p-changes': 'Мы можем в любой момент обновить эти Условия. Продолжение использования сайта после публикации изменений означает их принятие.',

        'privacy-title': 'Политика конфиденциальности',
        'privacy-h-controller': 'Контролёр данных',
        'privacy-h-collect': 'Собираемые данные',
        'privacy-h-payments': 'Платежи',
        'privacy-h-use': 'Использование данных',
        'privacy-h-legal': 'Правовые основания (UK/EU)',
        'privacy-h-retention': 'Хранение данных',
        'privacy-h-rights': 'Ваши права',
        'privacy-h-contact': 'Контакты',
        'privacy-p-intro': 'Этот сайт позволяет оставлять <strong>добровольные чаевые</strong>. Мы уважаем вашу приватность и собираем минимально необходимые данные.',
        'privacy-p-controller': 'Сайт управляется владельцем, который является контролёром персональных данных, собираемых через этот сервис.',
        'privacy-p-collect': 'При оставлении чаевых мы можем собирать:',
        'privacy-li-amount': 'Сумма и валюта чаевых',
        'privacy-li-nickname': 'Необязательный никнейм (если указан)',
        'privacy-li-message': 'Необязательное сообщение к чаевым',
        'privacy-li-date': 'Дата и время транзакции',
        'privacy-li-source': 'Источник перехода или идентификатор кампании (при наличии)',
        'privacy-p-payments1': 'Все платежи обрабатываются защищённо через <strong>Stripe</strong>. Мы <strong>не</strong> собираем, не храним и не обрабатываем данные вашей карты.',
        'privacy-p-payments2': 'Stripe может собирать персональные и технические данные согласно собственной политике конфиденциальности:<br><a href="https://stripe.com/privacy" target="_blank" rel="noopener">https://stripe.com/privacy</a>',
        'privacy-li-use1': 'Обработка и учёт ваших чаевых',
        'privacy-li-use2': 'Отображение никнейма или сообщения (если указаны)',
        'privacy-li-use3': 'Предотвращение мошенничества и злоупотреблений',
        'privacy-li-use4': 'Выполнение бухгалтерских и юридических обязательств',
        'privacy-p-legal': 'Если вы находитесь в UK или EU, мы обрабатываем персональные данные на основе:',
        'privacy-li-legal1': 'Исполнение транзакции (обработка чаевых)',
        'privacy-li-legal2': 'Законные интересы (безопасность и предотвращение мошенничества)',
        'privacy-li-legal3': 'Юридические обязательства (бухгалтерия и соответствие)',
        'privacy-p-retention': 'Записи о чаевых хранятся только в течение времени, необходимого для бухгалтерских, юридических и целей безопасности. Необязательные данные (никнейм или сообщение) могут быть удалены по запросу.',
        'privacy-p-rights': 'Если вы в UK или EU, у вас есть право:',
        'privacy-li-rights1': 'На доступ к своим персональным данным',
        'privacy-li-rights2': 'На исправление или удаление необязательных данных',
        'privacy-li-rights3': 'На возражение или ограничение обработки',
        'privacy-p-contact': 'По вопросам конфиденциальности или запросам данных обращайтесь:<br><strong>support@andrewautohub.com</strong>',

        'refund-title': 'Политика возврата',
        'refund-h-policy': 'Политика возврата',
        'refund-h-exceptions': 'Исключения',
        'refund-p-intro': 'Этот сайт принимает только <strong>добровольные чаевые</strong>. Чаевые являются жестом поддержки и не являются оплатой товаров, услуг, подписок или цифровых продуктов.',
        'refund-p-general': 'Чаевые, как правило, <strong>не возвращаются</strong>.',
        'refund-p-acknowledge': 'Оставляя чаевые, вы подтверждаете и соглашаетесь:',
        'refund-li-optional': 'Чаевые являются добровольными',
        'refund-li-chosen': 'Сумма чаевых выбирается вами',
        'refund-li-not-product': 'Вы не приобретаете товар или услугу',
        'refund-li-no-goods': 'Никакие товары, услуги или привилегии не предоставляются в обмен',
        'refund-p-not-issued': 'Возврат <strong>не</strong> производится в случаях:',
        'refund-li-accidental': 'Случайные чаевые',
        'refund-li-incorrect': 'Неверная сумма',
        'refund-li-mind': 'Изменение решения',
        'refund-p-exceptions': 'Возврат возможен только в случаях, предусмотренных законом, или при подтверждённом мошенничестве или технической ошибке.',
        'refund-p-no-guarantee': 'Подача запроса на возврат не гарантирует его одобрение.',

        'root-title': 'Andrew Auto Hub',
        'root-h1': 'Andrew Auto Hub',
        'root-p1': 'Я создаю контент об автомобилях: владение, обслуживание и реальный опыт вождения.',
        'root-p2': 'Мой контент публикуется на:',
        'root-p3': 'Если вам нравится контент, вы можете оставить добровольные чаевые в поддержку моей работы. Чаевые необязательны и не дают доступа к дополнительному контенту или услугам.',
        'root-cta': 'Оставить чаевые',
    },

    ua: {
        'page-title': 'Підтримати Андрія',
        'back': '← Назад',
        'back-home': '← На головну',
        'back-try': '← Повернутись і спробувати знову',
        'last-updated': 'Останнє оновлення: <strong>Вересень 2025</strong>',

        'header-h1': 'Підтримати Андрія',
        'subtitle': 'Сподобався контент?<br>Залиш чайові.',
        'preset-3-label': 'Дякую',
        'preset-5-label': 'Чудово',
        'preset-10-label': 'Кращий день',
        'preset-50-label': 'Ти найкращий',
        'from-placeholder': 'Від кого (необов\'язково)',
        'message-placeholder': 'Написати повідомлення (необов\'язково)',
        'char-hint': 'Досягнуто максимум 250 символів',
        'agree-full': 'Я погоджуюсь з <a href="policy/terms.html" target="_blank">Умовами</a>, <a href="policy/privacy.html" target="_blank">Конфіденційністю</a> та <a href="policy/refund.html" target="_blank">Політикою повернення</a>.',
        'stripe-btn': 'Надіслати через Stripe',
        'da-btn': 'Надіслати через Donation Alerts',
        'secure-note': '🔒 Безпечна оплата через Stripe',

        'success-title': 'Дякую! 🙌',
        'success-p1': 'Ваші чайові обробляються.<br>Я дуже ціную вашу підтримку.',
        'success-p2': 'Цю сторінку можна закрити.<br>Слідкуйте за новим контентом!',

        'cancel-title': 'Платіж скасовано',
        'cancel-p1': 'Нічого не було списано.<br>Ви можете спробувати знову.',

        'terms-title': 'Умови використання',
        'terms-h-nature': 'Характер чайових',
        'terms-h-refund': 'Політика повернення',
        'terms-h-user': 'Відповідальність користувача',
        'terms-h-content': 'Контент користувача',
        'terms-h-3rdparty': 'Платіжний процесор',
        'terms-h-limit': 'Обмеження відповідальності',
        'terms-h-changes': 'Зміни умов',
        'terms-p-intro': 'Використовуючи цей сайт і залишаючи чайові, ви погоджуєтесь з цими Умовами використання.',
        'terms-p-nature': 'Усі платежі на цьому сайті є <strong>добровільними чайовими</strong> на підтримку контенту автора. Чайові не є оплатою товарів, послуг, підписок або цифрових продуктів. Жодні товари, послуги або гарантовані привілеї не надаються в обмін на чайові.',
        'terms-p-refund1': 'Чайові, як правило, <strong>не повертаються</strong>.',
        'terms-p-refund2': 'Після завершення транзакції чайові не можуть бути скасовані або повернені, окрім випадків, передбачених законодавством.',
        'terms-p-user': 'Ви несете повну відповідальність за правильне зазначення суми та валюти перед підтвердженням платежу.',
        'terms-p-content': 'Нікнейм або повідомлення до чайових є добровільними. Ми залишаємо за собою право видалити будь-який контент, що є образливим, оманливим або неприйнятним.',
        'terms-p-3rdparty': 'Платежі обробляються захищено через <strong>Stripe</strong>. Залишаючи чайові, ви також приймаєте умови, політику та практику конфіденційності Stripe.',
        'terms-p-limit1': 'Сайт надається «<strong>як є</strong>» та «<strong>в міру доступності</strong>».',
        'terms-p-limit2': 'Ми не несемо відповідальності за проблеми, перебої або помилки, спричинені Stripe, банками, емітентами карток або іншими третіми сторонами.',
        'terms-p-changes': 'Ми можемо в будь-який момент оновити ці Умови. Продовження використання сайту після публікації змін означає їх прийняття.',

        'privacy-title': 'Політика конфіденційності',
        'privacy-h-controller': 'Контролер даних',
        'privacy-h-collect': 'Дані, що збираються',
        'privacy-h-payments': 'Платежі',
        'privacy-h-use': 'Використання даних',
        'privacy-h-legal': 'Правові підстави (UK/EU)',
        'privacy-h-retention': 'Зберігання даних',
        'privacy-h-rights': 'Ваші права',
        'privacy-h-contact': 'Контакти',
        'privacy-p-intro': 'Цей сайт дозволяє залишати <strong>добровільні чайові</strong>. Ми поважаємо вашу приватність і збираємо лише мінімально необхідні дані.',
        'privacy-p-controller': 'Сайт управляється власником, який є контролером персональних даних, що збираються через цей сервіс.',
        'privacy-p-collect': 'При залишенні чайових ми можемо збирати:',
        'privacy-li-amount': 'Сума та валюта чайових',
        'privacy-li-nickname': 'Необов\'язковий нікнейм (якщо зазначено)',
        'privacy-li-message': 'Необов\'язкове повідомлення до чайових',
        'privacy-li-date': 'Дата та час транзакції',
        'privacy-li-source': 'Джерело переходу або ідентифікатор кампанії (за наявності)',
        'privacy-p-payments1': 'Усі платежі обробляються захищено через <strong>Stripe</strong>. Ми <strong>не</strong> збираємо, не зберігаємо і не обробляємо дані вашої картки.',
        'privacy-p-payments2': 'Stripe може збирати персональні та технічні дані відповідно до власної політики конфіденційності:<br><a href="https://stripe.com/privacy" target="_blank" rel="noopener">https://stripe.com/privacy</a>',
        'privacy-li-use1': 'Обробка та облік ваших чайових',
        'privacy-li-use2': 'Відображення нікнейму або повідомлення (якщо зазначені)',
        'privacy-li-use3': 'Запобігання шахрайству та зловживанням',
        'privacy-li-use4': 'Виконання бухгалтерських та юридичних зобов\'язань',
        'privacy-p-legal': 'Якщо ви знаходитесь у UK або EU, ми обробляємо персональні дані на підставі:',
        'privacy-li-legal1': 'Виконання транзакції (обробка чайових)',
        'privacy-li-legal2': 'Законні інтереси (безпека та запобігання шахрайству)',
        'privacy-li-legal3': 'Юридичні зобов\'язання (бухгалтерія та відповідність)',
        'privacy-p-retention': 'Записи про чайові зберігаються лише стільки, скільки необхідно для бухгалтерських, юридичних та безпекових цілей. Необов\'язкові дані (нікнейм або повідомлення) можуть бути видалені на запит.',
        'privacy-p-rights': 'Якщо ви у UK або EU, ви маєте право:',
        'privacy-li-rights1': 'На доступ до своїх персональних даних',
        'privacy-li-rights2': 'На виправлення або видалення необов\'язкових даних',
        'privacy-li-rights3': 'На заперечення або обмеження обробки',
        'privacy-p-contact': 'З питань конфіденційності або запитів даних звертайтесь:<br><strong>support@andrewautohub.com</strong>',

        'refund-title': 'Політика повернення',
        'refund-h-policy': 'Політика повернення',
        'refund-h-exceptions': 'Винятки',
        'refund-p-intro': 'Цей сайт приймає лише <strong>добровільні чайові</strong>. Чайові є жестом підтримки і не є оплатою товарів, послуг, підписок або цифрових продуктів.',
        'refund-p-general': 'Чайові, як правило, <strong>не повертаються</strong>.',
        'refund-p-acknowledge': 'Залишаючи чайові, ви підтверджуєте та погоджуєтесь:',
        'refund-li-optional': 'Чайові є добровільними',
        'refund-li-chosen': 'Сума чайових обирається вами',
        'refund-li-not-product': 'Ви не купуєте товар або послугу',
        'refund-li-no-goods': 'Жодні товари, послуги або привілеї не надаються в обмін',
        'refund-p-not-issued': 'Повернення <strong>не</strong> здійснюється у випадках:',
        'refund-li-accidental': 'Випадкові чайові',
        'refund-li-incorrect': 'Неправильна сума',
        'refund-li-mind': 'Зміна рішення',
        'refund-p-exceptions': 'Повернення можливе лише у випадках, передбачених законом, або при підтвердженому шахрайстві чи технічній помилці.',
        'refund-p-no-guarantee': 'Подання запиту на повернення не гарантує його схвалення.',

        'root-title': 'Andrew Auto Hub',
        'root-h1': 'Andrew Auto Hub',
        'root-p1': 'Я створюю контент про автомобілі: володіння, обслуговування та реальний досвід водіння.',
        'root-p2': 'Мій контент публікується на:',
        'root-p3': 'Якщо вам подобається контент, ви можете залишити добровільні чайові на підтримку моєї роботи. Чайові є необов\'язковими і не дають доступу до додаткового контенту або послуг.',
        'root-cta': 'Залишити чайові',
    }
};

function detectLang() {
    const saved = localStorage.getItem('lang');
    if (saved && TRANSLATIONS[saved]) return saved;
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    // navigator.language returns 'uk' for Ukrainian (ISO 639-1), map to our 'ua' key
    const mapped = browser === 'uk' ? 'ua' : browser;
    return TRANSLATIONS[mapped] ? mapped : 'en';
}

function applyLang(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const t = TRANSLATIONS[lang][el.dataset.i18n];
        if (t !== undefined) el.textContent = t;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const t = TRANSLATIONS[lang][el.dataset.i18nHtml];
        if (t !== undefined) el.innerHTML = t;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const t = TRANSLATIONS[lang][el.dataset.i18nPlaceholder];
        if (t !== undefined) el.placeholder = t;
    });

    const titleKey = document.querySelector('title[data-i18n]');
    if (titleKey) {
        const t = TRANSLATIONS[lang][titleKey.dataset.i18n];
        if (t) document.title = t;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

(function () {
    const lang = detectLang();
    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
})();
