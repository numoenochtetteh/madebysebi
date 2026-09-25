import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="not-found-page">
        <section className="not-found-card">
          <span className="not-found-code">404</span>

          <div>
            <p className="not-found-kicker">PAGE NOT FOUND</p>
            <h1>
              Looks like this page
              <br />
              moved somewhere else.
            </h1>
            <p className="not-found-copy">
              The page you were looking for does not exist or may have been
              moved. Head back home or explore our latest work.
            </p>

            <div className="not-found-actions">
              <Link href="/">
                <ArrowLeft size={16} />
                Back home
              </Link>
              <Link href="/work" className="not-found-secondary">
                View our work
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      <style>{`
        .not-found-page {
          min-height: 78vh;
          display: grid;
          place-items: center;
          padding: 150px 28px 80px;
          background: #f4f4f1;
          color: #111;
        }

        .not-found-card {
          width: min(1300px, 100%);
          display: grid;
          grid-template-columns: 0.55fr 1fr;
          gap: 70px;
          align-items: end;
          border-top: 1px solid #d4d0c8;
          padding-top: 55px;
        }

        .not-found-code {
          font-size: clamp(110px, 17vw, 250px);
          line-height: .75;
          font-weight: 650;
          letter-spacing: -.09em;
          color: #cefa74;
        }

        .not-found-kicker {
          margin: 0 0 22px;
          font-family: ui-monospace, monospace;
          font-size: 9px;
          letter-spacing: .16em;
          color: #77716b;
        }

        .not-found-card h1 {
          margin: 0;
          font-size: clamp(48px, 5.7vw, 86px);
          line-height: .93;
          letter-spacing: -.065em;
          font-weight: 600;
        }

        .not-found-copy {
          max-width: 560px;
          margin: 28px 0 0;
          color: #6d6760;
          line-height: 1.7;
          font-size: 14px;
        }

        .not-found-actions {
          display: flex;
          gap: 10px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .not-found-actions a {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border-radius: 999px;
          padding: 0 20px;
          background: #111;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
        }

        .not-found-actions .not-found-secondary {
          background: transparent;
          color: #111;
          border: 1px solid #ccc8bf;
        }

        @media (max-width: 800px) {
          .not-found-card {
            grid-template-columns: 1fr;
            gap: 45px;
          }
        }

        @media (max-width: 600px) {
          .not-found-page {
            padding: 120px 14px 65px;
          }

          .not-found-card {
            gap: 32px;
            padding-top: 35px;
          }

          .not-found-code {
            font-size: 120px;
          }

          .not-found-card h1 {
            font-size: 46px;
          }
        }
      `}</style>
    </>
  );
}
