import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BookingButton } from "../components/buttons"

const Index = props => {
  const images = useStaticQuery(graphql`
    query {
      tumee: file(
        relativePath: {
          eq: "tumee-bayanbileg-english-speaking-therapist-in-tokyo-beyondbleu.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout {...props}>
      <SEO
        title="トラウマカウンセリング、うつ病・不安障害カウンセリング東京"
        description="生きている以上、誰でも何かしらの問題や壁にぶつかります。そんな時にどう乗り越えたらいいか、どんな捉え方をしたらいいか、前に進むために何をするか等を具体的に一緒に探していく場がカウンセリングです。そして、成長したり、考え方のバリエーションを増やしたり、新しい自分を発見する場でもあります。"
      />
      <header className="home-header py-6 md:py-16 flex items-center">
        <div className="container relative">
          <div className="lg:flex items-center">
            <div className="lg:w-2/3 lg:pl-10 lg:pr-16">
              <h1 className="text-2xl text-center lg:text-left font-normal leading-snug lg:mb-0">
                生きている以上、誰でも何かしらの問題や壁にぶつかります。そんな時にどう
                <strong className="lg:whitespace-no-wrap">乗り越</strong>
                えたらいいか、どんな
                <strong className="lg:whitespace-no-wrap">捉え方</strong>
                をしたらいいか、
                <strong className="lg:whitespace-no-wrap">前に進む</strong>
                ために何をするか等を具体的に一緒に探していく場がカウンセリングです。そして、
                <strong className="lg:whitespace-no-wrap">成長</strong>
                したり、考え方のバリエーションを増やしたり、
                <strong className="lg:whitespace-no-wrap">新しい自分</strong>
                を発見する場でもあります。
              </h1>
            </div>
            <div className="lg:w-1/3 mb-6 lg:mb-0">
              <Img
                fluid={images.tumee.childImageSharp.fluid}
                className="mx-auto max-w-lg shadow-xl"
                alt="Tumee Bayanbileg - English Speaking Therapist in Tokyo"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 pt-10 text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p class="text-lg">
              初めての方は、慣れない場所に来て、その道のカウンセラーとはいえ初対面の人に話をすることは不安や緊張があって当たり前です。カウンセリングは必ずしも心の悩みや不調がある人だけが受けるものではありません。もちろん、はじめは不快な症状を取り除きたいとか、自分のことをもっと知りたい、生き方を見直したい、人自分の心をごまかしたくない、人間関係の悩みを解消したいという目的で始めることが大半です。
            </p>
            <p class="text-lg">
              私たちは、「人は誰でも自分の問題を解決していく潜在的な力を持っている」と提唱したカール・ロジャーズの来談者中心療法を基本姿勢とし、ご相談の方の主体
              性を尊重し、カウンセラーの価値観や決め付けなどによる判断がない姿勢でお話を聴いていきます。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-400 max-w-6xl mx-auto" />

      <section className="py-20 text-center relative">
        <div className="container">
          <div className="xl:flex items-center py-0">
            <div className="xl:w-1/3 p-5">
              <h3 className="mb-2 text-xl">
                <FontAwesomeIcon icon="globe-asia" className=" text-2xl" />{" "}
                PSYCHOTHERAPY JAPAN. LLC
              </h3>
              <div className="uppercase">
                心理カウンセリング＆企業コンサルティング
              </div>
            </div>
            <div className="xl:w-1/3 p-5">
              <a href="tel:03-5962-3883" className="no-underline">
                <h3 className="mb-2 text-2xl">
                  <FontAwesomeIcon icon="phone" /> 03-5962-3883
                </h3>
                <div className="uppercase">CALL NOW</div>
              </a>
            </div>
            <div className="xl:w-1/3 p-5">
              <a href="mailto:info@beyondbleu.com" className="no-underline">
                <h3 className="mb-2 text-2xl">
                  <FontAwesomeIcon icon="envelope" /> info@beyondbleu.com
                </h3>
                <div className="uppercase">E-MAIL ME</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-400 max-w-6xl mx-auto" />

      <section className="py-32 text-center">
        <div className="container">
          <div className="text-center">
            <h2>クライアント様のご感想</h2>
          </div>
          <div className="lg:flex py-3">
            <div className="lg:w-1/2 p-5">
              <p className="mb-0">
                <FontAwesomeIcon
                  icon="quote-left"
                  className="mb-2 text-gray-400"
                />{" "}
                バヤンビレグ様、2ヶ月間のカウンセリング誠にありがとうございました。
                私はカウンセリングに行く前まで、自分の失敗などがあった時に自分を責めてしまいがちで、自己肯定感を高める必要があると強く感じていました。
                そのような中カウンセリングを受けていると、なかなか周りの人と話す機会がない心のことを詳細に話すことができ、回数を重ねる中で素直な自分の心、自分のマインドに気づく事ができました。素直な心、マインドを大切にするよう心がけること、自分の人生に対する高い理想を本質的なレベルまで落とし込むこと、自分の長所を見返すこと、深呼吸をすることの4つを意識して日常的に行い続けるうちに、自分に対する不満や将来の自分に対する過度な期待が無くなりました。おかげさまで穏やかに安定した心で今を生きることができるようになりました。
                これからもカウンセリングで学んだことを続けて、穏やかに安定した心で今を生き続けられるよう、意識していきます。{" "}
                <FontAwesomeIcon
                  icon="quote-right"
                  className="mb-2 text-gray-400"
                />
              </p>
            </div>
            <div className="lg:w-1/2 p-5">
              <p className="mb-0 text-gray-900">
                <FontAwesomeIcon
                  icon="quote-left"
                  className="mb-2 text-gray-400"
                />{" "}
                私は冬になると決まって気分が落ち込み、朝起きずらくなり、家事も手抜きになりました。先生に相談すると「冬季うつじゃない？」と言われ、夫に腹が立っていたことを吐き出すと元気になりました。もっと早く気付けばよかった。今まで気づかずにいた生きづらさのようなものを見つけると、カウンセリングを受けて解決することを続けています。過去に味わった不快な感情を思いだし、吐き出すと、想像以上にスッキリし、その夜はグッスリ眠ることができます。
                カウンセリングでは、本当の感情に向き合い、小さい頃に下した自分の決断に気づいていきます。何年も、何十年もふたをしてきたことに向き合うのは、正直なところ、かなりきついと感じるときもあります。3０年以上かかえていた、心の中の黒く重たい感覚が消え、生きていることへの罪悪感がなくなることがありえるなんて。こんなに楽になれるなんて。1年前の私には想像もできないことでした。
                今、何かの問題で苦しんでいる人には、思い切って再決断のカウンセリングを受けて欲しいなと思います。きっとよくなりますよ。{" "}
                <FontAwesomeIcon
                  icon="quote-right"
                  className="mb-2 text-gray-400"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 pt-0">
        <div className="container">
          <div className="text-center">
            <BookingButton />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
