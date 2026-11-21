(() => {
  'use strict';

  const locales = ['zh-TW', 'en', 'ko', 'ja'];
  const translations = {
    intro: ['按類別瀏覽網站已公開的資料與內容。', 'Browse public resources by category.', '공개 자료를 분류별로 찾아보세요.', '公開資料をカテゴリ別に閲覧できます。'],
    articles: ['瀏覽已公開的文章與主題。', 'Browse public articles and topics.', '공개 글과 주제를 살펴보세요.', '公開記事やトピックを閲覧できます。'],
    browseArticles: ['瀏覽文章 →', 'Browse articles →', '글 보기 →', '記事を読む →'],
    statements: ['查看文章專區的公開聲明分類。', 'Browse the public statements category.', '공개 성명 분류를 살펴보세요.', '公開声明のカテゴリを閲覧できます。'],
    browseStatements: ['查看分類 →', 'Browse category →', '분류 보기 →', 'カテゴリを見る →'],
    forum: ['瀏覽公共論壇的主題與討論。', 'Browse public forum topics and discussions.', '공개 포럼의 주제와 토론을 살펴보세요.', '公開フォーラムのトピックや議論を閲覧できます。'],
    gospel: ['瀏覽已公開的福音錄音。', 'Browse publicly available Gospel recordings.', '공개된 복음 녹음을 살펴보세요.', '公開されている福音の音声を閲覧できます。'],
    listen: ['收聽錄音 →', 'Listen to recordings →', '녹음 듣기 →', '音声を聴く →'],
    title: ['資料庫 · 真實之聲', 'Resources · Voice of Truth', '자료실 · 진실의 목소리', '資料室 · 真実の声'],
  };

  const copy = [...document.querySelectorAll('[data-library-copy]')]
    .map(element => [element, element.textContent, translations[element.dataset.libraryCopy]]);
  const originalTitle = document.title;
  const update = () => {
    const index = locales.indexOf(document.documentElement.lang);
    for (const [element, original, translationsForElement] of copy) {
      const next = translationsForElement[index] ?? original;
      if (element.textContent !== next) element.textContent = next;
    }
    const title = translations.title[index] ?? originalTitle;
    if (document.title !== title) document.title = title;
  };

  new MutationObserver(update).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang'],
  });
  update();
})();
