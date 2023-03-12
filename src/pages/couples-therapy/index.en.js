import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BookingButton } from "../../components/buttons"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="Couples Therapy | Couple Counseling and Marriage Counseling in Tokyo"
        description="Help for partnered couples, premarital counseling, marriage counseling, couples divorced, or considering divorce, dating coaching."
      />
      <section className="py-6 md:py-16 bg-image bg-image-plant">
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <h1 className="page-title b-line">Couples Therapy</h1>
              <h2 className="font-light text-4xl">
                Help for partnered <strong>couples</strong>,{" "}
                <strong>premarital counseling</strong>,{" "}
                <strong>marriage counseling</strong>, couples divorced, or
                considering divorce, dating coaching.
              </h2>
              <p className="text-lg">
                Conflict is an intrinsic aspect of any substantive relationship.
                Couples therapy, couple counseling or marriage counseling is a
                desirable choice when you are experiencing a significant level
                of conflict with your partner that is impeding you, more often
                than not, to enjoy each other&#39;s company. Couples counseling
                or therapy can help you find new ways of communicating,
                negotiating, understanding, and appreciating one another.
              </p>
              <p className="text-lg">
                Couple counseling by an expert may save your relationship before
                it&#39;s too late. Yet, remaining together is not the only--nor
                necessarily the best--outcome for all couples seeking
                professional help. Sometimes couples therapy can facilitate
                letting go of a relationship that is no longer satisfying,
                sustainable, or beneficial. Most often the outcome of couples
                counseling cannot be determined beforehand. In most cases
                though, the outcome (or decisions made after consultations with
                couples therapists) becomes more deliberate and manageable, and
                less catastrophic than those separations or divorces decided and
                executed without professional help.
              </p>
              <p className="text-lg">
                I use an integrative approach to conflict negotiation within
                couples, incorporating the affective, cognitive, and
                transactional levels existing in all interactions to better
                guide the navigation of obstacles and fractures taking place
                among partners. I work with different layers and dimensions
                common to all couples&#39; lives: power, intimacy, and
                commitment; and from multiple perspectives: cognition, emotion,
                past, present, and future; the conscious and the unconscious
                dynamics in and between them; problem-solving or insight focus.
              </p>
              <div className="text-center md:text-left">
                <BookingButton />
              </div>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
