import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Document - page route");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content=" index, follow" />{" "}
        {/* searcvh enginelarrbilan ishalsh configuration, va bizni contentlarga folloq qilishi mumkin  */}
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/*//* SEO (search engine optimization ) */}
        <meta
          name="keyword"
          content="nestar, nestar.uz,devex mern, mern nestjs fullstack"
        />{" "}
        {/* Google searchda qaysi sozlardan foydalansa recomend qilishi */}
        <meta
          name="description"
          content={
            ("Buy and sell properties anywhere and anytime in South Korea.| " +
              "Покупайте и продавайте недвижимость в любом месте и в любое время в Южной Корее.|" +
              "한국에서 언제 어디서나 부동산 사고팔기.|"+
            "Janubiy Koreyada istalgan joyda va istalgan vaqtda mulk sotib oling va soting")
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
